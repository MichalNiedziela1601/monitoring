'use script';
const stationsDAO = require('../dao/stations.dao');
const _ = require('lodash');
const Promise = require('bluebird');
function getStations(){
    return stationsDAO.getStations().then(result => {
        let stations = {
            wodne: [], opadowe: []
        };
        for (let obj of result[0]) {
            obj.obsadzona = 0;
            if (obj.typ === 1) {

                stations.wodne.push(obj)
            } else if (obj.typ === 2) {
                stations.opadowe.push(obj);
            }
        }
        if (result[1].length > 0) {
            for (let i = 0; i < stations.wodne.length; i++) {
                if (_.has(result[1][i], 'id_ppwr') && stations.wodne[i].id_ppwr === result[1][i]['id_ppwr']) {
                    stations.wodne[i].obsadzona = 1;
                }
            }
        }
        if (result[2].length > 0) {
            for (let i = 0; i < stations.opadowe.length; i++) {
                if (_.has(result[2][i], 'id_ppwr') && result[2][i].id_ppwr === stations.opadowe[i].id_ppwr) {

                    stations.opadowe[i].obsadzona = 1;
                }
            }
        }
        return Promise.resolve(stations);
    });
}

module.exports = {
    getStations
};
