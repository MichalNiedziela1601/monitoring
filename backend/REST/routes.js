'use strict';

const mainEndpoint = require('./main.endpoint');

module.exports = function(server){
    mainEndpoint(server);
}
