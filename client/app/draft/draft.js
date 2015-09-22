'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
      .state('draft', {
        url: '/draft',
        templateUrl: 'app/draft/draft.html',
        controller: 'DraftCtrl as ctrl'
      });
  });
