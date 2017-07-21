var db=require('./db');

module.exports=db.model('Feed',{
    userId:{type:db.Schema.Types.ObjectId,required:true,ref:'User'},
    createdAt:{type:Date,default:Date.now,required:true},
    html:{type:String,required:true},
    title:{type:String,required:true}
})