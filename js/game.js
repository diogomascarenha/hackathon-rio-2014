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
    var game = $('#gamecanvas');

    game.width($(document).width());
    game.height($(document).height());
    $scope.score = 0;

    $scope.updateScore = function(){
        $('#square').remove();
        $scope.drawSquare();
        $scope.score++;
    },

    $scope.updateScoreBonus = function(){
        $('#bonus').remove();
        $scope.drawSquare();
        $scope.score = $scope.score + 5;
    }

    $scope.drawSquare = function(){
        var top  = Math.floor(Math.random()*$(document).height());
        var left = Math.floor(Math.random()*$(document).width());
        var topFinal = (top <= 60) ? 60 : top;
        var leftFinal = (left < 0) ? 0 : left;

        q.css('top',topFinal);
        q.css('left',leftFinal);
        $('#gameCanvas').append(q)
    }


}]);
