'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiForum
 * @description
 * # ubiForum
 */
angular.module('ubiApp')
  .directive('ubiForum', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ubiForum directive');
      }
    };
  });
