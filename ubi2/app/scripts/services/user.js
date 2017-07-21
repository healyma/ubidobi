'use strict';

/**
 * @ngdoc service
 * @name ubiApp.User
 * @description
 * # User
 * Factory in the ubiApp.
 */
angular.module('ubiApp')
  .factory('User', function ($http,Auth,serverLoc) {
    var _getUser=function(userId){
        return Auth.getUser();
    }
    
    var _newUser=function(user){
        console.log(user);
        return $http.post(serverLoc.serverUrl + '/open/user/',{
            username:user.email,
            password:user.password,
            firstName:user.firstName,
            lastName:user.lastName
        })
    }
    var _updateUser=function(user){
        return $http.post(serverLoc.serverUrl + '/auth/user/',{
            username:user.email,
    password:user.password,
    firstName:user.firstName,
    lastName:user.lastName
    })
    }
    return {
      getUser:_getUser,
      newUser:_newUser,
      updateUser:_updateUser
    };
  });
