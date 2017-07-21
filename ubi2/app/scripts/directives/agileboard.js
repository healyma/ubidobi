'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:agileBoard
 * @description
 * # agileBoard
 */
angular.module('ubiApp')
  .directive('agileBoard', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the agileBoard directive');
      }
    };
  });
