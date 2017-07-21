'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:ContactlistCtrl
 * @description
 * # ContactlistCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('ContactlistCtrl', function (Contact,$scope) {
    Contact.$loaded().then(function(){
    $scope.contacts=Contact;
    })
  });
