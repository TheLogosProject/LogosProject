// app.js
var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // home state
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html'
        })

        // about page
        .state('login', {
          url: '/login',
          templateUrl: 'app/loginRegister/loginRegister.html'
        })

        .state('userLanding', {
          // will want to be /userLanding/:id when live
          url: '/userLanding',
          templateUrl: 'app/userLanding/userLanding.html'
        });

});
