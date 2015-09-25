app.service('mainSrvc', function ($http) {

    this.getUserByID = function (id) {
        return $http({
            method: 'GET',
            url: '/api/users/' + id
        })
            .then(function (response) {
                return response.data;
            });
    };
});
