'use strict';

/**
 * @ngdoc service
 * @name ubiApp.notification
 * @description
 * # notification
 * Factory in the ubiApp.
 */
angular.module('ubiApp')
  .factory('Notification', function ($rootScope) {
    var socket= new WebSocket("ws://localhost:3000/");
socket.onopen = function() {
    socket.send('{"action":"SUBSCRIBE", "userid":"58a4dc60eae5af11d58f58ae"}');
    console.log("connected");
    
};
socket.onmessage = function(evt)
{
     alert(evt.data);
     
};
    return {
        on: function (eventName, callback) {
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    };
})
