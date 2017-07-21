'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:SelectprojectCtrl
 * @description
 * # SelectprojectCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('SelectprojectCtrl', function ($scope,Project) {
    $scope.projects=Project.myProjects();
    $scope.projectDetails=Project.projectDetails;
  });
