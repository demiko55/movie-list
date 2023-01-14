var models = require('../models');

module.exports.movies = {
  get : function(req, res) {
    models.movies.getAll( data =>{
      res.json(data);
    });
  },
  post : function(req, res){
    console.log('req from server controller post', req.body);
    models.movies.create(req.body, function(){
      res.json(req.body);
    });
  }
}