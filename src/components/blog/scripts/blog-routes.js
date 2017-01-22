
(function () {

	angular.module('ardent-blog')

	.config(config);

	config.$inject = ['$stateProvider'];

	function config ($stateProvider) {

		$stateProvider.state('blog', {

			url         : '/blog',
			templateUrl : 'views/blog.html',
			controller 	: 'BlogController'
		});
	}

})();