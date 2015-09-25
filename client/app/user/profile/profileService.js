(function () {
    'use strict';

    app.service('profileSvc', function ($http, $stateParams) {

        //get user profile information
        this.getUser = function (memberId) {
            return $http({
                method: 'GET',
                url: '/api/users/details/' + memberId,
            }).then(function (response) {
                return response.data;
            });
        };

        //service for updating user profile
        this.updateUserData = function (userData) {
            return $http({
                method: 'PUT',
                url: '/api/users/update',
                data: userData
            }).then(function (response) {
                return response.data;
            });
        };
    });
} ());
