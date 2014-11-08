var gameApp = angular.module('gameApp',['ngRoute','ngTouch']);

gameApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/initialscreen.html',
                controller: 'InitialScreenCtrl'
            }).
            when('/startGame', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

gameApp.controller('InitialScreenCtrl',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){

}]);

gameApp.controller('HomeCtrl',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
    var q = $('#square');
    var game = $('#gameCanvas');
    game.width($(document).width());
    game.height($(document).height());
    $scope.score = 0;
    $scope.time = 900;
    $scope.squareDrawed = 0;
    $scope.squareClicked = false;

    var loop = setInterval(function(){
        $scope.drawSquare();
    },  $scope.time );

    $scope.updateScore = function(){
        console.log($scope.squareClicked)
        if($scope.squareClicked === false){
            $scope.squareClicked = true;
            $scope.score++;
        }
        $scope.time = $scope.time - 10;
        $scope.startGame = false;
    },

    $scope.updateScoreBonus = function(){
        $scope.squareDrawed++;
        $scope.squareClicked = true;
        $scope.score = $scope.score + 5;
        $scope.time = $scope.time - 20;
    }

    $scope.drawSquare = function(){
        if(($scope.squareDrawed == 0 && $scope.squareClicked == false) || $scope.squareClicked == false){
            q.css('black')
            clearInterval(loop);
            return false;
        }
        $scope.squareClicked = false;
        var top  = Math.floor(Math.random()*$(document).height());
        var left = Math.floor(Math.random()*$(document).width());
        var topFinal = (top <= 60) ? 60 : (top >=  598) ? 590 : top;
        var leftFinal = (left <= 0) ? 0 : (left >= 348) ? 345 : left;

        q.css('top',topFinal);
        q.css('left',leftFinal);
        q.css('position','absolute');
        q.css('z-index',9999);
        $('#gameCanvas').css('position','relative').append(q)
    }


}]);
