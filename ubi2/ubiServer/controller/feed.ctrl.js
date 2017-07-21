var Feed=require('../models/feed.mdl')
var router = require('express').Router();
var express = require('express');
var wsocket=require('./wsocket');
var app = express();

router.get('/auth/myfeed/:userId',function(req,res,next){
    Feed.find({userId:req.params.userId},function(err,myFeed){
            if(err){next(err)}
            res.send(myFeed);
    })
})
router.message=function(userId,html,title){
    Feed.create({
        userId:userId,
        html:html,
        title:title
    },function(err,newFeed){
        
    })
}
module.exports=router