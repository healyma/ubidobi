'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiTasklist
 * @description
 * # ubiTasklist
 */
angular.module('ubiApp')
  .directive('ubiTasklist', function () {
    return {
      templateUrl: 'views/ubitasklist.html',
      controller:'ubiTaskList',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ubiTasklist directive');
        console.log(attrs);
      }
    };
  });
