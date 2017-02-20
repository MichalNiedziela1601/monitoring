const goodPlugin = require('./good.plugin');
const corrsPlugin = require('./cors.plugin');
const inertPlugin = require('./inert.plugin');

module.exports = function(server){
    goodPlugin(server);
    corrsPlugin(server);
    inertPlugin(server);
};
