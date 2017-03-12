(function(){
    'use strict';
    
    function PunktWodny($http){
        this.getTable = function (prze) {
            return $http.get('services/php/tabele2.php', {params: {prze: prze}})
            .then(function (response) {
                return response.data;
            })
        };

        this.getTableWithDate = function(prze, year,month,day,hour,minutes){
            return $http.get('services/php/tabele2.php', {
                params: {
                    prze: prze,
                    rok: year,
                    miesiac: month,
                    dzien: day,
                    godzina: hour,
                    minuta: minutes
                }
            }).then(function(response){
                return response.data;
            })
        };
    }
    angular.module('monitoring')
        .service('PunktWodny',['$http',PunktWodny ]);
    
    
    
})();
