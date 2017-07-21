
var Contact = require('../models/contact.mdl')
var router = require('express').Router()
var _ = require('lodash');
var express = require('express')
var app = express()
app.use(require('body-parser').json())



router.get('/auth/contact/:contact', function (req, res, next) {
  contact.findById(req.params.contactUserId,function(err, contacts) {
    if (err) { return next(err) }
    res.json(contacts)
  });
})
router.get('/auth/contacts', function (req, res, next) {
  Contact.find(function(err, contacts) {
    if (err) { return next(err) }
    res.json(contacts)
  });
})
router.delete('/auth/contact',function(req,res,next){
    Contact.findByIdAndRemove(req.body.contactId, function(err,result) {
    if (err)
      res.send(err);

    res.send(result);
    })
    
})

router.put('/auth/contact',function(req,res,next){
	var allowedToUpdate=['disconnectDate','current']
    Contact.findById(req.body.id,function(err,contact){
    if (err) {res.send(err);}
	for(var key in req.body) {
  		if(req.body.hasOwnProperty(key)){
		//check if key is in allowedToUpdate
			if(_.indexOf(allowedToUpdate,key)>=0){
				Contact[key]=req.body[key];	
			}
		}
	}
        Contact.save(function(err){
            if(err){console.log(err)}
            res.json(contact);
        })
    })
})
router.post('/auth/contact', function (req, res, next) {
 
  var contact = new Contact({
    userId:req.body.userId,
    contactId:req.body.contactUserId
  })
var optionalFields=['disconnectDate'];
for(var key in req.body) {
  		if(req.body.hasOwnProperty(key)){
		//check if key is in optionalFields
			if(_.indexOf(optionalFields,key)>=0){
		console.log('Element:' + key + ' , Value:' +req.body[key]);
				contact[key]=req.body[key];	
			}
		}
	}
console.log("the contact has been created");
  contact.save(function (err) {
      if (err) { console.log("something went wrong"); throw next(err); }
      res.send(201)
    })

})
module.exports=router;
