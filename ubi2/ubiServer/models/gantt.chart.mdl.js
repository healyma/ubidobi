var db = require('./db');

module.exports=db.model('Gantt',{
    name:{type:String,required:true},
    data:{type:Object},
    createdBy:{type:db.Schema.Types.ObjectId,ref:'User',required:true},
    createdAt:{type:Date,default:Date.now,required:true},
    users:[{user:{type:db.Schema.Types.ObjectId,ref:'User'},permission:Number}],
    project:{type:db.Schema.Types.ObjectId,ref:'Project'},
    rows:[{type:db.Schema.Types.ObjectId,ref:'GanttRow'}]
})