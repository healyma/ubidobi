'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiMessageList
 * @description
 * # ubiMessageList
 */
angular.module('ubiApp')
  .directive('ubiMessageList', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ubiMessageList directive');
        console.log(attrs);
      }
    };
  });
