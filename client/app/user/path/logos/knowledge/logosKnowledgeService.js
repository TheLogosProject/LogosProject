app.service('logosKnowledgeService', function ($http) {

    this.updateUserData = function (data) {
        return $http({
            method: 'PUT',
            url: '/api/users/updateAnswer',
            data: data
        })
            .then(function (response) {
                return response;
            });
    };

    this.updateEval = function (obj) {
        return $http({
            method: 'PUT',
            url: '/api/users/updateEval',
            data: obj
        })
            .then(function (response) {
                return response;
            });
    };

});