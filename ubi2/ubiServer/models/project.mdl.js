var db=require('./db')

module.exports=db.model('Project',{
    title:String,
    Description:String,
    createdBy:String,
    createdAt:{type:Date,required:true,default:Date.now},
    status:String,
    members:[{userId:{type:db.Schema.Types.ObjectId,ref:'User',required:true},RACI:{type:String,default:'A'},added:{type:Date,default:Date.now}}]
})