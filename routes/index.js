var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req,res) {
  res.render('index');
});
 

router.get('/show',function(req,res){

  var Roll = req.query.roll
  var Name = req.query.NAME
  var Father = req.query.FATHER
  var gender = req.query.GENDER
  var P = parseInt( req.query.PHYSIC)   
  var C = parseInt( req.query.CHEMISTRY)
  var M = parseInt( req.query.MATH)
  var H = parseInt( req.query.HINDI)
  var E = parseInt( req.query.ENGLISH)

  var Total = P+C+M+H+E
  var Avg = parseInt((Total/500)*100)
  res.render('error',{ROLL:Roll,NAME:Name,FATHER:Father,G:gender,Phy:P,Che:C,MAT:M,Hin:H,Eng:E,TOTAL:Total,AVG:Avg})
})

module.exports = router;
