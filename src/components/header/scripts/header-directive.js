
(function () {

	'use strict';

	angular.module('ardent-header')

	.directive('ardentHeader', ardentHeader);

	function ardentHeader () {

		return {

			restrict     : 'A',
			templateUrl  : 'views/header.html',
			controller   : 'HeaderController'
		};
	}

})();