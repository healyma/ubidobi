'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:listDropDown
 * @description
 * # listDropDown
 */
angular.module('ubiApp')
  .directive('listDropDown', function () {
    return {
      templateUrl: 'views/listDropDown.html',
      controller:'ListdropdownCtrl',
      restrict: 'E',
      scope:{
        project:'=',
        listdetails:'='
      },
      link: function postLink(scope, element, attrs) {
       
      }
    };
  });
