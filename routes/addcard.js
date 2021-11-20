var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render("addcard");
  });
router.get('/add', function(req, res, next) {
    res.send('add card');
  });
router.get('/edit', function(req, res, next) {
    res.send('edit card');
  });
router.get('/delete', function(req, res, next) {
    res.send('delete card');
  });

router.post('/add', function(req, res, next) {
    console.log(req.body.name);
    console.log(req.body.powerscore);
    console.log(req.body.cclass);
    
  });

  
  module.exports = router;
  