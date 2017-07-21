'use strict';

/**
 * @ngdoc directive
 * @name ubiApp.directive:ubiPlumb
 * @description
 * # ubiPlumb
 */
angular.module('ubiApp')
  .directive('ubiPlumb', function () {
    return {
      templateUrl: 'views/ubiplumb.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
         jsPlumb.ready(function() {
        
		var exampleGreyEndpointOptions = {
		  endpoint:"Rectangle",
		  paintStyle:{ width:25, height:21, fill:'#666' },
		  isSource:true,
		  connectorStyle : { stroke:"#666" },
		  isTarget:true
		};
         	
         	jsPlumb.addEndpoint("item_left", { 
  anchor:"Top"
}, exampleGreyEndpointOptions); 
         	
            jsPlumb.connect({
                source:"item_left",
                target:"item_right",
                endpoint:"Rectangle"
            });
            jsPlumb.connect({
                source:"item_left",
                target:"item_left2", 
                endpoint:"Rectangle",
  deleteEndpointsOnDetach:false 
            });
            jsPlumb.connect({
                source:"item_left",
                target:"item_left3",
                endpoint:"Dot"
            });
            jsPlumb.connect({
                source:"item_left3",
                target:"item_right",
                endpoint:"Dot"
            });
            jsPlumb.draggable("item_left");
            jsPlumb.draggable("item_left2");
            jsPlumb.draggable("item_left3");
            jsPlumb.draggable("item_right");
        });
      }
    };
  });
