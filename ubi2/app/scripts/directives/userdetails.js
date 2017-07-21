'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:userDetails
 * @description
 * # userDetails
 */
angular.module('ubiApp')
  .directive('ubiUserDetails', function () {
    return {
      templateUrl: 'views/ubiuserdetails.html',
      controller:'ubiUserDetails',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the userDetails directive');
        console.log(attrs);
      }
    };
  });
