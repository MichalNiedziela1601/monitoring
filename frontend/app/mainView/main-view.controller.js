(function ()
{
    'use strict';

    function MainViewController(StationsFactory, uiGmapGoogleMapApi)
    {
        var ctrl = this;
var id = 1;
        ctrl.markers = [{
            latitude: 49.975806, longitude: 21.564205, title: 'Glinik', id: id++, icon: 'assets/img/water-sensor.png'
        },
            {
                latitude: 50.010451, longitude: 21.551644, title: 'Laczki', id: id++, icon: 'assets/img/water-sensor.png'
            },
            {
                latitude: 50.030305, longitude: 21.548985, title: 'Okonin', id: id++, icon: 'assets/img/water-sensor.png'
            },
            {
                latitude: 50.095789, longitude: 21.629038, title: 'Kozodrza', id: id++, icon: 'assets/img/water-sensor.png'
            },
            {
                latitude: 50.015363, longitude: 21.674870, title: 'Zagorzyce', id: id++, icon: 'assets/img/water-sensor.png'
            },
            {
                latitude: 50.002837,  longitude: 21.757700, title: 'Olimpów', id: id++, icon: 'assets/img/water-sensor.png'
            },
            {
                latitude: 50.035315, longitude: 21.747457, title: 'Iwierzyce', id: id++, icon: 'assets/img/water-station.png'
            },
            {
                latitude: 50.019173, longitude: 21.676637, title: 'Zagorzyce Górne', id: id++, icon: 'assets/img/rain-station.png'
            },
            {
                latitude: 49.945675, longitude:  21.662576, title: 'Nawsie Górne', id: id++, icon: 'assets/img/rain-station.png'
            },
            {
                latitude: 49.987401, longitude: 21.507231, title: 'Niedziedzia Górna', id: id++, icon: 'assets/img/rain-station.png'
            },



        ];

        //////////////////////////
        function getStations()
        {
            StationsFactory.getStations().then(function (data)
            {
                ctrl.stations = data;
            });
        }

        function init()
        {
            getStations();
            uiGmapGoogleMapApi.then(function (maps)
            {
                ctrl.map = {center: {latitude: 50.015294, longitude: 21.673048}, zoom: 11};
            });
        }

        //////////////////////
        init();

    }

    angular.module('monitoring')
            .controller('MainViewController', MainViewController);


})();
