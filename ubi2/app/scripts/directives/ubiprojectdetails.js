'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiProjectDetails
 * @description
 * # ubiProjectDetails
 */
angular.module('ubiApp')
  .directive('ubiProjectDetails', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ubiProjectDetails directive');
        console.log(attrs);
      }
    };
  });
