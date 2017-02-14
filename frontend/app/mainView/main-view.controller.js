(function(){
    'use strict';

    function MainViewController(StationsFactory){
        var ctrl = this;

        //////////////////////////
        function getStations()
        {
            StationsFactory.getStations().then(function (data)
            {
                ctrl.stations = data;
            });
        }

        function init(){
            getStations();
        }
        //////////////////////
        init();

    }

    angular.module('monitoring')
        .controller('MainViewController', MainViewController);


})();
