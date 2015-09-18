app.service('gymDetailService', function ($http, $stateParams) {

    this.getGym = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/gym-details/' + $stateParams.gymId
        })
            .then(function (response) {
                return response.data;
            });
    };

    this.updateGym = function (gym) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:8555/api/gym-update',
            data: gym
        })
            .then(function (response) {
                return response.data;
            });
    };
});
