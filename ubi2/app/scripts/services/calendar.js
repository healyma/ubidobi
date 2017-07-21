'use strict';

/**
 * @ngdoc service
 * @name ubiApp.Account
 * @description
 * # Account
 * Factory in the ubiApp.
 */
angular.module('ubiApp').factory('Calendar', function ($http,serverLoc) {
    var svc=this;
    svc.cal=function(calendar){
        return $http.get(serverLoc.serverUrl + '/auth/calendar/'+calendar);
    }
    svc.calRange=function(calendar,start,end){
        return $http.get(serverLoc.serverUrl + '/auth/calendar/'+calendar + '/' + start + '/' + end);
    }
    svc.myCals=function(){
        return $http.get(serverLoc.serverUrl + '/auth/calendar');
    }
      
  return svc;
  });
