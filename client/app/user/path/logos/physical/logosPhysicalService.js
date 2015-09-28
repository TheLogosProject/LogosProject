(function () {
    'use strict';
      app.service('logosPhysicalService', function ($http) {
          //updating eval status to complete
          this.submitEval = function (userInfo) {
              return $http({
                  method: 'PUT',
                  url: '/api/users/updateEval',
                  data: userInfo
              }).then(function (response) {
                  console.log("test");
                  return response.data;
              });
          };

          // updates progression status to complete
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
  } ());
