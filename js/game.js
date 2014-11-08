var gameApp = angular.module('gameApp', ['ngRoute', 'ngTouch']);

gameApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/initialscreen.html',
                controller: 'InitialScreenCtrl'
            }).
            when('/startGame', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            }).
            when('/gameover', {
                templateUrl: 'partials/gameover.html',
                controller: 'HomeCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

gameApp.controller('InitialScreenCtrl', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {

}]);

gameApp.controller('HomeCtrl', ['$scope', '$rootScope', '$timeout','$location','$interval', function ($scope, $rootScope, $timeout,$location,$interval) {
    var q = $('#square');
    var game = $('#gameCanvas');
    game.width($(document).width());
    game.height($(document).height());
    $scope.score = 0;
    $scope.time = 600;
    $scope.squareDrawed = 0;
    $scope.squareClicked = false;
    $scope.blocked = false;

    var loop = $interval(function () {
        $scope.drawSquare();
    }, $scope.time);

    $scope.updateScore = function () {
        $scope.squareClicked = true;
        if ($scope.blocked === false) {
            $scope.score++;
            $scope.time = $scope.time - 10;
            $scope.squareDrawed++;
            $scope.startGame = false;
            q.remove();
        }
    }

    $scope.drawSquare = function () {
        if (($scope.squareDrawed == 0 && $scope.squareClicked == false) || $scope.squareClicked == false) {
            q.css('background-color', '#2c3e50');
            $interval.cancel(loop);
            loop = undefined;
            $scope.blocked = true;
            return false;
        }
        $scope.squareClicked = false;
        $scope.createNewInstance();
    }

    $scope.createNewInstance = function(){
        var top = Math.floor(Math.random() * game.height());
        var left = Math.floor(Math.random() * game.width());
        var topFinal = (top <= 60) ? 60 : (top >= 640) ? 590: top;
        var leftFinal = (left <= 0) ? 0 : (left >= 360) ? 320: left;

        q.css('top', topFinal);
        q.css('left', leftFinal);
        q.css('position', 'absolute');
        q.css('z-index', 99);
        q.css('width','40px');
        q.css('height','40px');
        $('#gameCanvas').css('position', 'relative').append(q)
    }


}]);
