'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:milestoneWidget
 * @description
 * # milestoneWidget
 */
angular.module('ubiApp')
  .directive('milestoneWidget', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the milestoneWidget directive');
      }
    };
  });
