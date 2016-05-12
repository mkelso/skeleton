(function() {
    var app = angular.module('skeleton', ['ngRoute'])

    // App route provider
    app.config(['$routeProvider',
        function($routeProvider) {

            $routeProvider.when('/', {
                templateUrl: 'views/home.html'
            }).
            otherwise({
                redirectTo: '/'
            });
        }
    ]);


})();