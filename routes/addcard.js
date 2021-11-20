var express = require('express');
var router = express.Router();
//const monk = require('monk');
const { check, validationResult } = require('express-validator');

/*    monk connection to database ( mongo db) */

// const db = 'localhost:27018/card_db'; /*เชื่อมต่อฐานข้อมูลอ้างอิงชื่อฐานข้อมูล */
const db =require('monk')("localhost:27018/card_db")

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

router.post('/add',[
  check("name","You must have to enter name").not().isEmpty(),
  check("powerscore","Please Input Powerscore ").not().isEmpty(),
  check("cclass","Please Input a Class of monster").not().isEmpty()
], function(req, res, next) {
    const result = validationResult(req);
    var errors = result.errors;
    if(!result.isEmpty()) {
      // if error 
      // console.log(errors);
      // return res.status(422).json({ error: errors.array() });
      res.render('addcard',{errors:errors});
    }else{
      //insert to database (name of collection in db)
      var ct = db.get('card');
      ct.insert({
        cdname:req.body.name,
        ps:req.body.powerscore,
        cclass:req.body.cclass
      },function(err,addcard){
        if(err){
          res.send(err);
        }else{
          res.location('/addcard/add');
          res.redirect('/addcard/add');
        }
      });
    }


    // console.log(req.body.name);
    // console.log(req.body.powerscore);
    // console.log(req.body.cclass);
    
  });

  
  module.exports = router;
  