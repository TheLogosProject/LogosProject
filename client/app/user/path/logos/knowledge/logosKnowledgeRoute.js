(function () {
  'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('logosKnowledge', {
      url: '/path/logos/knowledge',
      templateUrl: 'app/user/path/logos/knowledge/logosKnowledge.html',
      controller: 'logosKnowledgeCtrl',
      resolve: {
        userObj: function(Auth) {
            return Auth.getCurrentUser().$promise;
        }
      }
    });
  });

}());
