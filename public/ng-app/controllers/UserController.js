/**
 * Created by noman_2 on 12/8/2015.
 */
var app = angular.module('inventory_system');

app.controller("UserController",["$scope", function ($scope) {
    $scope.user = {
        name:"Noman Tufail",
        role: "Admin, Editor",
    }
}]);