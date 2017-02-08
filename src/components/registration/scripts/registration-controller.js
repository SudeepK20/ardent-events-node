
angular.module('ardent-registration')

    .controller('RegistrationController', ['$scope', 'RegistrationService', '$state', '$stateParams',
        function ($scope, RegistrationService, $state, $stateParams) {

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

            $scope.id = $stateParams.id;

            $scope.user = {};

            $scope.addSingleUser = function () {
                var data = {
                    "firstName": $scope.user.firstName,
                    "lastName": $scope.user.lastName,
                    "dob": $scope.user.dob,
                    "gender": $scope.user.gender,
                    "organisation": $scope.user.organisation,
                    "email": $scope.user.email,
                    "mobileNumber": $scope.user.mobileNumber,
                    "transactionNumber": $scope.user.transactionNumber
                };
                RegistrationService.postUserData(data).then(function(response){
                    if (response._id ) {
                        $state.go('registration-success', {id: response._id});
                    }
                    else {
                        $state.go('registration-fail');
                    }
                });
            };


            $scope.userDouble = {};
            $scope.addDoubleUser = function () {
                var data = {
                    "firstName1": $scope.userDouble.firstName1,
                    "lastName1": $scope.userDouble.lastName1,
                    "dob1": $scope.userDouble.dob1,
                    "gender1": $scope.userDouble.gender1,
                    "organisation1": $scope.userDouble.organisation1,
                    "email1": $scope.userDouble.email1,
                    "mobileNumber1": $scope.userDouble.mobileNumber1,
                    "transactionNumber1": $scope.userDouble.transactionNumber1,
                    "firstName2": $scope.userDouble.firstName2,
                    "lastName2": $scope.userDouble.lastName2,
                    "dob2": $scope.userDouble.dob2,
                    "gender2": $scope.userDouble.gender2,
                    "organisation2": $scope.userDouble.organisation2,
                };
                RegistrationService.postDoubleUserData(data).then(function(response){
                    if (response._id ) {
                        $state.go('registration-success', {id: response._id});
                    }
                    else {
                        $state.go('registration-fail');
                    }
                });
            };

        }
    ]);