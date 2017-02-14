(function(){
    'use strict';

    function MainViewController(StationsFactory){
        var ctrl = this;

        ctrl.bla = 'bla';

        StationsFactory.getStations().then(function(data){
            ctrl.stations = data;
        });

    }

    angular.module('monitoring')
        .controller('MainViewController', MainViewController);


})();
