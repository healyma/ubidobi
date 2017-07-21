'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:myContactList
 * @description
 * # myContactList
 */
angular.module('ubiApp')
  .directive('myContactList', function () {
    return {
      templateUrl: 'views/mycontactlist.html',
      restrict: 'E',
      controller:'ContactlistCtrl',
      $scope:{}
    };
  });
