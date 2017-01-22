
(function () {

	angular.module('ardent-about')

	.config(config);

	config.$inject = ['$stateProvider'];

	function config ($stateProvider) {

		$stateProvider.state('about', {

			url         : '/about',
			templateUrl : 'views/about.html',
			controller 	: 'AboutController'
		});
	}

})();