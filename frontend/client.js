const express = require('express');
module.exports = function()
{
    const app = express();
    app.use('/', express.static(__dirname + '/app'));

    app.get('*', function (req, res)
    {
        res.sendFile(__dirname + '/app/index.html');
    });

    app.listen(8081);
    console.log('Server running at 8081');
};
