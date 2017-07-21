/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express   =    require("express");
var mysql     =    require('mysql');
var app       =    express();

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodeload',
    debug    :  false
});

function handle_database(req,res) {
   
    pool.getConnection(function(err,connection){
        if (err) {
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }  

        console.log('connected as id ' + connection.threadId);
       
        connection.query("insert into loadtest SET ?", [{tstamp:Date.now(),message:'testing'}],function(err,rows){
            connection.release();
            if(!err) {
                res.json(rows);
            }else{
                res.send(err);
            }  
        });

        connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;    
        });
  });
}

app.get("/",function(req,res){-
        handle_database(req,res);
});

app.listen(4000);