angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('logosKnowledgeAddEdit', {
                // will be :gymId when live
                url: '/gym/programming/gymId/knowledge/create',
                templateUrl: 'app/admin/gym/programming/logos/knowledge/logosKnowledgeAddEdit.html'
            })
          });
