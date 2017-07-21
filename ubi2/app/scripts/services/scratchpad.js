'use strict';

/**
 * @ngdoc service
 * @name ubiApp.scratchpad
 * @description
 * # scratchpad
 * Service in the ubiApp.
 */
angular.module('ubiApp')
  .factory('Scratchpad', function (Auth,$firebaseObject) {
  return $firebaseObject(firebase.database().ref().child('userScratchpad').child(Auth.$getAuth().uid));
  });
