var gameApp = angular.module('gameApp',[]);

gameApp.controller('game',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){

    $scope.initGame = function(){
        $rootScope.canvas = document.getElementById('game');
        $rootScope.context = $rootScope.canvas.getContext('2d');
        $rootScope.canvas.width  = window.outerWidth - 100;
        $rootScope.canvas.height = window.outerHeight - 100;
        $scope.tempo = 4000;
        $scope.score = 0;

        $scope.drawRect();
    }

    $scope.drawRect = function(){
        $rootScope.context.fillRect(Math.random(),4,10,10);
        $rootScope.context.fillRect(Math.random(),44,10,10);
    },

    $scope.updateRectPositions = function(){
        $rootScope.context.clearRect(0,0,$rootScope.canvas.width,$rootScope.canvas.height);
        $scope.score++;
    }



}]);