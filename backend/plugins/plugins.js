const goodPlugin = require('./good.plugin');
const customPlugin = require('./custom.plugin');
const corrsPlugin = require('./cors.plugin');

module.exports = function(server){
    goodPlugin(server);
    customPlugin(server);
    corrsPlugin(server);
};
