(function () {
    'use strict';

    app.service('logosFundamentalsService', function ($http) {

        //service for updating eval status
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
