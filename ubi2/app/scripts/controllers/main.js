'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.bricks=[
    {
        icon:'assignment_turned_in',
        heading:'Projects that manage themselves',
        text:'You\'ve got enough to do. Let UbiDoBi look after project management and governance while you focus on getting the work done. Each task is a milestone, every milestone is a project, a project a portfolio allowing for unlimited levels of granularity and detail.'
    },
        {
        icon:'cloud_done',
        heading:'Access your data from anywhere',
        text:'Available anywhere, at all times. We\'ve built Ubi on top of Google Cloud, providing unparalleled levels of availability and reliability.'
    },
        {
        icon:'share',
        heading:'Seamless Collaboration',
        text:'Assign tasks to team members and receive automatic notifications as tasks are completed, reassigned or updated with budgets, decomposed into sub-tasks or changed in any way.'
    },
        {
        icon:'sync',
        heading:'Real-time updates',
        text:'Know what\'s happening across all your projects with our automated updates and push notifications. Know exactly what\'s happening and when.'
    },
        {
        icon:'fitness_center',
        heading:'Focus on the heavy lifting',
        text:'You work while we project manage. Regardless of scale, complexity or industry, UbiDoBi lets you focus on what you do best.'
    },
        {
        icon:'poll',
        heading:'Live analytics',
        text:' From top-level dashboard, stakeholders can drill-down into the minutiae of each project, tracking budgets, activity and risks in real time. Modular access controls ensure stakeholders can see all the important details, while sensitive or restricted data is protected'
    },
        {
        icon:'notifications_active',
        heading:'Identify potential issues',
        text:'Instantly identify delays, overruns or stalled tasks within any project. Track activity by project, team, category etc.and gain real-time insights into not just your projects, but every aspect of your business and partners.'
    },
        {
        icon:'call_made',
        heading:'Maximise results',
        text:'Through improved visibility, auditing and review of project and team performance you can identify and resolve issues, improve lessons-learned and post-mortem sessions, better evaluate partners and suppliers and ensure peak-performance throughout the project life-cycle.'
    },
        {
        icon:'settings',
        heading:'Tailor to your needs',
        text:' While we have worked hard to develop a platform to make project delivery easier for everyone, we understand the one size rarely fits all. With that in mind, we\'ve made UbiDoBi incredibly configurable in order to provide you with a tailored and comfortable solution.'
    },
        {
        icon:'',
        heading:'',
        text:''
    },
    
    ]
  });
angular.module('ubiApp')
  .controller('masonry', function ($scope) {});