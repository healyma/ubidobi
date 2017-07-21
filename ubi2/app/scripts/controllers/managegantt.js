'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:ManageganttCtrl
 * @description
 * # ManageganttCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('ManageganttCtrl', function ($scope) {
    $scope.newTask = function(){
        // need to define a complete structure for the task and map it across gantt, to-do and board tasks/items
        if(!$scope.selected.row.tasks){
            $scope.selected.row.tasks=[];
        }
        $scope.selected.row.tasks.push({name:"new task",from:'2016-10-10',to:'2016-10-11'});
        console.log($scope.selected.row);
        $scope.data.$add($scope.selected.row).then(function(data){
            console.log("added");
        },function(error){
            console.log(error);
        });
    }
  });
