'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiNewMessage
 * @description
 * # ubiNewMessage
 */
angular.module('ubiApp')
  .directive('ubiNewMessage', function () {
    return {
      templateUrl: 'views/newMessage.html',
      controller:'ubiNewMessage',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ubiNewMessage directive');
        console.log(attrs);
      }
    };
  });
