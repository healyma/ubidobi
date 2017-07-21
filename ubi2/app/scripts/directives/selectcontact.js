'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:selectContact
 * @description
 * # selectContact
 */
angular.module('ubiApp')
  .directive('selectContact', function () {
    return {
      templateUrl: 'views/v_selectcontact.html',
      controller: 'CSelectcontactCtrl',
      scope:{
          minContacts:'=',
          maxContacts:'=',
          selectedContacts:'=',
          selectedContact:'=',
          readonly:'=',
          searchUsers:'=',
          avatar:'='
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
