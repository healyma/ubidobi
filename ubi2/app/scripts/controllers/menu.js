'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('MenuCtrl', function ($scope) {
    $scope.activeLink='';
    $scope.nav = {collapsed:true};
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
    $scope.setActiveLink=function(link){
        $scope.nav.collapsed=true;
      $scope.activeLink=link;
    }


  });
