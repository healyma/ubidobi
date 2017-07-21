'use strict';
/**
 * @ngdoc function
 * @name muck2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('ubiApp')
  .controller('AccountCtrl', function ($scope,$timeout,$location,Auth,User) {
 
    $scope.updateProfile=function(profile){
        User.updateUser(profile).then(function(err,res){
            if(err){console.log(err);}
            console.log("that worked");
            console.log(res);
        })
        console.log(profile);
    }
    $scope.messages = [];
    Auth.getUser().then(function(profile){
        $scope.profile = profile.data;
    });
    $scope.user = $scope.profile;
    
    $scope.test=function(){
    }
    $scope.changePassword = function(oldPass, newPass, confirm) {
      $scope.err = null;
      if( !oldPass || !newPass ) {
        error('Please enter all fields');
      }
      else if( newPass !== confirm ) {
        error('Passwords do not match');
      }
      else {
        Auth.$changePassword({email: $scope.profile.email, oldPassword: oldPass, newPassword: newPass})
          .then(function() {
            success('Password changed');
          }, error);
      }
    };

    $scope.changeEmail = function(pass, newEmail) {
      $scope.err = null;
      Auth.$changeEmail({password: pass, newEmail: newEmail, oldEmail: $sope.$scope.profile.email})
        .then(function() {
          $scope.profile.email = newEmail;
          $scope.profile.$save();
          success('Email changed');
        })
        .catch(error);
    };

    function error(err) {
      alert(err, 'danger');
    }

    function success(msg) {
      alert(msg, 'success');
    }

    function alert(msg, type) {
      var obj = {text: msg+'', type: type};
      $scope.messages.unshift(obj);
      $timeout(function() {
        $scope.messages.splice($scope.messages.indexOf(obj), 1);
      }, 10000);
    }

  });
