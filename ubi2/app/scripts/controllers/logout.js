'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('LogoutCtrl', function (Auth,$scope,$rootScope) {
    Auth.logout();
    $scope.$emit('logout',null);
    $rootScope.userId=null;
    
  });
