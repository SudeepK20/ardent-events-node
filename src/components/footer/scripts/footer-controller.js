
angular.module('ardent-footer')

    .controller('FooterController', ['$scope',

        function ($scope) {

            $scope.OnCLick = function() {
                FB.ui({
                    method: 'share',
                    display: 'popup',
                    href: 'http://www.ardentsne.com',
                }, function(response){});
            };
        }
	]);