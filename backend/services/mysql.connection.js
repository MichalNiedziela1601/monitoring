var DB = function ()
{
    this.pool = require('promise-mysql').createPool({
        host: '185.38.227.246',
        user: 'monitoring',
        password: 'mon!rop7A',
        database: 'ropczyce',
        multipleStatements: true
    });
};

DB.prototype.query = function(sql){
    return this.pool.getConnection().then( conn => {
        return conn.query(sql);
    })
            .catch(err => {
        console.log(err);
    })
};


module.exports = new DB();
