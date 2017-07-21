'use strict';

/**
 * @ngdoc service
 * @name ubiApp.userNotes
 * @description
 * # userNotes
 * Service in the ubiApp.
 */
angular.module('ubiApp')
  .factory('UserNotes', function (Auth,$firebaseArray,$firebaseObject) {
  	var _myNotes = function(){
    return $firebaseArray(firebase.database().ref().child("userNotes").child(Auth.$getAuth().uid));
  	}
  	var _noteDetails=function(noteId){
  	
    return $firebaseObject(firebase.database().ref().child("notes").child(noteId));
  		
  	}
  	 return {
		myNotes: _myNotes,
		noteDetails: _noteDetails  	 
  	 }
  });
