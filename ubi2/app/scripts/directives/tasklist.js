'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:taskList
 * @description
 * # taskList
 */
angular.module('ubiApp')
  .directive('taskList', function () {
    return {
      templateUrl: 'views/tasklist.html',
      controller: 'TasklistCtrl',
      restrict: 'E',
      scope:{
          data:'=',
          title:'='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
