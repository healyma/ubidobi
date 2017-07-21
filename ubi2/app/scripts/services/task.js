'use strict';

/**
 * @ngdoc service
 * @name ubiApp.Task
 * @description
 * # Task
 * Factory in the ubiApp.
 */
angular.module('ubiApp')
  .factory('Task', function ($http,Auth,serverLoc) {

    return {
      myProjectTaskLists: function () {
        return null;
      },
           ProjectLists: function (project) {
       return $http.get(serverLoc.serverUrl + '/auth/todo/byproject/' + project,{});
           },
      loadList:function(list){
        return $http.get(serverLoc.serverUrl + '/auth/todo/' + list,{});
    }
    };
  });
