'use strict';
module.exports =function(server){
    server.register({
        register: require('hapi-cors')

    }, (error) =>{
        if(error){
            throw error;
        }
    });
};
