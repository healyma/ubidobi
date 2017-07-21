'use strict';

/**
 * @ngdoc service
 * @name ubiApp.canvasContent
 * @description
 * # canvasContent
 * Factory in the ubiApp.
 */
angular.module('ubiApp')
  .factory('CanvasContent', function ($firebaseArray) {
    return function(canvas){
        return $firebaseArray(firebase.database().ref().child('canvas').child(canvas));
    }
  });
