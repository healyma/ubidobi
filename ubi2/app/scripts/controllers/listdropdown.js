'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:ListdropdownCtrl
 * @description
 * # ListdropdownCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('ListdropdownCtrl', function ($scope,Task) {
      $scope.ldd={isCollapsed:false};
      $scope.newList=
              {
        title:'',
        status:'new'
    };
                
     $scope.loadLists=function(project){
         Task.ProjectLists(project).then(function(list){
             console.log(list);
             $scope.projectLists=list.data;
         })
         
     }
     $scope.addNewList=function(){
         $scope.projectLists.$add($scope.newList).then(function(data){
             $scope.newList.title='';
         },function(error){
             console.log(error);
         });

     }
      $scope.loadList=function(list,listdetails){
          Task.loadList(list).then(function(listDetails){
              console.log(listdetails);
               $scope.ldd.isCollapsed=!$scope.ldd.isCollapsed;
          $scope.listdetails={
              data:listDetails.data.tasks,
              list:listdetails,
              listSelected:true
          }
          })
         
      }
      $scope.$watch('project', function() {
          if($scope.project){
              console.log($scope.project);
              $scope.loadLists($scope.project._id);
          }
      });
  });
