var express = require('express');
var mysql = require('mysql');
var router= express.Router();
var username;
var password;
var message;

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
    
    console.log(req.body);
    username = req.body.username;
    password = req.body.password;
   // result.render('index', { title: 'Express' });
    con.query('UPDATE `students` SET `password`= ? WHERE `rollno`= ?',[password , username],function(err,results)
    {
      if(err) throw err;
      if(results.affectedRows==1)
        message={
            affectedRows:"1"
        };
        else
            message={
                affectedRows:"0"
            }
        
      //message = results.affectedRows
    response.send(200,message);
     });
    
  });
  
  module.exports = router;