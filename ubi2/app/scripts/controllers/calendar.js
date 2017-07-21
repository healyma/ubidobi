'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('CalendarCtrl', function ($scope,$uibModal,Calendar) {
      $scope.selectCalendar=function(){
          Calendar.cal($scope.calendar).then(function(data){
              
      $scope.eventSources.length=0;
              console.log($scope.calendar);
              console.log(data);
    $scope.eventSources.push({events:data.data.events});
    console.log($scope.eventSources);
    angular.element('#calendar').fullCalendar('refetchEvents');
    $('#calendar').fullCalendar('refetchEvents')
})
      }
              $scope.myCalendars=[];
      Calendar.myCals().then(function(data){
          console.log(data);
          $scope.myCalendars=data.data;
      })
      
      $scope.calendar={_id:'00'};
  /* config object */
      var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    $scope.eventSources=[];

$scope.uiConfig = {
      calendar:{
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick:function(date, jsEvent, view){
            console.log(date._d);
            $uibModal.open({
            animation:  true,
            templateUrl: 'newEvent.html',
            controller: 'NeweventCtrl',
            size: 'lg',
            scope: $scope
          });
        },
        eventClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };
  });
