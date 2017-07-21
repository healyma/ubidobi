'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:userBlock
 * @description
 * # userBlock
 */
angular.module('ubiApp')
  .directive('userBlock', function () {
    return {
        scope:{
            user:'=',
            editable:'='
                  },
      templateUrl:'views/userblock.html',
      controller: 'UserblockCtrl',
      restrict: 'E',
      link: function(scope, el, attrs) {
    scope.$watch('user', function(newVal) {
        if(newVal.userId) { scope.updateUser();}
    }, true);
  }
      
    };
  });
