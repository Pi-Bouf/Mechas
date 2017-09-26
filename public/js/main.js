var app = angular.module('mainApp', ['ngRoute']);



app.config(($routeProvider) => {
    $routeProvider
        .when("/", {
            templateUrl: "./pages/user-select.html",
            controller: "mainController"
        })
        .when("/:USER", {
            templateUrl: "./pages/user-page.html",
            controller: "userController"
        })
});

app.controller('mainController', function ($scope, $http, $rootScope, $timeout) {
    $rootScope.somethingLoading = true;
    $http.get("/user/list")
        .then((response) => {
            $timeout(() => {
                $scope.userList = response.data;
                $rootScope.somethingLoading = false;
            }, 2000);
        }, (error) => {
            alert("ERROR");
        });
});

app.controller('userController', function ($scope, $http, $rootScope, $routeParams, $timeout) {
    $http.get("/user/" + $routeParams.USER)
        .then((response) => {
            console.log(response);
        }, (error) => {
            alert("ERROR");
        });
});