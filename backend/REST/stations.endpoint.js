'use strict';
const stationsManager = require('../business/stations.manager');

module.exports = function (server)
{


    server.route({
        method: 'GET', path: '/api/stations',
        handler: function (req, res)
        {
            stationsManager.getStations().then((result) => {
                console.log(result);
                res(result);
            });

        }
    });
};
