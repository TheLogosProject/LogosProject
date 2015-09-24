app.service('programmingLandingService', function ($http) {

    //get user profile information
    this.getGymObj = function (gymId) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/gym-pathway/' + gymId,
        })
            .then(function (response) {
                return response.data;
            });
    };

    this.getStages = function (pathwayObj) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8555/api/gym-stage',
            data: pathwayObj
        })
            .then(function (response) {
                return response.data;
            });
    };

    this.getEvals = function (stageObj) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8555/api/gym-evaluations',
            data: stageObj
        })
            .then(function (response) {
                return response.data;
            });
    };

    this.getEvalDetails = function (evalObj) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8555/api/gym-evaluation-specifics',
            data: evalObj
        })
            .then(function (response) {
                return response.data;
            });
    };

    this.addEvalObj = function (evalObj) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8555/api/gym-add-evaluation',
            data: evalObj
        })
            .then(function (response) {
                return response;
            });
    };

    this.editEvaluation = function (evalObj) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:8555/api/gym-edit-evaluation',
            data: evalObj
        })
            .then(function (response) {
                return response;
            });
    };


});
