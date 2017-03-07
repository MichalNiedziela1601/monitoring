/**
 * Created by sunday on 2/20/17.
 */
const Inert = require('inert');
module.exports = function(server){
    server.register(Inert, () => {})
};
