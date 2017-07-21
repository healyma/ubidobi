
var Contact = require('../models/contact.mdl')
var router = require('express').Router();
var express = require('express');
var _ = require('lodash');
var app = express();
app.use(require('body-parser').json());
router.post('/auth/contact/invite',function(req,res,next){
    console.log("adding a contact")
    if(addAContact(req.user,req.body.userId,'inviting','invited')) res.send(200);
    else return next("error");
    
});
router.get('/auth/contact/reply/:user/:reply',function(req,res,next){
    if(updateContact(req.user,req.params.user,req.params.reply,req.params.reply))res.send(200);
    else return next("error");
});
// delete a connection request
router.delete('/auth/contact/invite',function(req,res,next){

    if(updateContact(req.user,req.body.userId,'cancelled','cancelled')) res.send(200);
    else return next("error");
});
// list contacts (mine)
router.get('/auth/contact',function(req,res,next){
    Contact.find({userId:req.user})
            .populate({
                path: 'contacts.contactUserId',
        model: 'User'
    })
            .exec(function(err,user){
        if(err){
            return next(err);
            console.log(err);
        }
        res.send(user);
    });

});
//list contacts (specified user)
router.get('/auth/contact/:user',function(req,res,next){
    // TODO: logic to check if logged in user can view contacts for specified user
    Contact.find({userId:req.params.user,'contacts.status':'connected'})
            .populate({
                path: 'contacts.contactUserId',
        model: 'User'
    })
            .exec(function(err,user){
        if(err){
            return next(err);
            console.log(err);
        }
        res.send(user);
    });
});
//remove a contact (mine) -- need to perform the reverse operation
router.delete('/auth/contact',function(req,res,next){
        if(updateContact(req.user,req.body.userId,'removed','deleted')) res.send(200);
    else return next("error");
});
router.post('/auth/contact/search',function(req,res,next){
     
     // TODO: at the moment this is case-sensitive and will not trim inputs, but this can be tweaked later
     // create a JSON parameter list from the fields provided in body
     var allowedToSearch=['username','firstName','lastName','alternativeEmailAddress','linkedProfile']
     var userSrch={};
     var canSearch=false; // need to make sure that some criteria have been specified
        for(var key in req.body) {
  		if(req.body.hasOwnProperty(key)){
		//check if key is in allowedToUpdate
			if(_.indexOf(allowedToSearch,key)>=0){
                            canSearch=true;
				userSrch[key]=req.body[key]; 	
			}
		}
	}
     // return matching users
 
        if(canSearch){
            Contact.find({userId:req.user})
                    .populate({path: 'contacts.contactUserId',
        model: 'User'})
                    .exec(function(err,contact){
                if (err) {console.log(err); return next(err);}
        var i=0;
        var allContacts=contact[0].contacts;
        
       allContacts.forEach(function(element){
           console.log(userSrch)
           if(!element.contactUserId) allContacts.pop(element);
           else if(! _.some([element.contactUserId], userSrch) ){
               allContacts= _.without(allContacts,element);
               console.log("one didn't match");
           }else{
               console.log("one matched");
           }
               
           
       });
       console.log(allContacts);
                res.send(allContacts);
            
                
                
            })
        }else{
            return next(400);
        }
 })
 

// add a new contact -- need to perform the reverse operation
function updateContact(inviter,invited,status_out,status_in){
    // find 2 users (inviter and invitee) and update the relevant connection status
    // for new connections, sey inviter outbound to true and false for invited
    var invitedContact = {};
    var invitingContact = {};

        Contact.update({
            'userId': inviter,"contacts.contactUserId":invited}, 
        { $set: { "contacts.$.status" : status_out } }
        ,
        {multi:true,upsert:true},
        function(err,newStuff){
            if(err){
                console.log(err);
                return false;
            }
            console.log(newStuff);
        })
        Contact.update({
            'userId': invited,"contacts.contactUserId":inviter}, 
        { $set: { "contacts.$.status" : status_in } },
        {multi:true,upsert:true},
        function(err,newStuff){
            if(err){
                console.log(err);
                return false;
            }
            console.log(newStuff);
        })
  return true;
    
    
}
function addAContact(inviter,invited,status_out,status_in){
    // find 2 users (inviter and invitee) and update the relevant connection status
    // for new connections, sey inviter outbound to true and false for invited
    console.log("inviter - " + inviter);
    console.log("invited - " + invited);
    var invitedContact = {};
    var invitingContact = {};

        Contact.update({
            'userId': inviter}, 
        { $addToSet: { "contacts" :{"contactUserId": invited, "outbound": true,"status": "inviting", }} }
        ,
        {multi:true,upsert:true},
        function(err,newStuff){
            if(err){
                console.log(err);
                return false;
            }
            console.log(newStuff);
        })
        Contact.update({
             'userId': invited}, 
        { $addToSet: { "contacts":{contactUserId : inviter, "outbound": false,"status": "invited", }} }
        ,
        {multi:true,upsert:true},
        function(err,newStuff){
            if(err){
                console.log(err);
                return false;
            }
            console.log(newStuff);
        })
  return true;
    
    
}

module.exports=router;
