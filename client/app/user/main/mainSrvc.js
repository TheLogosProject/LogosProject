app.service('mainSrvc', function ($http) {

    this.getUserByID = function (id) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/user/' + id
        })
            .then(function (response) {
                return response.data;
            });
    };
});