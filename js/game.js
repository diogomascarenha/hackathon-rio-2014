var gameApp = angular.module('gameApp',['ngRoute']);

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

    $('body').on('click','#square',function(e){
        $('#square').remove();
    })
}]);

//gameApp.controller('GameCtrl',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
//
//    $scope.initGame = function(){
//        $rootScope.canvas = document.getElementById('game');
//        $rootScope.context = $rootScope.canvas.getContext('2d');
//        $rootScope.canvas.width  = window.outerWidth - 100;
//        $rootScope.canvas.height = window.outerHeight - 100;
//        $scope.time = 4000;
//        $scope.score = 0;
//
//        $scope.squareConfig = {
//            w : 10,
//            h : 10
//        }
//
//        $scope.drawRect();
//    }
//
//    $scope.drawRect = function(){
//        $rootScope.context.fillRect(56,15,$scope.squareConfig.w,$scope.squareConfig.h);
//    },
//
//    $scope.updateRectPositions = function(event){
//        var posX = event.offsetX;
//        var posY = event.offsetY;
//
//        console.log('pos X:' + parseInt(posX + $scope.squareConfig.w),'pos Y' + parseInt(posY + $scope.squareConfig.h));
//        //$rootScope.context.clearRect(0,0,$rootScope.canvas.width,$rootScope.canvas.height);
//        //$scope.score++;
//    }
//}]);