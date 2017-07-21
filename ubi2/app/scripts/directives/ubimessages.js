'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiMessages
 * @description
 * # ubiMessages
 */
angular.module('ubiApp')
  .directive('ubiMessages', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ubiMessages directive');
      }
    };
  });
