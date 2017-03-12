/**
 * Created by sunday on 2/14/17.
 */
(function(){
    'use strict';
    function MeasurePointController(){
        var ctrl = this;
        ctrl.pomiar = 123;
    }
    angular.module('monitoring')
        .controller('MeasurePointController', MeasurePointController);


})();
