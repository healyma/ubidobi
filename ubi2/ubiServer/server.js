/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express=require('express')
var request=require('request')
var bodyParser = require('body-parser')
var rtc=require('./controller/wsocket');
var jwtauth=require('./controller/jwtauth');
// var User=require('./controller/user.ctrl');
// var Contact = require('./controller/contact.ctrl');
var app = express()
app.use(bodyParser.json())

app.all('/auth/*',[jwtauth]);


app.post('/',function(req,res){
    
})

/*
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Origin, Content-Type, X-Auth-Token,X-Auth');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

*/
app.use(require('./controller/user.ctrl'));
app.use(require('./controller/contact.ctrl'));
app.use(require('./controller/task.ctrl'));
app.use(require('./controller/todo.ctrl'));
app.use(require('./controller/gantt.ctrl'));
app.use(require('./controller/im.ctrl'));
app.use(require('./controller/calendar.ctrl'));
app.use(require('./controller/myStuff.ctrl'));
app.use(require('./controller/project.ctrl'));
app.use(require('./controller/feed.ctrl'));
//proxy client-side ubi
app.use('/', function(req, res) {  
  var url = 'http://localhost:9000' + req.url;
  req.pipe(request(url)).pipe(res);
});

var server = app.listen(3000);
rtc.ws.connect(server);
