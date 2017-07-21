var db=require('./db')

var Invite = db.model('Invite',{
    userId:{type:String,required:true},
    contactUserId:{type:String,required:true},
    inbound:boolean,
    inviteDate:{type:Date,required:true,default:Date.now},
    inviteMessage:{type:String},
    acceptDate:{type:Date},
    rejectDate:Date
})
module.exports=Invite;


