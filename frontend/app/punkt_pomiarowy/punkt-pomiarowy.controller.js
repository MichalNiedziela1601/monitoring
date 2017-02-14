/**
 * Created by sunday on 2/14/17.
 */
(function(){
    'use strict';
    function PunktPomiarowyController(){
        var ctrl = this;
        ctrl.pomiar = 123;
    }
    angular.module('monitoring')
        .controller('PunktPomiarowyController', PunktPomiarowyController);


})();
