'use strict';

/**
 * @ngdoc service
 * @name ubiApp.Account
 * @description
 * # Account
 * Factory in the ubiApp.
 */
angular.module('ubiApp')
  .factory('Account', function ($http,Auth,serverLoc) {
      var auth=[];
      auth.profile=function(){
          return $http.get(serverLoc.serverUrl + '/auth/user',{headers:{'X-Auth':Auth.token}}).then(function (val) {
              console.log(val);
      return val
      });
  }
      return auth;
  });
