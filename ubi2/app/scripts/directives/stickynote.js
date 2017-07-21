'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:stickyNote
 * @description
 * # stickyNote
 */
angular.module('ubiApp')
  .directive('stickyNote', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the stickyNote directive');
      }
    };
  });
