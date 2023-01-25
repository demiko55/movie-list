var db = require('../db');

module.exports.movies = {
  getAll: function(callback) {
    const queryString = 'select * from movies';
    db.connection.query(queryString, function(err, results){
      if(err){
        throw 'query all movies from db error';
      }
      callback(results);
    });
  },
  //console log will not work inside of getAll or create, don't know why.
  create: function(movie, callback){
    // const queryString = 'insert into movies (title, isWatched) values ("'+movie.title+'", "'+movie.isWatched+'")';
    // db.connection.query(queryString, function(err, results){
    //   if(err){
    //     throw 'create movie in db error'
    //   }
    //   callback(results);
    // })
    var params = [movie.title, movie.isWatched];
    const queryString = 'insert into movies (title, isWatched) value (?, ?)';
    db.connection.query(queryString, params, function(err, results){
      if(err){
        throw 'create movie in db error';
      }
      callback(results);
    })
  }
}