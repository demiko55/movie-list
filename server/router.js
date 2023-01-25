var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/movies', controller.movies.get);
router.post('/movie', controller.movies.post);


// router.get('/users', controller.users.get);
// router.post('/users', controller.users.post);

router.get('/', (req, res)=>{
  res.send('movie list homepage');
})


module.exports = router;
