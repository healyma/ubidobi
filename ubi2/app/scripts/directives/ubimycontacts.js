'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiMyContacts
 * @description
 * # ubiMyContacts
 */
angular.module('ubiApp')
  .directive('ubiMyContacts', function () {
    return {
      templateUrl: '/views/contacts.html',
      controller: 'ContactsCtrl',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        console.log(attrs);
      }
    };
  });
