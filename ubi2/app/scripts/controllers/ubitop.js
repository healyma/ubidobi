'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:UbitopCtrl
 * @description
 * # UbitopCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('UbitopCtrl', function ($scope,Menu,Notification) {
      
        $scope.menuItems=Menu();
        $scope.currentUser=window.localStorage.currentUser;
    $scope.ws= Notification;
    $scope.$on('login',function(_,user){
        $scope.menuItems=Menu();
        $scope.userId=user.user._id;
    })
    $scope.$on('logout',function() {
        $scope.menuItems=Menu();
        delete $scope.userId;
    });
  });
