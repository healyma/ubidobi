'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('RegisterCtrl', function ($scope,User,Auth,$location) {
    $scope.register=false;
    $scope.newUser={};
    $scope.clkRegister=function(){
        $scope.register=true;
    }
    $scope.cancelRegister=function(){
        $scope.register=false;
        $scope.newUser={};
    }
    $scope.registerUser=function(){
        
       User.newUser($scope.newUser).then(function(res,err){
        if(err){console.log(err); return false;}
        $scope.register=false;
            $scope.newUser={};
            Auth.login($scope.newUser.email,$scope.newUser.password).then(function(res){
            console.log("created");
            return res;
            $scope.$emit('login',res);
            $location.path('/account');
            
        })
            
        })
            //log the user in automatically, using the username and password provided
            //but don't do it yet until we can be sure that the registration is working
      
            //display error message etc.
       
    }
  });
