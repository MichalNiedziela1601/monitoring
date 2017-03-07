'use script';
const stationsDAO = require('../dao/stations.dao');

function getStations(){
    return stationsDAO.getStations();
}

module.exports = {
    getStations
};
