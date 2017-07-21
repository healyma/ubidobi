var Stuff = require('../models/user.mdl')
var Task = require('../models/task.mdl');
var jwt = require('jwt-simple');
var config=require('../config.js');
var router = require('express').Router()
var _ = require('lodash');
var express = require('express')
var app = express()
app.use(require('body-parser').json())


router.get('/auth/allstuff',function(req,res,next){
    Stuff.find(function(err,resp){
        if(err){next(err);}
        res.json(resp);
    })
})
router.get('/auth/my/tasks', function (req, res, next) {
    //get the list of tasks for the current user
    var id = jwt.decode(req.headers['x-auth'],config.secret);
    console.log(id);
    
     
    Stuff.findOne({user: id.user}, function (err, stuff) {
        if (err) {
            console.log(err);
            next(err);
        }
        if (!stuff) {
            console.log('new stuff');
            //this user does not have any 'stuff'
            stuff = new Stuff({user: id.user, tasks: [], messages: []});
            console.log(stuff);
        } else {
            console.log('got one');
        }
        //find tasks matcking the list returned
        var taskArray=[];
        for(var i=0;i<stuff.tasks.length;i++){
            taskArray.add(mongoose.Types.ObjectId(stuff.tasks[i]._id))
        }
        console.log(taskArray);
        Task.find({'_id': { $in:taskArray}}, function(err, tasks){
     console.log(tasks);
     res.json(tasks);
});
       

    }) 
})

module.exports=router