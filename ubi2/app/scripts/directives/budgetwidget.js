'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:budgetWidget
 * @description
 * # budgetWidget
 */
angular.module('ubiApp')
  .directive('budgetWidget', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the budgetWidget directive');
      }
    };
  });
