const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '185.38.227.246',
    user: 'monitoring',
    password: 'mon!rop7A',
    database: 'ropczyce',
    multipleStatements: true
});

module.exports = connection;
