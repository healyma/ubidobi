'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:contactUs
 * @description
 * # contactUs
 */
angular.module('ubiApp')
  .directive('contactUs', function () {
    return {
      templateUrl: 'views/contactus.html',
      restrict: 'E',
      controller:'ContactusCtrl'
     
    };
  });
