
'use strict';

/**
 * @ngdoc overview
 * @name ubiApp
 * @description
 * # ubiApp
 *
 * Main module of the application.
 */
angular.module('ubiApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ui.bootstrap',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'color.picker',
    'gantt',
    'gantt.sortable',
    'gantt.movable',
    'gantt.drawtask',
    'gantt.tooltips',
    'gantt.bounds',
    'gantt.progress',
    'gantt.table',
    'gantt.tree',
    'gantt.groups',
    'gantt.dependencies',
    'gantt.overlap',
    'gantt.resizeSensor',
    'textAngular',
    'ui.tree',
    'ngDragDrop',
    'ngAvatar',
    'cgNotify',
    'xeditable',
    'ngAlerts',
    'ui-notification',
    'ui.calendar',
    'wu.masonry',
  ]);
  


angular.module('ubiApp').constant('serverLoc',{
    'serverUrl': 'http://localhost:3000'
})
angular.module('ubiApp').run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
       var config = {
        apiKey: "---------AIzaSyCvzJ20yLMzWUAMoacyw2OCwOsagriHv-w",
    authDomain: "-----luminous-fire-2561.firebaseapp.com",
    databaseURL: "https://luminous-fire-2561.firebaseio.com",
    storageBucket: "---------luminous-fire-2561.appspot.com",
    messagingSenderId: "--------32574835639"

      };
     firebase.initializeApp(config);
})





