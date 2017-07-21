'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiGantt
 * @description
 * # ubiGantt
 */
angular.module('ubiApp')
  .directive('ubiGantt', function () {
    return {
      templateUrl: 'views/ubigantt.html',
      restrict: 'E',
      controller:'UbiganttCtrl',
      scope:{
          project:'='
          
      }
    };
  });
