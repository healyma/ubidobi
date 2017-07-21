'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('ProjectsCtrl', function (Project,$scope,Auth,User) {
    $scope.newProject={};
    $scope.User=User;
    $scope.ProjectDetails=Project.projectDetails;
    Project.myProjects().then(function (res) {
                        console.log(res);
                        $scope.myProjects= res.data;
                    });
    $scope.resetProjectForm=function(){
        $scope.newProject={};
    }
    $scope.addProject=function(){
        
        Project.newProject({
                title:$scope.newProject.title,
                currentStatus:'new'
            },[{userId:Auth.userid,role:'owner'}]);
            $scope.newProject={};
            //reload the projects
            Project.myProjects().then(function (res) {
                        console.log(res);
                        $scope.myProjects= res.data;
                    });
        
    }
  });
