'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('ContactsCtrl', function (Contact,$scope) {
    Contact.$loaded().then(function(){
    $scope.contacts=Contact;
    })
    $scope.newContact={};
    $scope.addContact=function(){
      Contact.$add($scope.newContact);
    }
  });
