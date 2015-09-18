app.service('gymCreateService', function ($http) {

    this.createGym = function (newGym) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8555/api/gym',
            data: newGym
        })
            .then(function (response) {
                return response;
            });
    };

});
