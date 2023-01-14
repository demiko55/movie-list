var mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',//if host can also be localhost here
  user: 'root',
  password: '',
  database: 'movielist'
})

exports.connection = connection;