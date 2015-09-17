angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('logosPhysicalAddEdit', {
                // will be :gymId when live
                url: '/gym/programming/gymId/physical/create',
                templateUrl: 'app/admin/gym/programming/logos/physical/logosPhysicalAddEdit.html'
            })
          });
