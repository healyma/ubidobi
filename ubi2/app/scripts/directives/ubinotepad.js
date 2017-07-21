'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiNotepad
 * @description
 * # ubiNotepad
 */
angular.module('ubiApp')
  .directive('ubiNotepad', function () {
    return {
      templateUrl: 'views/ubinotepad.html',
      controller:'UbinotepadCtrl',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
