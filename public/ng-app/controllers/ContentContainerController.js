/**
 * Created by noman_2 on 12/8/2015.
 */

var app = angular.module('inventory_system');

app.controller("ContentContainerController",["$scope", function ($scope) {
    var contentHeader = {
        title: "Home"
    };
    $scope.contentHeader = contentHeader;
}]);