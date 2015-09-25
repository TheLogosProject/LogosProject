app.service('logosLandingService', function ($http, Auth) {

  this.getCurrentUser = function(){
      return Auth.getCurrentUser().then(function(response){
        return response;
      })
  }

});


// http://localhost:9000/api/users-logos/560086ff00b7d81f04f874a0
// we need to re write the logic to use the memberId to traverse the userObj, find the pathways array and then run the if else comparison
