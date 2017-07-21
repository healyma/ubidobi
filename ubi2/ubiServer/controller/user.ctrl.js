/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var User = require('../models/user.mdl')
var router = require('express').Router()
var moment = require('moment')
var _ = require('lodash');
var wsocket=require('./wsocket');
var express = require('express');
var jwt = require('jwt-simple')
var config=require('../config.js')
var app = express()
var bcrypt = require('bcrypt')
app.use(require('body-parser').json())

var secretKey  = config.secret;
router.get('/auth/user/list', function (req, res, next) {
  User.find(function(err, users) {
    if (err) { return next(err) } 
    console.log("/auth/users/ - User ID:" + req.user);
    res.json(users)
  });
})
router.getUser=function(){
    
}
router.get('/auth/user/:userid', function (req, res, next) {
  User.findById(req.params.userid,function(err, users) {
    if (err) { return next(err) }
    console.log("/auth/user/userid - User ID:" + req.userid);
    res.json(users)
  });
})

router.get('/auth/user/',function(req,res,next){
    var token  = req.headers['x-auth'];
    //need to check the expiry etc. in here
    var id = jwt.decode(token,secretKey);
    console.log('GET /auth/user/' + id.user);
     User.findById(id.user,function(err, users) {
    if (err) { console.log(err); return next(err) }
    console.log(users);
    console.log("/auth/user/ - User ID:" + users._id);
   // res.json(users);
     });
     
})
router.delete('/auth/user',function(req,res,next){
    // have to log in as a user in order to delete it
    // may change this to set a deleted flag rather than deleting the A/C
    User.findByIdAndRemove(req.user, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'User removed from the ubi!' });
    })
    
})
 router.post('/auth/user/search',function(req,res,next){
     
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
				console.log('Element: ' + key + ', = ' + req.body[key]); 	
			}
		}
	}
     // return matching users
     console.log(userSrch);
        if(canSearch){
            User.find(userSrch,function(err,user){
                if (err) {console.log(err); return next(err);}
                res.send(user);
            })
        }else{
            return next({"400":"no criteria provided"});
        }
 })
 
router.post('/open/user/auth',function(req,res,next){
    var expires = moment().add(1, 'days').valueOf();
    console.log(req.body.username);
    User.findOne({username: req.body.username})
            .select('password')
            .exec(function ( err,user) {
                console.log("in Exec");
                console.log(err);
                console.log(user);
                if (err) {
                    return next(err)
                }

                     console.log(user.password);
                if (!user) {
                    return res.send(401)
                }

                bcrypt.compare(req.body.password, user.password, function (err, valid) {
                    
                    if (err) {
                        return next(err)
                    }
                    if (!valid) {
                        return res.send(401)
                    }
                    var token = jwt.encode({user: user._id, expires: expires}, secretKey)
                    var rtn = {};
                    User.findById(user._id, function (err, profile) {
                        if (err) {
                            return next(err)
                        }
                        rtn.token = token;
                        rtn.user = profile;
                        res.json(rtn)
                    });
      
    })
  })
})
router.post('/auth/user',function(req,res,next){
	var allowedToUpdate=['username','password','firstName','lastName','alternativeEmailAddress','profilePic','linkedProfile']
     User.findById(req.user,function(err,user){
    if (err) {return next(err);}
	for(var key in req.body) {
  		if(req.body.hasOwnProperty(key)){
		//check if key is in allowedToUpdate
			if(_.indexOf(allowedToUpdate,key)>=0){
				user[key]=req.body[key];
				console.log('Element: ' + key + ', = ' + req.body[key]); 	
			}
		}
	}
        user.save(function(err){
            if(err){console.log(err)}
            res.json(user);
        })
    })
})
router.post('/auth/user/pwd',function(req,res,next){
    User.findById(req.body.userid,function(err,user){
    if (err) {res.send(err);}
	if(req.body.password) {
              bcrypt.hash(req.body.password, 10, function (err, hash) {
                user.password = hash
                user.save(function (err) {
                  if (err) { throw next(err) }
                  res.send(201)
                })
  })
	}

    })
})
router.post('/open/user', function (req, res, next) {
    
  var user = new User({
    username: req.body.username,
    firstName:req.body.firstName,
    lastName:req.body.lastName
  })
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    user.password = hash;
    user.save(function (err,result) {
      if (err) { console.log(err); return next(err); }
      console.log(result);
      res.send(201)
    })
  })

})
module.exports=router;
