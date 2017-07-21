'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:AgileboardCtrl
 * @description
 * # AgileboardCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('AgileboardCtrl', function ($scope) {
      $scope.treeOptions={
          dropped:function(event){
              console.log("something was dropped");
          },
          dragged: function(event){
              console.log("something was dragged");
          }
      }
      $scope.taskList = function(laneId){
          var thisList=[];
          for(var i=0;i<$scope.tasks.length;i++){
              if ($scope.tasks[i].lane==laneId){
                  thisList.push($scope.tasks[i]);
              }
              
          }
              return thisList;
      };
      $scope.startDragging=function(task){
          console.log("dragging");
          console.log(task);
      };
      $scope.stopDragging=function(task){
          console.log("dropping");
          console.log(task);
      };
   $scope.lanes=[
       {
           title:'Not Started',
           name:'todo',
           order:0
       },
       {
           title:'In Progress',
           name:'inprogress',
           order:1
       },
       {
           title:'Testing',
           name:'test',
           order:2
       },
       {
           title:'Quality',
           name:'qa',
           order:3
       },
       {
           title:'Done',
           name:'done',
           order:4
       }
           
   ];

    $scope.tasks=[
        [{
            id:1,
            name:'first task',
            lane:0
        },
        {
            id:2,
            name:'second task',
            lane:0
        },
        {
            id:3,
            name:'third task',
            lane:0
        },{
            id:4,
            name:'next task',
            lane:0
        }
    ],
        [{
            id:5,
            name:'the task',
            lane:1
        }],
        [{
            id:6,
            name:'a task',
            lane:2
        },
        {
            id:7,
            name:'this task',
            lane:2
        },
        {
            id:8,
            name:'another task',
            lane:2
        },
        {
            id:9,
            name:'some task',
            lane:2
        },
        {
            id:10,
            name:'last task',
            lane:2
        }],
        [],
        []
    ];
      
  });
