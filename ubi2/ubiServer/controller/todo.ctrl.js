/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Todo = require('../models/todo.mdl')
var User = require('../models/user.mdl')
var router = require('express').Router()
var _ = require('lodash');
var express = require('express');
var mongoose=require('mongoose');
var app = express()
app.use(require('body-parser').json())


router.get('/auth/todo/', function (req, res, next) {
    
    Todo.find({followers:req.user}, function (err, todo) {
        console.log(req.user);
        if (err) {
            next(err);
        }
        res.send(todo);
    })
})
router.get('/auth/todo/', function (req, res, next) {
    
    Todo.find({followers:req.user}, function (err, todo) {
        console.log(req.user);
        if (err) {
            next(err);
        }
        res.send(todo);
    })
})

router.get('/auth/todo/byproject/:projectId', function (req, res, next) {
    //get the list of tasks for the current user
    console.log(req.params.projectId);
    Todo.find({projectId:req.params.projectId},function (err, task) {
        if (err) {
            next(err);
        }
        res.send(task);
    })
})

router.get('/auth/todo/:todo', function (req, res, next) {
    
    Todo.findById(req.params.todo, function (err, todo) {
        if (err) {
            next(err);
        }
        res.send(todo);
    })
})
router.get('/auth/todo/list/:userId', function (req, res, next) {
    //get the list of tasks for the current user
    console.log(req.params.userId);
    Todo.find({createdBy: req.params.userId}, function (err, task) {
        if (err) {
            next(err);
        }
        res.send(task);
    })
})
router.post('/auth/todo', function (req, res, next) {
    //create a new task
    // need to have different types (meeting, appointment, issue feature etc. to support all types of representations
console.log('starting save');
    var todo = new Todo({
        createdBy: req.body.createdBy,
        createdAt: req.body.createdAt,
        title: req.body.title,
        details: req.body.details,
        status: req.body.status,
        startDate: req.body.startDate,
        projectId: req.body.projectId,
        endDate: req.body.endDate,
        cssStyle: req.body.cssStyles,
        cssClass: req.body.cssClass,
        progress: req.body.progress,
        followers: req.body.followers,
        assigned: req.body.assigned,
        type: req.body.type
    })
    console.log(todo);
    todo.save(function (err, task) {
        if (err) {
            console.log(err);
            return next(err)
        }


    })
    res.send(todo)
})
router.put('/auth/todo', function () {

})
module.exports=router