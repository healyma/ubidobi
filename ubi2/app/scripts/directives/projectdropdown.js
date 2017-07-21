'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:projectDropDown
 * @description
 * # projectDropDown
 */
angular.module('ubiApp')
  .directive('projectDropDown', function () {
    return {
      templateUrl: 'views/projectDropDown.html',
      controller: 'ProjectdropdownCtrl',
      restrict: 'E',
      scope:{
        project:'='
      },
      link: function postLink(scope, element, attrs) {
          
      }
    };
  });
