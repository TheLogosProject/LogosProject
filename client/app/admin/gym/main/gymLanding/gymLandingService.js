(function () {
  'use strict';


app.service('gymLandingService', function ($http) {

    this.getGym = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:9000/api/gym-names'
        })
            .then(function(response) {
                return response.data;
            });
    };

});

}());
