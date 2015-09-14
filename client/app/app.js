// app.js
var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'app/public/home/home.html'
        })

        .state('login', {
          url: '/login',
          templateUrl: 'app/public/loginRegister/loginRegister.html'
        })

        .state('logos', {
          url: '/logos',
          // will need to tie this to username for unique view for each member
          templateUrl: 'app/user/logos/logos.html'
        })

        .state('pathos', {
          url: '/pathos',
          // will need to tie this to username for unique view for each member
          templateUrl: 'app/user/pathos/pathos.html'
        })

        .state('ethos', {
          url: '/ethos',
          // will need to tie this to username for unique view for each member
          templateUrl: 'app/user/ethos/ethos.html'
        })

        .state('userProfile', {
          url: '/userProfile',
          // will want to be /userProfile/:id when live
          templateUrl: 'app/user/userProfile/userProfile.html'
        })

        .state('userLanding', {
          // will want to be /userLanding/:id when live
          url: '/userLanding',
          templateUrl: 'app/user/userLanding/userLanding.html'
        });

});
