'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:TasklistCtrl
 * @description
 * # TasklistCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('TasklistCtrl', function ($scope) {
    $scope.listSelected=true;
    $scope.newTask={};
      $scope.list=[];
      $scope.thisOne='1234';
// this is really bad  and I'll need to find a better way of doing this
//TODO: implement saving of trees some other way
    function updateTree(){
            for (var e=0;e<$scope.data.length;e++){
            $scope.data.$save($scope.data[e]).then(function(d){},function(e){console.log(e);});
            }
    }
	
 
	

  	
  $scope.updateTask=function(node){
    updateTree();  
  };
  $scope.notDeleted=function(input){
      return !(input.deleted);
  }
    $scope.rmNode = function (scope) {
 	 	
     scope.$modelValue.deleted=true;
	 updateTree();
        scope.remove();
      };

      $scope.toggle = function (scope) {
        scope.toggle();
        
      };
    $scope.newItem=function(){
        //create a new task and assign it as a child in the correct location
            $scope.data.$add({name:$scope.newTask.txt,deleted:false});
            $scope.clearNew();
    }
    $scope.clearNew=function(){
            $scope.newTask.txt='';
    }
      $scope.complete = function (scope) {
          console.log(scope);          
        scope.completed=!scope.completed;
        updateTree();
      };
      $scope.newList=function(text,project){
          project[project.$id + text]={title:text,status:'current'};
          console.log(project.$id);
          $scope.userProjectTaskLists.$save(project);
      }
      $scope.moveLastToTheBeginning = function () {
        var a = $scope.data.pop();
        $scope.data.splice(0, 0, a);
        updateTree();
      };
      $scope.treeOptions={
          dropped:function(event){
              updateTree();
          }
      }

      $scope.newSubItem = function (scope) {
          console.log(scope);
        var nodeData = scope.$modelValue;
        if (!nodeData.nodes){
            nodeData.nodes=[];
        }
        if(!nodeData.id) nodeData.id=1;
        nodeData.nodes.unshift({
          id: nodeData.id * 10 + nodeData.nodes.length,
          name: '',
          deleted:false,
          nodes: []
        });
        updateTree();
      };

      $scope.collapseAll = function () {
        $scope.$broadcast('angular-ui-tree:collapse-all');
      };

      $scope.expandAll = function () {
        $scope.$broadcast('angular-ui-tree:expand-all');
      };

   
  });
