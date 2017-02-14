(function(){
    'use strict';
    function StationsFactory($http){

        function getStations(){
            return $http.get('http://localhost:8080/api/stations').then(function(res){
                return res.data;
            })
        }


        return {
            getStations: getStations
        };


    }
    angular.module('monitoring')
        .factory('StationsFactory', StationsFactory);

})();
