
(function () {

    angular.module('ardent-registration')

        .config(config);

    config.$inject = ['$stateProvider'];

    function config ($stateProvider) {

        $stateProvider.state('registration', {

            url         : '/registration',
            templateUrl : 'views/registration.html',
            controller 	: 'RegistrationController'
        })


            .state('registration-success', {

            url         : '/registration-success?id',
            templateUrl : 'views/registration-success.html',
            controller 	: 'RegistrationController'
        })

            .state('registration-fail', {

            url         : '/registration-fail',
            templateUrl : 'views/registration-fail.html',
            controller 	: 'RegistrationController'
        });
    }

})();