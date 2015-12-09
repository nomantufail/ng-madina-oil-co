/**
 * Created by noman_2 on 12/8/2015.
 */
var app = angular.module('inventory_system');

app.controller("ShowCustomersController",["$scope","$http", function ($scope, $http) {
    $scope.contentHeader.title = "All Customers";
    $scope.customers = [];

    $http({
        method: 'GET',
        url: '/customers'
    }).then(function successCallback(response) {
        $scope.customers = response.data.customers;
    }, function errorCallback(response) {
        alert('oooops :((');
    });
}]);