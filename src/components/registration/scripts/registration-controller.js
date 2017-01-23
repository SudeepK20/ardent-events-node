
angular.module('ardent-registration')

    .controller('RegistrationController', ['$scope', 'RegistrationService',
        function ($scope, RegistrationService) {

            $scope.eventType= {
                'event': $scope.type
            };
            $scope.type = [{
                'name': 'Badminton Singles',
                'value': '1'
            }, {
                'name': 'Badminton Doubles',
                'value': '2'
            }];

            // HomeService.getCarouselSection().then(function (response) {
            //     console.log(response[0]);
            //     $scope.carouselSection = response[0];
            // });
            // $scope.user = {};
            // $scope.addUser = function (){
            // 	var data = {
            // 		"name": $scope.user.name,
            // 		"email": $scope.user.email,
            // 		"phoneNumber": $scope.user.phoneNumber,
            // 		"message":$scope.user.message
            // 	};
            // 	console.log(data);
            //
            // 	HomeService.postUserData(data).then(function(response){
            // 		console.log(response);
            // 	});
            //
            //
            // };




        }
    ]);