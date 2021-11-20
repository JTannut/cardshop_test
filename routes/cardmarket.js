var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('cardmarket', { title: 'welcome to marketplace' });
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

  
  module.exports = router;
  