/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var db=require('./db')

var UserTask = db.model('UserTask',{
    userId:{type:db.Schema.Types.ObjectId,ref:'User'},
   tasks:[{type:db.Schema.Types.ObjectId,ref:'Task'}],

})
module.exports=UserTask;


