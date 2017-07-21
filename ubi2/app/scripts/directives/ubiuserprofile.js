'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiUserProfile
 * @description
 * # ubiUserProfile
 */
angular.module('ubiApp')
  .directive('ubiUserProfile', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ubiUserProfile directive');
        console.log(attrs);
      }
    };
  });
