var mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',//if host can also be localhost here
  user: 'root',
  password: '',
  database: 'movielist'
})

exports.connection = connection;
//we can also use module.exports = connection here, then do var db = require('../db'); can simply use db.query(), no need to use db.connection.query();