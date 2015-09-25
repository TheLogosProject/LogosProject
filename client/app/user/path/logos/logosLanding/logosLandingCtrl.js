app.controller('logosLandingCtrl', function ($scope, $stateParams, Auth, $location) {
  $scope.getCurrentUser = Auth.getCurrentUser;

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


  //
  // return Auth.getCurrentUser().then(function(response) {
  //   console.log(response);
  //   if (response.stages[0].complete === false) {
  //     return '/path/logos/fundamentals'
  //   }
  //   else if (response.stages[0].complete && response.stages[1].complete && response.stages[2].complete === true) {
  //     return '/path/logos/complete'
  //   }
  //   else if (response.stages[0].complete && response.stages[1].complete === true) {
  //     return '/path/logos/physical'
  //   }
  //   else {
  //     return '/path/logos/knowledge'
  //   }
  // })
  //
  //
  // resolve: {
  //   onPageLoad: function($location, logosLandingService, Auth) {
  //     return Auth.getCurrentUser()
  //
  //   }
  // }
