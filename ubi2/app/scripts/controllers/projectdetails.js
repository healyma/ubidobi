'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:ProjectdetailsCtrl
 * @description
 * # ProjectdetailsCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('ProjectdetailsCtrl', function ($routeParams,Project,$scope) {
    $scope.project={};
    Project.projectDetails($routeParams.projectid).then(function(res){
        $scope.project=res.data;
        
    })
  });
