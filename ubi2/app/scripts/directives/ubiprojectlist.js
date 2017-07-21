'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiProjectList
 * @description
 * # ubiProjectList
 */
angular.module('ubiApp')
  .directive('ubiProjectList', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ubiProjectList directive');
        console.log(attrs);
      }
    };
  });
