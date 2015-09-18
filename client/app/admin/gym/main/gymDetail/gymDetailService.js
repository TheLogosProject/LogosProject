app.service('gymDetailService', function ($http) {

    this.getGym = function (gymId) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/gym/' + gymId
        })
            .then(function (response) {
                return response;
            });
    };

});
