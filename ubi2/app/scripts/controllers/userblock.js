'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:UserblockCtrl
 * @description
 * # UserblockCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('UserblockCtrl', function ($scope,User) {
    $scope.updateUser =function(){
        $scope.userDetails=User.getUser($scope.user.userId);
    }

  });
