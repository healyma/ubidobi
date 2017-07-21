var db=require('./db');

var Thread=db.model('Thread',{
    participants:{type:db.Schema.Types.ObjectId,ref:'User'},
    title:String,
    status:String //locked, archived, current etc.
})

module.exports=Thread;