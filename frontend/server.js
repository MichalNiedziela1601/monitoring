'use strict';

const Hapi = require('hapi');
const config = require('./config');
const routes = require('./REST/routes');
const plugins = require('./plugins/plugins');

module.exports = function()
{
    const server = new Hapi.Server();
    server.connection({
        host: 'localhost', port: config.port
    });
    plugins(server);
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'frontend/app/',
                listing: false,
                index: true
            }
        }
    });
    server.ext('onPostHandler', (request, reply) => {
        console.log('WORD');
        const response = request.response;
        if (response.isBoom && response.output.statusCode === 404) {
            return reply.file('frontend/app/index.html');
        }
        return reply.continue();
    });

    routes(server);



    server.start((err) => {
        if(err) throw err;
        console.log('Server running at: ',server.info.uri);
    });
};
