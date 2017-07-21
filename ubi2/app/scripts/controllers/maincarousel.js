'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:MaincarouselCtrl
 * @description
 * # MaincarouselCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('MainCarouselCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [
        {
            image: 'images/0061.jpg',
            text: '',
            id:0
        },
                {
            image: 'images/ttw.jpg',
            text: '',
            id:1
        },
        {
            image:'images/meeting.jpg',
            text: ' <h2 class="center brown-text"><i class="material-icons">share</i></h2> <h5 class="center">Seamless Collaboration</h5> <p> Assign tasks to team members and receive automatic notifications as tasks are completed, reassigned or updated with budgets, decomposed into sub-tasks or changed in any way. </p> ',
            id:2
        },
        {
            image:'images/antique-typewriter.jpg',
            text: 'Get the right tools for the job.',
            id:3
        },
        
    ];
    var currIndex = 0;

  });
