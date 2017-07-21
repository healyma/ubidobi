'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiSearchUsers
 * @description
 * # ubiSearchUsers
 */
angular.module('ubiApp')
  .directive('ubiSearchUsers', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ubiSearchUsers directive');
        console.log(attrs);
      }
    };
  });
