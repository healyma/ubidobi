
var Project = require('../models/project.mdl');
var Calendar = require('../models/calendar.mdl');
var Gantt = require('../models/gantt.chart.mdl');
var mongoose=require('mongoose');
var router = require('express').Router()
var _ = require('lodash');
var express = require('express');
var wsocket = require('./wsocket');
var app = express()
app.use(require('body-parser').json())

router.post('/auth/project',createProject);
router.get('/auth/project',myProjects);
router.get('/auth/project/user/:userId',userProjects);
router.get('/auth/project/:projectId',projectDetails);
router.post('/auth/project/update',updateProject);
function createProject(req, res, next) {
    var project = new Project({
        title: req.body.title,
        Description: req.body.description,
        createdBy: req.user,
        status: req.body.status,
        members: {userId:req.user}
    })
    console.log(project);
    project.save(function (err, proj) {
        if (err) {
            console.log(err);
            next(err);
        }
      //  wsocket.broadcast([req.user],'project:new:A new project was created');
        console.log(proj);
        //create a new calendar assigned to this project
        var calendar = new Calendar({
            createdBy: req.user,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            project: proj._id
        })
        console.log(calendar);
        calendar.save(function (err, cal) {
            if (err) {
                console.log(err);
                next(err);
            }
            console.log(cal);
        })
        // create a new gantt chart assigned to this project
        var gantt = new Gantt({
            name: req.body.title,
            createdBy: req.user,
            project: proj._id

        })
        console.log(gantt);
        gantt.save(function (err, gantt) {
            if (err) {
                console.log(err);
                next(err);
            }
        })
        // create a budget

        //create a messaging room

        //create a workspace for collaboration
        res.json(proj);
    });
}
function myProjects(req, res, next) {
    console.log(req.user);
    Project.find({members:{$elemMatch:{userId:  req.user}}}, function (err, proj) {
        if (err) {
            console.log(err);
            next(err);
        }
        res.send(proj);
    })
}
function userProjects (req, res, next) {
    Project.find({members:{$elemMatch:{userId:  req.params.user}}},function (err, proj) {
        if (err) {
            next(err);
        }
        res.send(proj);
    })
}
function projectDetails (req, res, next) {
    //check to make sure that req.user has access to the project
    Project.findById(req.params.projectId,function (err, proj) {
        if (err) {
            next(err);
        }
        res.send(proj);
    })
}
function updateProject(req,res,next){
    Project.findByIdAndUpdate( mongoose.Types.ObjectId(req.body.projectId),
    {$addToSet:{'members': {userId:req.body.userId,RACI:req.body.raci}}},
    function(err,result){
        if(err){console.log(err);next(err);}
        res.send(result);
    }
    );
}

module.exports = router;