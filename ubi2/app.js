'use strict';
var firebase = require('firebase-admin');
//var escape = require('escape-html');
const express = require('express');
const app = express();
var helper = require('sendgrid').mail;
var sg = require('sendgrid')('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');




var config = {
	apiKey: "AIzaSyBjkN998dfVjswrCTw4XTmPnoyVfMAsTpg",
	authDomain: "ubi2-7cfb4.firebaseapp.com",
	databaseURL: "https://ubi2-7cfb4.firebaseio.com",
	storageBucket: "ubi2-7cfb4.appspot.com",
	messagingSenderId: "489689864152"
};
firebase.initializeApp({
  credential: firebase.credential.cert("serviceAccountKey.json"),
  databaseURL: "https://ubi2-7cfb4.firebaseio.com"
});
app.get('/mailId/:mailId/mailKey/:mailKey', function(req,res){
	console.log('looking for mail ' + req.params.mailId + ' with key ' + req.params.mailKey);
	sendMail(req.params.mailId,req.params.mailKey,res);
});

var sendMail =function(mailId,mailKey,res){
	//need to add logic to prevent multiple sends of the same mail (use a FB array of sends and the mailkey is the send attempt id
	var mailRef=firebase.database().ref('/mailQueue/' + mailId);
	mailRef.once('value').then (function(snapshot){
		var okToSend = false;
		if(snapshot.val().attempts[mailKey]=='pending'){
			okToSend=true;
		}
		if(okToSend){
			var i_from_email = new helper.Email(snapshot.val().fromAddress,snapshot.val().fromName);
			var i_to_email = new helper.Email(snapshot.val().toAddress);
			var i_subject = snapshot.val().subject;
			var i_content = new helper.Content(snapshot.val().contentType, snapshot.val().content);
			var i_mail = new helper.Mail(i_from_email, i_subject, i_to_email, i_content);
			
			console.log(i_mail.toJSON);
			var invite = sg.emptyRequest({
			  method: 'POST',
			  path: '/v3/mail/send',
			  body: i_mail.toJSON(),
			});
			console.log("invite sent");
			res.status(200).send('Sending message!');
			sg.API(invite, function(error, response) {
				console.log("mail sent");
				    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
				var update ={};
				update['/mailQueue/' + mailId + '/attempts/' + mailKey]='sent';
				firebase.database().ref().update(update);
				console.log("firebase updated");
			});
			
		}else{
			res.status(200).send("can't send !. attempt status is " +snapshot.val().attempts[mailKey] );
		}
	});
	}

app.get('/', (req, res) => {
  res.status(200).send('..');
});
app.get('/testMail', (req, res) => {
  res.status(200).send('Sent!');
  var from_email = new helper.Email('do-not-reply@ubidobi.com');
	var to_email = new helper.Email('mark.healy@ubidobi.com');
	var subject = 'TEst mail from app engine!';
	var content = new helper.Content('text/plain', 'Hello, Email!');
	var mail = new helper.Mail(from_email, subject, to_email, content);
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON(),
	});
  sg.API(request, function(error, response) {
  console.log("test mail sent");
});
});
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]


