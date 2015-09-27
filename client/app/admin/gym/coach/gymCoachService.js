(function () {
    'use strict';

    app.service('gymCoachService', function ($http) {

        this.getUserObj = function (gymID) {
            return $http({
                method: 'GET',
                url: '/api/users/gym/' + gymID
            }).then(function (response) {
                return response.data;
            });
        };

        // service for updating eval status
        this.submitEval = function (userInfo) {
            return $http({
                method: 'PUT',
                url: '/api/users/updateEval',
                data: userInfo
            }).then(function (response) {
                return response.data;
            });
        };

    });
} ());
