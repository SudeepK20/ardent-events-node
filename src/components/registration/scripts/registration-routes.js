
(function () {

    angular.module('ardent-registration')

        .config(config);

    config.$inject = ['$stateProvider'];

    function config ($stateProvider) {

        $stateProvider.state('registration', {

            url         : '/registration',
            templateUrl : 'views/registration.html',
            controller 	: 'RegistrationController'
        });
    }

})();