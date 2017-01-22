
angular.module('ardent-home')

    .controller('HomeController', ['$scope', 'HomeService',
        function ($scope, HomeService) {

                HomeService.getCarouselSection().then(function (response) {
                    console.log(response[0]);
                    $scope.carouselSection = response[0];
                });
                $scope.user = {};
                $scope.addUser = function (){
                	var data = {
                		"name": $scope.user.name,
                		"email": $scope.user.email,
                		"phoneNumber": $scope.user.phoneNumber,
                		"message":$scope.user.message
                	};
                	console.log(data);

                	HomeService.postUserData(data).then(function(response){
                		console.log(response);
                	});


                };



           
        }
    ]);