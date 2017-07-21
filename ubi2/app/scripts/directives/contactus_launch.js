'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:contactUsLaunch
 * @description
 * # contactUsLaunch
 */
angular.module('ubiApp')
  .directive('contactUsLaunch', function () {
    return {
      templateUrl: 'views/contactus_launch.html',
      restrict: 'E',
      controller:'ContactusLaunchCtrl',
      link: function postLink(scope, element, attrs) {
       
      }
    };
  });
