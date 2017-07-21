'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:AlertsCtrl
 * @description
 * # AlertsCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('AlertsCtrl', function ($scope, ngAlertsMngr) {
    $scope.createAlert = function () {
        ngAlertsMngr.add('testing', 'warning');
    };
});
