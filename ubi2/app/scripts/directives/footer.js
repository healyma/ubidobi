'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:footer
 * @description
 * # footer
 */
angular.module('ubiApp')
  .directive('ubiFooter', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
