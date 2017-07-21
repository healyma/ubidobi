var IM=require('../models/im.mdl')
var Thread= require('../models/thread.mdl')
var User = require('../models/user.mdl')
var router = require('express').Router();
var express = require('express');
var wsocket=require('./wsocket');
var app = express();
app.use(require('body-parser').json());
router.get('/auth/thread/list/',function(req,res,next){
    Thread.find(function(err,threads){
        if(err){ next(err);}
        res.send(threads);
    });
      
});
router.get('/auth/thread/list/:userid',function(req,res,next){
    Thread.find({participants:req.params.userid},function(err,threads){
        if(err){ next(err);}
        res.send(threads);
    });
      
});
router.get('/auth/im/thread/list/:threadid',function(req,res,next){
    IM.find({thread:req.params.threadid},function(err,msgs){
        if(err){ next(err);}
        res.send(msgs);
    });
      
});
router.get('/auth/im/list/',function(req,res,next){
    IM.find(function(err,msgs){
        if(err){ next(err);}
        res.send(msgs);
    });
      
});
router.get('/auth/im/user/list/:userid',function(req,res,next){
    IM.find({author:req.params.userid},function(err,msgs){
        if(err){ next(err);}
        res.send(msgs);
    });
      
});
router.post('/auth/thread/',function(req,res,next){       
    req.body.participants.forEach(function(party){
           wsocket.message(party.toString(),"new message");
       })
    if(!req.body.threadId){
        //create a new thread
        var thread=new Thread({
            participants:req.body.participants,
            title:req.body.title,
            status:req.body.status
        });

        thread.save(function(err,newThread){
            if(err){ console.log(err); next(err)}
            newIM(newThread._id,req.body.body,req.body.author,res);
            console.log('updating user');
            User.update(
                {_id:{$in: newThread.participants}},
                { $addToSet: {threads: newThread._id } },
                {multi:true}
            ,function(err,res2){
                if(err){next(err)}
                console.log(res2);
            })
        })
        console.log('thread created');
    }else{
        newIM(req.body.threadId,req.body.body,req.body.author,res);
    }
    
});
function newIM(thread,body,author,res){
    var im = new IM({
        thread:thread,
        body: body,
        author: author
    })
    im.save(function(err,msg){
        if(err){res.send(err)}
        res.send(msg);
    })
}
module.exports=router;