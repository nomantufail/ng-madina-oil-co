/**
 * Created by noman_2 on 12/8/2015.
 */
var app = angular.module('inventory_system');

app.controller("LoginController",["$rootScope", "$scope",
    "$AuthService", "$location", "$state", "$http", "$firebaseArray",
    function ($rootScope, $scope, $AuthService, $location, $state, $http, $firebaseArray) {

        //var ref = new Firebase("https://blistering-torch-713.firebaseio.com/test1/lies");

        $scope.login = function () {
            $AuthService.authenticate().then(function (token) {
                $AuthService.setAppToken(token);
                $location.path('/home/customers/');
            }, function (data) {
                alert('some thing went wrong');
            });
            /*$http({
                method: 'GET',
                url: '/auth/login'
            }).then(function successCallback(response) {
                $token = response.data.token;
                $rootScope.AUTH_TOKEN = $token;
                window.location = $state.href('home.customers.all');
            }, function errorCallback(response) {
                alert('oooops :((');
            });*/
        }
}]);