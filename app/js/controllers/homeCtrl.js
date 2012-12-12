"use strict";

quizApp.controller('HomeCtrl', function HomeCtrl($rootScope, $scope, $location) {

    var MIN_NAME_LEN = 4;

    $scope.isValidUserName = function () {
        return ($scope.userName && $scope.userName.length > MIN_NAME_LEN);
    };

    $scope.startQuiz = function () {
        $rootScope.userName = $scope.userName;
        $location.path('/quiz');
    };
});
