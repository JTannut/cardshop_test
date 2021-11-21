var express = require('express');
var router = express.Router();



//// get data from database // 
const db =require('monk')("localhost:27018/card_db")


/* GET home page. */
router.get('/', function(req, res, next) {
  var carddata = db.get('card');

  res.render('index', { userName: carddata});
});








// var userData = db.get('card');
// router.get('/get',function(req,res,next){
//   var medialist = db.get('card');
//   var firstFoundItem = medialist;
//   medialist.find({}).then(function(foundItems){   // <- use promise or callback to get result
//    var firstFoundItem = JSON.stringify(foundItems);
//    let Adata = firstFoundItem.length;
//    for (let i = 0; i < Adata; i++) {
//     console.log(Adata[i]);
//     }
//   })
//   res.render('index', {Adata});
// });




// router.get('/get-data',function(req,res,next){
//   var resultArray = [];
//   mongo.connect("localhost:27018/card_db",function(err,db){
//     assert.equal(null,err);
//     var cursor = db.collection('user-data').find();
//     cursor.forEach(function(doc,err){
//       assert.equal(null,err);
//       resultArray.push(doc);
//     },function(){
//       db.close();
//       res.render('index',{ items: resultArray});
//     });
//   });
// });


module.exports = router;
