var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var username;
var len;
/* GET home page. */
router.post('/', function(req, response, next) {
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
  
  username=req.body.username;
  //res.render('index', { title: 'Express' });
  con.query('SELECT name FROM `students` where `rollno` = ? ',[username],function(err,res,fields)
  {
    if(err) throw err;
    len=res.Length;
  });
  if(len!='undefined')
   response.send(200,username);
  else
    response.send(500,'User Not Found');
  
});

module.exports = router;