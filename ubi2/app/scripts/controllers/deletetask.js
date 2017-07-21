'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:DeletetaskCtrl
 * @description
 * # DeletetaskCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('DeletetaskCtrl', function ($scope,$uibModalInstance) {
    $scope.cancel = function(){
        $uibModalInstance.close();
    }
    $scope.delete=function(){
        console.log("this was called from the dialog");
        $uibModalInstance.close();
    }
  });
