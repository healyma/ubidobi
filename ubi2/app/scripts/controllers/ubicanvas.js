'use strict';

/**
 * @ngdoc function
 * @name ubiApp.controller:UbicanvasCtrl
 * @description
 * # UbicanvasCtrl
 * Controller of the ubiApp
 */
angular.module('ubiApp')
  .controller('UbiCanvasCtrl', function ($scope,UserCanvases,CanvasContent) {
    var drawing=false;
    var paths=[];
    var brushes=
    [
      {
        name:'solid'
      }
    ];
    var activeBrush=brushes[0];
    var colours=[
      {
        name:'Black',
        rgb:'#000000',
      }
    ];
    var activeColour=colours[0];

    var canvas = document.getElementById("teamCanvas");
    var ctx = canvas.getContext("2d");
    var lineWidth=6;
    var pointsArray=[];
    var line={};
    var lines=lines=CanvasContent('0');
    $scope.colourPickerOptions={
      format:'hex',
      swatchOnly:true,
      hue:true,
      saturation:false,
      lightness:false,
      swatchBootstrap:true
    }
    $scope.lineWidth=8;
    $scope.lineCap="butt";
    $scope.activeColour='#00ff00';
    ctx.strokeStyle=$scope.activeColour;

    canvas.addEventListener('mousedown',mouseDown,false);
    canvas.addEventListener('mouseup',mouseUp,false);
    canvas.addEventListener('mousemove',mouseMove,false);
    window.addEventListener('resize', resizeCanvas, false);
    function mouseDown(event){

      ctx.strokeStyle=$scope.activeColour;
      drawing=true;
       line={
        lineWidth:$scope.lineWidth,
        lineCap: $scope.lineCap,
        strokeStyle:$scope.activeColour,
        quadcurves:[]
      }

      ctx.lineWidth=line.lineWidth;
      ctx.lineCap=line.lineCap;
      pointsArray=[{X:event.layerX,Y:event.layerY}];
    }
    function mouseUp(event){
      drawing=false;
      lines.$add(line).then(function(ref){
      });

    }
    function mouseMove(event){
      if(drawing){
        //look for different values of x and y
        pointsArray.push({X:event.layerX,Y:event.layerY});
          if(pointsArray.length==3){
            line.quadcurves.push(pointsArray);
            ctx.beginPath();
            ctx.moveTo(pointsArray[0].X,pointsArray[0].Y);
            ctx.quadraticCurveTo(pointsArray[1].X,pointsArray[1].Y,pointsArray[2].X,pointsArray[2].Y);
            ctx.stroke();
            pointsArray=[{X:event.layerX,Y:event.layerY}];
          }
      }
    }
    $scope.thisCanvas='none';
    $scope.newForm=false;
    $scope.newcanvas={};
    $scope.userCanvases=UserCanvases;
    $scope.loadCanvas=function(canvasId){
      $scope.thisCanvas=$scope.userCanvases.$getRecord(canvasId);
      lines=CanvasContent(canvasId);
      paths=[];

      lines.$watch(function() {
  lines.$loaded()
    .then(function(x) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i< x.length; i++) {
        var thisline = x[i];
        ctx.lineWidth=thisline.lineWidth;
        ctx.lineCap=thisline.lineCap;
        ctx.strokeStyle=thisline.strokeStyle;
        if(thisline.quadcurves){
          for (var j = 0; j < thisline.quadcurves.length; j++) {
            var thisPointSet = thisline.quadcurves[j];
            ctx.beginPath();
            ctx.moveTo(thisPointSet[0].X, thisPointSet[0].Y);
            ctx.quadraticCurveTo(thisPointSet[1].X, thisPointSet[1].Y, thisPointSet[2].X, thisPointSet[2].Y);
            ctx.stroke();
          }
        }
      }
    })
    .catch(function(error) {
    });
  });
}
  $scope.showNew = function() {
      $scope.newForm=true;
    }
    $scope.addCanvas=function(){
      $scope.newForm=false;
      $scope.userCanvases.$add(
        {
          name: $scope.newcanvas.name,
          added: firebase.database.ServerValue.TIMESTAMP
        }
      ).then(function(id){
        $scope.loadCanvas(id)
        $scope.newcanvas=[];
      });
    }
    $scope.draw=function(){

    }
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if($scope.thisCanvas.$id){
          $scope.loadCanvas($scope.thisCanvas.$id);
        }
      }
      resizeCanvas();
  });
