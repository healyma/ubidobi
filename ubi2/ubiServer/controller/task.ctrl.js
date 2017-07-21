/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Task = require('../models/task.mdl')
var Stuff = require('../models/user.mdl')
var Feed=require('./feed.ctrl');
var router = require('express').Router()
var _ = require('lodash');
var express = require('express');
var mongoose=require('mongoose');
var app = express()
app.use(require('body-parser').json())

router.get('/auth/task', function (req, res, next) {
    //get the list of tasks for the current user
    Task.findById(req.params.taskId, function (err, task) {
        if (err) {
            next(err);
        }
        res.send(task);
    })
})
router.get('/auth/task/list', function (req, res, next) {
    //get the list of tasks for the current user
    Task.find(function (err, task) {
        if (err) {
            next(err);
        }
        res.send(task);
    })
})
router.get('/auth/task/list/:userId', function (req, res, next) {
    //get the list of tasks for the current user
    console.log(req.params.userId);
    Task.find({createdBy: req.params.userId}, function (err, task) {
        if (err) {
            next(err);
        }
        res.send(task);
    })
})
router.post('/auth/task', function (req, res, next) {
    //create a new task
    // need to have different types (meeting, appointment, issue feature etc. to support all types of representations
console.log('starting save');
    var task = new Task({
        createdBy: req.body.createdBy,
        createdAt: req.body.createdAt,
        title: req.body.title,
        details: req.body.details,
        status: req.body.status,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        cssStyle: req.body.cssStyles,
        cssClass: req.body.cssClass,
        progress: req.body.progress,
        people: req.body.people,
        assigned: req.body.assigned,
        type: req.body.type
    })
    console.log(task);
    task.save(function (err, task) {
        if (err) {
            console.log(err);
            return next(err)
        }
            var taskArray=[];
        for (i = 0; i < req.body.people.length; i++) {
            taskArray.push(mongoose.Types.ObjectId(req.body.people[i].id));
        }
        Feed.message('58b410bfe108920ce0fa47f0','Some html content','a title');
        Stuff.update({
            '_id': { $in:taskArray}}, 
        {$push:{tasks:task._id}},
        {multi:true},
        function(err,newStuff){
            if(err){
                console.log(err);
            }
            console.log(newStuff);
        })

    })
    res.send(task)
})
router.put('/auth/task', function () {

})
module.exports=router