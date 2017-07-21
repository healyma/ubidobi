'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:mainCarousel
 * @description
 * # mainCarousel
 */
angular.module('ubiApp')
  .directive('mainCarousel', function () {
    return {
      templateUrl:'views/mainCarousel.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
