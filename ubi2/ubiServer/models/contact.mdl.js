var db=require('./db')

var Contact = db.model('Contact',{
    userId:{type:String,required:true},
    contacts:[{
	contactUserId:{type:db.Schema.Types.ObjectId,ref:'User'},
    	connectDate:{type:Date,required:true,default:Date.now},
	disconnectDate:{Date,required:false},
        updateDate:Date,
        status:String,
        outbound:Boolean
    }]
   
})
module.exports=Contact;


