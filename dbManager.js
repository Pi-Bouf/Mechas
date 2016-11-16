var mysql = require('mysql');
global.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '111',
    database: 'mechas'
});