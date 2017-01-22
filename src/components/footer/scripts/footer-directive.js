
(function () {

	'use strict';

	angular.module('ardent-footer')

	.directive('ardentFooter', ardentFooter);

	function ardentFooter () {

		return {

			restrict     : 'A',
			templateUrl  : 'views/footer.html'
		};
	}

})();