'use strict';

const stationsEndpoint = require('./stations.endpoint.js');
const przekrojEndpoint = require('./przekroj.endpoint');

module.exports = function(server){
    stationsEndpoint(server);
    // przekrojEndpoint(server);
}
