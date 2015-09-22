
angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('logosPhysical', {
      url: '/path/logos/physical/:memberId',
      // will need to tie this to username for unique view for each member
      templateUrl: 'app/user/path/logos/physical/logosPhysical.html'
    });
  });
