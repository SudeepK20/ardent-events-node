
(function () {

	angular.module('ardent-results')

	.config(config);

	config.$inject = ['$stateProvider'];

	function config ($stateProvider) {

		$stateProvider.state('results', {

			url         : '/results',
			templateUrl : 'views/results.html',
			controller 	: 'ResultsController'
		});
	}

})();