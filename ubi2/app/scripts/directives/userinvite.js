'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:userInvite
 * @description
 * # userInvite
 */
angular.module('ubiApp')
  .directive('ubiUserInvite', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the userInvite directive');
        console.log(attrs);
      }
    };
  });
