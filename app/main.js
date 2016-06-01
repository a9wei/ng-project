// config and route
'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngSanitize',
    'ngCookies',
    'app.services.News',
    'app.services.Product',
    'app.Dashboard',
    'app.Product',
]);

app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/', {
            templateUrl: './app/Dashboard/Dashboard.html',
            controller: 'DashboardCtrl'
        }).
        when('/bbbb', {
            templateUrl: './app/Dashboard/Dashboard.html',
            controller: 'DashboardCtrl'
        }).
        when('/product', {
            templateUrl: './app/Product/Product.html',
            controller: 'ProductCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);

app.run([
    "$rootScope",
    "$location",
    "$http",
    "$httpParamSerializerJQLike",
    "$document",
    "$cookieStore", function($rootScope, $location, $http, $httpParamSerializerJQLike, $document, $cookieStore) {
            // push url to history
            // var history = [];
            //
            // $rootScope.$on('$routeChangeSuccess', function () {
            //     history.push($location.$$path);
            //    $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
            // });
        }
    ]);
