/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var db = require('./db');
var taskSchema=db.Schema({
    createdBy:{type:db.Schema.Types.ObjectId,ref:'User'},
    createdAt:{type:Date,required:true, default:Date.now},
    title:{type:String,required:true},
    details:{type:String},
    status:{type:String},
    startDate:{type:Date},
    endDate:{type:Date}, 
    blockedBy:[{type:db.Schema.Types.ObjectId,ref:'Task'}],
    blocking:[{type:db.Schema.Types.ObjectId,ref:'Task'}],
    cssStyle:[{displaytype:String}],
    cssClass:[{displayType:String}],
    progress:{type:Number},
    people:[{type:db.Schema.Types.ObjectId,ref:'User'}],
    assigned:[{type:String,user:{type:db.Schema.Types.ObjectId,ref:'User'},accepted:Boolean}],
    type: String, // need to have different types (meeting, appointment, issue feature etc. to support all types of representations
    followers:[{type:db.Schema.Types.ObjectId,ref:'User'}]
} ,{
  toObject: {
  virtuals: true
  },
  toJSON: {
  virtuals: true 
  }})
taskSchema.virtual('from').get(function(){return this.startDate});
var Task=db.model('Task',taskSchema);

module.exports=Task