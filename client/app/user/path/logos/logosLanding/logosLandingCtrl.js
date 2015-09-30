app.controller('logosLandingCtrl', function ($scope, $stateParams, Auth, $location) {
  $scope.getCurrentUser = Auth.getCurrentUser;

  // function to route user to correct stage, based on level of completeness
  $scope.getCurrentUser().$promise.then(function(data){
    if (data.pathways[0].stages[0].complete === false) {
      return $location.path('/path/logos/fundamentals')
    }
    else if (data.pathways[0].stages[0].complete && data.pathways[0].stages[1].complete && data.pathways[0].stages[2].complete === true) {
      return $location.path('/path/logos/complete')
    }
    else if(data.pathways[0].stages[0].complete && data.pathways[0].stages[1].complete === true) {
      return $location.path('/path/logos/physical')
    }
    else {
      return $location.path('/path/logos/knowledge')
    }
  });
});
