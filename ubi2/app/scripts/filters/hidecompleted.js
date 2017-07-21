'use strict';

/**
 * @ngdoc filter
 * @name ubiApp.filter:hideCompleted
 * @function
 * @description
 * # hideCompleted
 * Filter in the ubiApp.
 */
angular.module('ubiApp')
  .filter('hideCompleted', function () {
    return function (field) {
        console.log(field);
      
      return !field;
    };
  });
