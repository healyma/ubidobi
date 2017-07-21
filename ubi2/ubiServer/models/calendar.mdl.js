
var db = require('./db');
module.exports=db.model('Calendar',{
    createdBy:{type:String,required:true},
    createdAt:{type:Date,required:true, default:Date.now},
    title:String,
    description:String,
    status:String,
    users:[
        {role:String,
            person:{type:db.Schema.Types.ObjectId,ref:'User'},
            accepted:Boolean}] ,
    project:{type:db.Schema.Types.ObjectId,ref:'Project'},
    events:[{type:db.Schema.Types.ObjectId,ref:'Event'}]
})

