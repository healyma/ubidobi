'use strict';

/**
 * @ngdoc service
 * @name ubiApp.Auth
 * @description
 * # Auth
 * Factory in the ubiApp.
 */
angular.module('ubiApp')
        .factory('Auth', ['$http', 'serverLoc',
            function ($http, serverLoc) {
                var svc = this;
                svc.$getAuth=function(){
                    svc.getToken();
                    return this.getUser();
                    
                }
                svc.getToken = function(){
                    //check for token expiry etc.
                    if(window.localStorage.token){   
                        console.log("token exists")
                        $http.defaults.headers.common['X-Auth'] = window.localStorage.token;
                        return svc.getUser().then(function(ur,err){
                            if(!ur.data.token || err){
                                console.log("no valid token");
                                svc.logout(); 
                                return null;
                            }
                            console.log(ur);
                            return window.localStorage.token;
                        })
                    }
                }
                svc.getUserId = function () {
                    if(!window.localStorage.user) {return null}
                    return window.localStorage.user._id;
                }
                svc.getUser = function () {
                    return $http.get(serverLoc.serverUrl + '/auth/user/', {
                    })
                }
                svc.login = function (username, password) {

                    return $http.post(serverLoc.serverUrl + '/open/user/auth', {
                        username: username, password: password
                    }).then(function (val) {
                        $http.defaults.headers.common['X-Auth'] = val.data.token;
                        window.localStorage.token = val.data.token;
                        window.localStorage.user=val.data.user;
                        return val.data;
                    })
                }
                svc.logout = function () {
                    
                    delete window.localStorage.token;
                    delete window.localStorage.user;
                    delete window.localStorage.currentUser;
                }
                svc.$onAuthStateChanged = function () {
                    //need to refactor any code calling this
                    this.$getAuth();
                }
                return svc;
            }
        ])


