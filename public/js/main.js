var app = angular.module('mainApp', ['ngRoute']);


app.config(($routeProvider) => {
    $routeProvider
    .when("/", {
        templateUrl : "./pages/user-select.html",
        controller : "mainController"
    })
});

app.controller('mainController', function ($scope, $http, $rootScope) {
    $rootScope.somethingLoading = true;
    $http.get("/user/list")
        .then((response) => {
            $scope.userList = response.data;
        }, (response) => {
            alert("ERROR")
    });
});