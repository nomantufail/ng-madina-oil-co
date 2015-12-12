/**
 * Created by zeenomlabs on 12/11/2015.
 */
var app = angular.module('inventory_system');
app.factory("$RouteHelper", function ($rootScope, $http) {
    return {
        getStatePath: function ($state) {
            return $state.href($state).substring(1);
        },
        getAuthenticatedLandingUri: function () {
           return this.getStatePath('home.customers.all');
        },
        getLoginUri: function () {
            return this.getStatePath('login');
        }
    }
});