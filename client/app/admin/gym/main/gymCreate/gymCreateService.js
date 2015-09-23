(function () {
  'use strict';


app.service('gymCreateService', function ($http) {

    this.createGym = function (newGym) {
        return $http({
            method: 'POST',
            url: '/api/gyms',
            data: newGym
        })
            .then(function (response) {
                return response;
            });
    };

});

}());
