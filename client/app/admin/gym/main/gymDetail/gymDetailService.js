(function () {
  'use strict';

app.service('gymDetailService', function ($http, $stateParams) {

    this.getGym = function () {
        return $http({
            method: 'GET',
            url: '/api/gyms/details/' + $stateParams.gymId
        })
            .then(function (response) {
                return response.data;
            });
    };

    this.updateGym = function (gym) {
        return $http({
            method: 'PUT',
            url: '/api/gyms/update',
            data: gym
        })
            .then(function (response) {
                return response.data;
            });
    };
});
}());
