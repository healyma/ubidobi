'use strict';

/**
 * @ngdoc service
 * @name ubiApp.Menu
 * @description
 * # Menu
 * Factory in the ubiApp.
 */
angular.module('ubiApp')
  .factory('Menu', function (Auth) {
    var authMenu=
    [{
      link:'dashboard',
      name:'DashBoard'
    },
    {
      link:'account',
      name: 'Profile'
    },
    {
      link:'contacts',
      name:'Contacts'
    },
    {
      link:'messages',
      name:'Messages'
    },
    {
      link:'projects',
      name:'Projects'
    },
    {
      link:'myTasks',
      name:'My Tasks'
    },
    {
      link:'calendar',
      name:'Calendar'
    },
    {
      link:'teamscape',
      name:'Team tools'
    },
    {
      link:'logout',
      name:'Log out'
    }
    ];

    var unauthMenu= [
      {
        link:'#features',
        name:'Features'
      },
      {
        link:'#benefits',
        name:'benefits'
      },
      {
        link:'#about',
        name:'About'
      },
      {
        link:'login',
        name:'Sign In'
      },
      {
        link:'signup',
        name:'Sign Up'
      },
      ];
      return function(){
          if (Auth.getToken()){
              console.log("got a token");
            return authMenu;
          }else{
              console.log("no token");
            return unauthMenu;
          }


      }
  });
