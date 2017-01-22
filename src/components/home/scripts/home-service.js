angular.module('ardent-home')

.service('HomeService', ['$http', function($http)
{

    var getCarouselSection = function () {

        var promise = $http.get('/carouselSection').then(
            function (response) {
                return response.data;
            });

        return promise;
    };

    var postUserData = function(data) {
        var promise = $http.post('/userData', data).then(function(response){
            return response.data;
        })
        .catch(function(response){
            return response.data;
        });
        return promise;
    };

	
	return {
        getCarouselSection: getCarouselSection,
        postUserData: postUserData
		
	};
}]);