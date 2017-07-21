'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiTaskDetails
 * @description
 * # ubiTaskDetails
 */
angular.module('ubiApp')
  .directive('ubiTaskDetails', function () {
    return {
      templateUrl: 'ubitaskdetails.html',
      controller:'ubiTaskDetails',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ubiTaskDetails directive');
        console.log(attrs);
      }
    };
  });
