
(function () {

	angular.module('ardent-home')

	.config(config);

	config.$inject = ['$stateProvider'];

	function config ($stateProvider) {

		$stateProvider.state('home', {

			url         : '/',
			templateUrl : 'views/home.html',
			controller 	: 'HomeController'
		});
	}

})();