app.service('userService', function ($http) {

    this.getUserByID = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/user/55f763bd5a32a293ef672da3'
        })
            .then(function (response) {
                return response.data;
            });
    };

});
