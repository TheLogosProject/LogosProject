// app.js
var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // home state
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html'
        })

        // about page
        .state('login', {
          url: '/login',
          templateUrl: 'login.html'
        });

});
