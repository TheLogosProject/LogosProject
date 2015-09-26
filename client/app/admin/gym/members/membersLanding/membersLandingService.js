app.service('membersLandingService', function ($http) {
    this.getUsers = function (gymId) {
        return $http({
            method: 'GET',
            url: "/api/users/gym/" + gymId
        })
            .then(function (response) {
                return response.data;
            });
    };
});