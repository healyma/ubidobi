'use strict';

/**
 * @ngdoc service
 * @name ubiApp.projectgantt
 * @description
 * # projectgantt
 * Factory in the ubiApp.
 */
angular.module('ubiApp')
  .factory('Projectgantt', function ($http,serverLoc) {
    return function (projectId){
        
        //will change this to return the relevant chart(s) for projectId
        console.log('starting');
        return $http.get(serverLoc.serverUrl + '/auth/gantt/58b5a4ece114ab0de8109510', {
                       
        });
    }
  });
