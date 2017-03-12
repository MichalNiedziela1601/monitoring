'use strict';

const stationsEndpoint = require('./stations.endpoint.js');

module.exports = function(server){
    stationsEndpoint(server);
}
