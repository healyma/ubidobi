'use strict';

/**
 * @ngdoc service
 * @name ubiApp.Contact
 * @description
 * # Contact
 * Factory in the ubiApp.
 */
angular.module('ubiApp')
  .factory('Contact', function (Auth,$firebaseArray) {
      return $firebaseArray(firebase.database().ref().child('user').child(Auth.userid).child("contacts"));
  });
