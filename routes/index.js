var express = require('express');
var router = express.Router();
var connection = require('./databaseConnection');
var username;
var len;
/* GET home page. */
router.post('/', function(req, res, next) {
   username=req.body.username;
 
  connection.query('SELECT name FROM `students` where `rollno` = ? ',[username],function(err,res,fields)
    {
      if(err) throw err;
      len=res.Length;
    });
  if(len!='undefined')
   res.send(200,username);
  else
    res.send(500,'User Not Found');
  res.render('index', { title: 'Express' });
});

module.exports = router;
