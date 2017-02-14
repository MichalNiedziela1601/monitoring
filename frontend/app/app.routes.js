(function(){
    'use strict';

    function route($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider.
                when('/', {
                    templateUrl: 'mainView/mainView.controller.html',
                    controller: 'MainViewController',
                    controllerAs: 'mainViewCtrl'
        })
                        .when('/pomiarowy/:id', {
            templateUrl: 'punkt_pomiarowy/punkt-pomiarowy.tpl.html',
            controller: 'PunktPomiarowyController',
            controllerAs: 'punktPomiarCtrl'
        })
                .otherwise({ redirectTo: '/'});
    }
    angular.module('monitoring')
            .config(route);
})();
