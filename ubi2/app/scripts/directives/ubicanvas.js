'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiCanvas
 * @description
 * # ubiCanvas
 */
angular.module('ubiApp')
  .directive('ubiCanvas', function () {
    return {
      templateUrl: 'views/ubiCanvas.html',
      restrict: 'E',
      controller: 'UbiCanvasCtrl',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
