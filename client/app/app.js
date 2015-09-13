// app.js
var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html'
        })

        .state('login', {
          url: '/login',
          templateUrl: 'app/loginRegister/loginRegister.html'
        })

        .state('userProfile', {
          url: '/userProfile',
          // will want to be /userProfile/:id when live
          templateUrl: 'app/userProfile/userProfile.html'
        })

        .state('userLanding', {
          // will want to be /userLanding/:id when live
          url: '/userLanding',
          templateUrl: 'app/userLanding/userLanding.html'
        });

});
