'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:displayDateTime
 * @description
 * # displayDateTime
 */
angular.module('ubiApp')
  .directive('displayDateTime', function () {
    return {
        scope:{
            dt:'=',
            editable:'='
        },
      templateUrl: 'views/displaydatetime.html',
      controller: 'DisplaydatetimeCtrl',
      restrict: 'E',
     
    };
  });
