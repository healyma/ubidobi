'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiteam
 * @description
 * # ubiteam
 */
angular.module('ubiApp')
  .directive('ubiTeam', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ubiteam directive');
      }
    };
  });
