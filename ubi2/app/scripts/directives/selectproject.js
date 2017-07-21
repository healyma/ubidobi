'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:selectProject
 * @description
 * # selectProject
 */
angular.module('ubiApp')
  .directive('selectProject', function () {
    return {
      templateUrl: 'views/selectproject.html',
      restrict: 'E',
      controller:'SelectprojectCtrl',
      scope:{
          selectedProject:'='
      }
    };
  });
