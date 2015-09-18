app.service('gymLandingService', function ($http) {

    this.getGym = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/gym-names'
        })
            .then(function(response) {
                return response.data;
            });
    };

});
