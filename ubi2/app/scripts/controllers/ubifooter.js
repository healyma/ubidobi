'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:UbifooterctrlCtrl
 * @description
 * # UbifooterctrlCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('ubiFooterCtrl',function ($scope,$uibModal,Auth,$rootScope) {
          Auth.$getAuth().then(function(data,err){
    $rootScope.userId=data.data._id;
      });
  	$scope.modal=function(){
	$scope.dialogTitle="this is the title for the modal box";
		$uibModal.open({
  templateUrl: 'myModalContent.html',
  size: 'lg',
  controller:'Dialog1Ctrl',
  scope:$scope,
  backdrop:'static',
  resolve: {
    items: function () {
      return $scope.items;
    }
  }
});  	
  	}
    
    
  });
