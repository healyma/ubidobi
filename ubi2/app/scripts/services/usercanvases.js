'use strict';

/**
 * @ngdoc service
 * @name ubiApp.userCanvases
 * @description
 * # userCanvases
 * Factory in the ubiApp.
 */
angular.module('ubiApp')
  .factory('UserCanvases', function (Auth,$firebaseArray) {
  return $firebaseArray(firebase.database().ref().child('userCanvas').child(Auth.$getAuth().uid));
  });
