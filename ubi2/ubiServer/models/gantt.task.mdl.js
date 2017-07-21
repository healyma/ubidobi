/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var db = require('./db');

var GanttTask=db.model('GanttTask',{
    createdBy:{type:db.Schema.Types.ObjectId,ref:'User'},
    createdAt:{type:Date,required:true, default:Date.now},
    name:{type:String,required:true},
    color:{type:String},
    classes:[{type:String}],
    from:{type:Date},
    to:{type:Date}, 
    priority:Number,
    data:{type:db.Schema.Types.ObjectId,ref:'Task'},
    content:String
});

module.exports=GanttTask