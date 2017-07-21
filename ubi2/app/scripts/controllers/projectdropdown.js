'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:ProjectdropdownCtrl
 * @description
 * # ProjectdropdownCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('ProjectdropdownCtrl', function ($scope,Project) {
      $scope.myProjects=[];
      Project.myProjects().then(function(myProjects){
          $scope.myProjects=myProjects.data;
      })
   $scope.projectDetails=function(projId){
       Project.projectDetails(projId).then(function(data){
           console.log(data.data);
           return data.data;
       })
   };
   
   $scope.selectedProject=[];
   $scope.selectProject=function(proj){
       $scope.project=proj;
       $scope.projectCollapsed=true;
   }
  });
