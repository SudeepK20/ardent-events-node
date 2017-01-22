
(function () {

	angular.module('ardent-contact')

	.config(config);

	config.$inject = ['$stateProvider'];

	function config ($stateProvider) {

		$stateProvider.state('contact', {

			url         : '/contact',
			templateUrl : 'views/contact.html',
			controller 	: 'ContactController'
		});
	}

})();