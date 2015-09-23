(function () {
  'use strict';


app.service('gymLandingService', function ($http) {

    this.getGym = function () {
        return $http({
            method: 'GET',
            url: '/api/gyms'
        })
            .then(function(response) {
                return response.data;
            });
    };

});

}());
