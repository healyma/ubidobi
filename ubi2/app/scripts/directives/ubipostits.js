'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiPostIts
 * @description
 * # ubiPostIts
 */
angular.module('ubiApp')
  .directive('ubiPostIts', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ubiPostIts directive');
        console.log(attrs);
      }
    };
  });
