(function () {
    'use strict';

    app.service('gymCoachService', function ($http) {

        this.getEval = function (gymID) {
            return $http({
                method: 'GET',
                url: '/api/users/gym/' + gymID
            }).then(function (response) {
                console.log(response.data);
                return response.data;
            });
        };

    });
} ());



        // service for updating eval status
        // this.submitEval = function (userInfo) {
        //     return $http({
        //         method: 'PUT',
        //         url: '/api/users/updateEval',
        //         data: userInfo
        //     }).then(function (response) {
        //         return response.data;
        //     });
        // };
