/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Gantt= require('../models/gantt.chart.mdl');
var GanttRow=require('../models/gantt.row.mdl');
var GanttTask=require('../models/gantt.task.mdl');
var router = require('express').Router();
var _ = require('lodash');
var express = require('express');
var mongoose=require('mongoose');
var app = express();
app.use(require('body-parser').json());

router.get('/auth/gantt/:chartId', function (req, res, next) {
    //get the list of tasks for the current user
    
    Gantt.findById(req.params.chartId)
    .populate({path:'rows',model:'GanttRow'})
            .exec(function(err,resp){
        if(err){next(err);}
        res.send(resp);
    })
})


router.get('/auth/gantt',function(req,res,next){
    Gantt.find()
            .populate({path:'rows',model:'GanttRow'})
            .exec(function(err,resp){
        if(err){next(err);}
        res.send(resp);
    })
})
router.post('/auth/gantt/milestone',function(req,res,next){
    //a milestone is just a task with a different style applied
})
router.post('/auth/gantt/taskGroup',function(req,res,next){
    //need to add the group to a particular chart
})
router.post('/auth/gantt/task',function(req,res,next){
    //create a new task
    var ganttTask = new GanttTask({
        createdBy:req.body.createdBy,
        name:req.body.name,
        from:req.body.from,
        to:req.body.to, 
        priority:req.body.priority
    })
    ganttTask.save(function(err,task){
        if(err){console.log(err);next(err)}
        //add a row to a chart
        var ganttRow=new GanttRow({
            name:req.body.name,
            tasks:[task._id]
        })
        ganttRow.save(function(err,row){
        if(err){console.log(err);next(err)}
            //save the row to the chart
            Gantt.update(
            {_id:req.body.ganttChart},
            {$addToSet:{rows:row._id}},
            {upsert:true}
                ,function(err,gantt){        
                    if(err){console.log(err);next(err)}
                    console.log('done')
                    res.send(Gantt); 
                })
                
        })
        
    })
    
    
    //add the task to the row
})
router.post('/auth/gantt/child',function(req,res,next){
var ganttTask = new GanttTask({
        createdBy:req.body.createdBy,
        name:req.body.name,
        from:req.body.from,
        to:req.body.to, 
        priority:req.body.priority
    })
    ganttTask.save(function(err,task){
        if(err){console.log(err);next(err)}
        //add a row to a chart
        var ganttRow=new GanttRow({
            name:req.body.name,
            tasks:[task._id]
        })
        ganttRow.save(function(err,row){
        if(err){console.log(err);next(err)}
            //save the row to the chart
            GanttRow.update(
            {_id:req.body.ganttRow},
            {$addToSet:{children:row._id}},
            {upsert:true}
                ,function(err,gantt){        
                    if(err){console.log(err);next(err)}
                    console.log('done')
                    res.send(Gantt); 
                })
                
        })
        
    })
})

router.post('/auth/gantt/milestone/:milestoneId',function(req,res,next){
    //update a particular milestone
})
router.post('/auth/gantt/taskGroup/:groupId',function(req,res,next){
    //update a particular task group
})
router.post('/auth/gantt/task/:taskId',function(req,res,next){
    //update a particular task
})
router.post('/auth/gantt',function(req,res,next){
    
    var gantt= new Gantt({
            name:req.body.name,
            createdBy:req.body.createdBy,
            data:req.body.data,
            users:req.body.users
    })
    gantt.save(function(err,gantt){
        if(err) {console.log(err);next(err);}
        res.send(gantt);
    })
});
router.delete('/auth/gantt/milestone',function(req,res,next){
    
})
router.delete('/auth/gantt/taskGroup',function(req,res,next){
    
})
router.delete('/auth/gantt/task',function(req,res,next){
    
})
module.exports=router;