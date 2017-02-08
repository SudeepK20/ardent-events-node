angular.module('ardent-registration')

    .service('RegistrationService', ['$http', function($http)
    {

        // var getCarouselSection = function () {
        //
        //     var promise = $http.get('/carouselSection').then(
        //         function (response) {
        //             return response.data;
        //         });
        //
        //     return promise;
        // };
        //
        var postUserData = function(data) {
            var promise = $http.post('/singlePlayerData', data).then(function(response){
                return response.data;
            })
                .catch(function(response){
                    return response.data;
                });
            return promise;
        };

        var postDoubleUserData = function(data) {
            var promise = $http.post('/doublePlayerData', data).then(function(response){
                return response.data;
            })
                .catch(function(response){
                    return response.data;
                });
            return promise;
        };


        return {
            postUserData: postUserData,
            postDoubleUserData: postDoubleUserData

        };
    }]);