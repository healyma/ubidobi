'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:CSelectcontactCtrl
 * @description
 * # CSelectcontactCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('CSelectcontactCtrl', function ($scope,$uibModal,Contact,User) {
      if(! $scope.minContacts) $scope.minContacts=1;
      if(!$scope.maxContacts) $scope.maxContacts=1;
      if(!$scope.selectedContact){
          $scope.contact={};
      }else{  
        $scope.contact=User.getUser($scope.selectedContact);
      }
      if(!$scope.readonly)$scope.readonly=true;
      if(!$scope.searchUsers)$scope.searchUsers=false;
      if(!$scope.avatar)$scope.avatar=false;
      $scope.selectContact=function(){
          if(!$scope.readonly){
          var popup=$uibModal.open({
             templateUrl: 'views/v_selectcontactdlg.html'});
          }
      }
  });
