'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubitasks
 * @description
 * # ubitasks
 */
angular.module('ubiApp')
  .directive('ubiTasks', function () {
    return {
      templateUrl: 'views/mytasks.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
    
    }
 };
  });
