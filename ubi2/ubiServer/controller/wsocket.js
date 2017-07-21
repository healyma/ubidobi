/*
 * each user will connect to their own lists 
 * e.g. user user1 will connect to _user1_contacts
 * when a contact of user1 is updated, a message will be published
 * 
 * will need to use this module to create and manage subscription lists
 * 
 * 
 */

var ws = require('ws');
      var redis;
var pubsub;
ws.connect = function (server) {
  var wss = new ws.Server({server: server})
  var clients=[];
  wss.on('connection', function (webSock) {
       webSock.on('message',function (data,flags){
           //need to pull this out as it will handle every inbound message
       var op=JSON.parse(data);
       clients[op.userid]=webSock;
      console.log("userid=" + op.userid);
  })
  })
 
  

    try{
        if(require.resolve('redis')){
            
           redis = require('redis');
            pubsub = redis.createClient();
            pubsub.subscribe("58a4dc60eae5af11d58f58ae");
            pubsub.on('message',function(chan,msg){
                console.log(chan + ": " + msg);
            //    clients["58a4dc60eae5af11d58f58ae"].send('hello');
        clients['58a4dc60eae5af11d58f58ae'].send("Message: hello");
    
       //     pubsub.publish('58a4dc60eae5af11d58f58ae',"hello")
   });
        }
    }catch(e){
        console.log(e)
        redis=require('./redisWrap');
        pubsub=[];
        pubsub.publish=function(channel,message){
            console.log(channel + ":- " + message);
        }
    }
    
  
}



module.exports={
    ws:ws,
    broadcast:function(chArray,message){
        chArray.forEach(function(channel){
            pubsub.publish(channel,message);
        })
    },
    message:function(channel,message){
    // need to find connected users that are subscribed to the object
    // broadcast an updat for the operation on the object by the user
    // e.g. contact created by Mark
    pubsub.publish(channel,message);
    },
    subscribe:function(subscriber,channel){
        
    },
    unsubscribe:function(subscriber,channel){
    } 
}
