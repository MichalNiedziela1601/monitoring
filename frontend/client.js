var express = require('express');
var proxy = require('http-proxy-middleware');
var config = {
    backendUrl: process.env.PROXY || 'http://localhost:8080',
    port: process.env.PORT || 8081,
};
module.exports = function()
{
    const app = express();
    app.use('/api', proxy({target: config.backendUrl, changeOrigin: true}));
    app.use('/', express.static(__dirname + '/app'));

    app.get('*', function (req, res)
    {
        res.sendFile(__dirname + '/app/index.html');
    });

    app.listen(config.port);
    console.log('Server running at 8081');
};
