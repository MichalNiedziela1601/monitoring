(function(){
    'use strict';
    function StationsFactory($http){

        function getStations(){
            return $http.get('/api/stations').then(function(res){
                console.log(res);
                return res.data;
            })
                    .catch(function(error){
                console.log(error);
            })
        }


        return {
            getStations: getStations
        };


    }
    angular.module('monitoring')
        .factory('StationsFactory', StationsFactory);

})();
