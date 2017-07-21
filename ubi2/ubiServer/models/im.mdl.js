var db=require('./db')

var IM=db.model('IM',{
    thread:{type:db.Schema.Types.ObjectId,ref:'Thread',required:false},
    body:{type:String,required:true},
    author:{type:db.Schema.Types.ObjectId,ref:'User',required:true},
    ts:{type:Date, default:Date.now,required:true}
})

module.exports=IM;