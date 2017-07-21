/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var db=require('./db')

var UserThread = db.model('UserThread',{
    userId:{type:db.Schema.Types.ObjectId,ref:'User'},
   threads:[{type:db.Schema.Types.ObjectId,ref:'Thread'}]
    
})
module.exports=UserThread;


