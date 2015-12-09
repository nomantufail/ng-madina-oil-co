/**
 * Created by noman_2 on 12/8/2015.
 */
var views = "ng-app/views";
var app = angular.module('inventory_system');
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/customers/");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: views+"/home.html",
            controller: "HomeController"
        })
        .state('customers', {
            url: "/customers",
            templateUrl: views+"/customers/index.html"
        })
        .state('customers.all', {
            url: "/",
            templateUrl: views+"/customers/show.html",
            controller: "ShowCustomersController"
        })
        .state('customers.add',{
            url:"/add-new-customer",
            templateUrl: views+"/customers/add.html",
            controller: "AddCustomersController"
        })
});