var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* GET home page. */
router.post('/', function(req, res, next) {
  var con = mysql.createConnection(
    {
      host:"localhost",
      user:"root",
      password:"",
      database:"app"
    }
  );
  con.connect(function(err)
  {
    if (err) throw err;
    console.log("connected!");
  });
  
  
  
});

module.exports = router;
