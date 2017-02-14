var Custom = {
    register: function(server,options,next){
        next();
    }
};

Custom.register.attributes = {
    name: 'CustomPlugin',
    version: '1.0.0'
};

module.exports = function(server){
    server.register({
        register: Custom
    })
};
