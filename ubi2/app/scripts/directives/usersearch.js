'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:userSearch
 * @description
 * # userSearch
 */
angular.module('ubiApp')
  .directive('ubiUserSearch', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the userSearch directive');
        console.log(attrs);
      }
    };
  });
