'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:projectdetails
 * @description
 * # projectdetails
 */
angular.module('ubiApp')
  .directive('projectdetails', function () {
    return {
      templateUrl:'views/projectdetails.html',
      controller:'ProjectdetailsCtrl',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
