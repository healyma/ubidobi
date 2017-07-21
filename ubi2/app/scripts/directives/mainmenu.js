'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:mainMenu
 * @description
 * # mainMenu
 */
angular.module('ubiApp')
  .directive('mainMenu', function () {
    return {
      templateUrl:'views/mainMenu.html',
      controller:'MenuCtrl',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
