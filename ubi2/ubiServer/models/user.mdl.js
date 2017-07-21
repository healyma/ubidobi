/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var db=require('./db')

var User = db.model('User',{
    username:{type:String,required:true, unique : true},
    alternativeEmailAddress:[{type:String,address:String}],
    lastLogin:{type:Date},
    password:{type:String,select:false},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    profileCompleteness:{type:String},
    joinDate:{type:Date,default:Date.now},
    profilePic: { data: Buffer, contentType: String },
    email:String,
    linkedProfile:[{type:db.Schema.Types.ObjectId,ref:'User'}]
})
module.exports=User;


