app.service('programmingLandingService', function ($http) {

    //get user profile information
    this.getGymObj = function (gymId) {
        return $http({
            method: 'GET',
            url: 'api/gyms/pathway/' + gymId,
        })
            .then(function (response) {
                return response.data;
            });
    };

    this.getStages = function (pathwayObj) {
        return $http({
            method: 'POST',
            url: 'api/gyms/stage',
            data: pathwayObj
        })
            .then(function (response) {
                return response.data;
            });
    };

    this.getEvals = function (stageObj) {
        return $http({
            method: 'POST',
            url: 'api/gyms/evaluations',
            data: stageObj
        })
            .then(function (response) {
                return response.data;
            });
    };

    this.getEvalDetails = function (evalObj) {
        return $http({
            method: 'POST',
            url: '/api/gyms/evaluation/specifics',
            data: evalObj
        })
            .then(function (response) {
                return response.data;
            });
    };

    this.addEvalObj = function (evalObj) {
        return $http({
            method: 'POST',
            url: '/api/gyms/add/evaluation',
            data: evalObj
        })
            .then(function (response) {
                return response;
            });
    };


    this.editEvaluation = function (evalObj) {
      return $http({
        method: 'PUT',
        url: '/api/gyms/edit/evaluation',
        data: evalObj
      })
          .then(function (response) {
        return response.data;
      });
    };

    this.deleteEval = function (evalObj) {
        return $http({
            method: 'PUT',
            url: '/api/gyms/removeById',
            data: evalObj
        })
            .then(function (response) {
                return response;
        });
    };


});
