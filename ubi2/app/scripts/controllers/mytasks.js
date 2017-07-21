'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:MytasksCtrl
 * @description
 * # MytasksCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('MytasksCtrl', function ($scope,$uibModal,Project) {
      $scope.listSelected=false;
      $scope.userProjects=[];
      $scope.listDetails={listdetails:'nothing'};
      Project.myProjects().then(function(myProj){
          $scope.userProjects=myProj.data;
      })
      
    //  $scope.userProjectTaskLists=Task.myProjectTaskLists();
      $scope.ProjectDetails=Projects.projectDetails;
      $scope.list=[];
      $scope.thisOne='1234';
    $scope.createAlert = function () {
        toastr.error('need to log toastr messages to the DB and also connect them to websocket implementation\n look at codeseven.github.io/toastr/demo.html');
    }
// this is really bad  and I'll need to find a better way of doing this
//TODO: implement saving of trees some other way
	function updateTree(){
		for (var e=0;e<$scope.data.length;e++){
		$scope.data.$save($scope.data[e]).then(function(d){},function(e){console.log(e);});
		}
	}
	
    $scope.cancel=function(){
        $uibModalInstance.close();
    }
	$scope.clickTest=function(){
            console.log('testing')
		   toastr.info("hello")
    var modalInstance = $uibModal.open({
      animation:  true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'confirmDeleteDialog.html',
      controller: 'DeletetaskCtrl',
      size: 'lg',
      scope: $scope
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };	
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
    $scope.newItem=function(txt){
            $scope.data.$add({name:txt,deleted:false});
            $scope.clearNew();
    }
    $scope.clearNew=function(){
            $scope.txtNew='';
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
