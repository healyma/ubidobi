'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:NotepadCtrl
 * @description
 * # NotepadCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('NotepadCtrl', function ($scope,Scratchpad,UserNotes) {
  	$scope.myPads=UserNotes.myNotes();
	$scope.thisPad= Scratchpad;
	$scope.thisPad.text=$scope.thisPad.$value;
	$scope.savePad=function(){
		$scope.thisPad.$save();
		console.log($scope.thisPad);
	}
	$scope.openPad=function(noteId){
		if(noteId){		
			var pad=$scope.noteDetails(noteId);
			$scope.thisPad=pad;
		}else {
			//default - open scratchpad if no id supplied
			$scope.thisPad= Scratchpad;
			
		}

	}

	$scope.noteDetails=function(noteId){
		return UserNotes.noteDetails(noteId);
	}
  });
