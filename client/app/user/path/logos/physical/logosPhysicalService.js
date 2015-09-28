app.service('logosPhysicalService', function ($http) {
    this.updateStatus = function (progObj) {
        return $http({
            method: 'PUT',
            url: '/api/users/updateProgression',
            data: progObj
        })
            .then(function (response) {
                return response;
            });
    };
});