/**
 * Created by sunday on 2/20/17.
 */
var gd = require('node-gd');

module.exports = function(server){
    gd.createTrueColor(200,200, function(error, img) {
        if (error) throw error;
img.colorAllocate(255,255,255);
        var points = [
            { x: 100, y: 20 },
            { x: 170, y: 60 },
            { x: 170, y: 140},
            { x: 100, y: 180},
            { x: 30, y: 140},
            { x: 30, y: 60},
            { x: 100, y: 20},
        ];

        var round = [
            { x: 50, y: 50},
            { x: 150, y: 50},
            { x: 150, y: 150},
            { x: 50, y: 150},
        ];

        img.setThickness(4);
        img.polygon(points, 0xff0000);
        img.filledPolygon(round, 0xff0000);
        img.png('test1.png', 2);
        console.log('img', img);

        img.destroy();
    });



    server.route({
        method: 'GET',
        path: '/api/image',
        handler: function(req,reply){
            reply.file(__dirname+ '/test1.png');
        }
    })
}
