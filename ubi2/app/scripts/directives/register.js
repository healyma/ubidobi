'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:register
 * @description
 * # register
 */
angular.module('ubiApp')
  .directive('ubiRegister', function () {
    return {
      templateUrl: 'views/register.html',
      controller: 'RegisterCtrl',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
