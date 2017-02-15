(function(){
    'use strict';

    function MainViewController(StationsFactory,uiGmapGoogleMapApi){
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
            uiGmapGoogleMapApi.then(function(maps) {
                ctrl.map = { center: { latitude: 50.015294,  longitude: 21.673048 }, zoom: 11 };
            });
        }
        //////////////////////
        init();

    }

    angular.module('monitoring')
        .controller('MainViewController', MainViewController);


})();
