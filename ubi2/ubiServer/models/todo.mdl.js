/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var db = require('./db');
var todoSchema=db.Schema({
    createdBy:{type:db.Schema.Types.ObjectId,ref:'User'},
    createdAt:{type:Date,required:true, default:Date.now},
    projectId:{type:db.Schema.Types.ObjectId,ref:'Project',required:true},
    title:{type:String,required:true},
    tasks:[{type:db.Schema.Types.ObjectId,ref:'Task'}],
    lists:[{type:db.Schema.Types.ObjectId,ref:'Todo'}],
    status:{type:String},
    notes:[{type:db.Schema.Types.ObjectId,ref:'Note'}],
    threads:[{type:db.Schema.Types.ObjectId,ref:'Thread'}],
    startDate:{type:Date},
    endDate:{type:Date},
    dueDate:{type:Date},
    blockedBy:[{type:db.Schema.Types.ObjectId,ref:'Task'}],
    blocking:[{type:db.Schema.Types.ObjectId,ref:'Task'}],
    progress:{type:Number},
    followers:[{type:db.Schema.Types.ObjectId,ref:'User'}]
} )
var autoPop = function(next) {
  this.populate('tasks');
  this.populate('lists');  
  next();
};

todoSchema
        .pre('findOne', autoPop)
        .pre('find', autoPop);


var Todo=db.model('Todo',todoSchema);


module.exports=Todo