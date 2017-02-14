'use strict';
module.exports =function(server){
    server.register({
        register: require('hapi-cors'),
        options: {
            origins: ['http://localhost:8081']
        }
    }, (error) =>{
        if(error){
            throw error;
        }
    });
};
