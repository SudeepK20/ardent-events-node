(function() {

    'use strict';

    // App instantiation

    angular.module('app', [
        'duScroll',
        'angular-clipboard',
        'angularFileUpload',
        'naif.base64',
        'ngCookies',
        'ngSanitize',
        'ngPageTitle',
        'ardent-home',
        'ardent-header',
        'ardent-footer',
        'ardent-about',
        'ardent-blog',
        'ardent-contact'
    ])
    .config(['$locationProvider','$httpProvider',
        function($locationProvider, $httpProvider) {
            // Remove /#/
            $locationProvider.html5Mode(true);

            // Configure CORS 
            $httpProvider.defaults.headers.common['Cache-Control'] = 'max-age=300';
            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.headers.common = 'Content-Type: application/json';
            delete $httpProvider.defaults.headers.common['X-Requested-With'];

        }
    ]);

})();
