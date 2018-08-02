var express = require('express');
var router = express.Router();
var db = require('./databaseConnection');

/* GET home page. */
router.post('/', function (req, response, next) {


  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Content-Type', 'application/json');

  var username;
  var role;
  var message;

  username = req.body.username;
  role = req.body.role;

  console.log(username + " " + role);

  function setResponse(res){
    if(res.length === 1)
        message={'success':true};
      else
        message={'success':false};
      
  }

  if (role === 'students') {

    db.query('SELECT name FROM `students` where `rollno` = ? ', [username], function (err, res, fields) {
      if(err)
        throw err;
      setResponse(res);
      response.send(message);
    });
  }
  else if (role === 'faculty') {
    db.query('SELECT faculty_name FROM `faculty` where `faculty_id` = ? ', [username], function (err, res, fields) {
      if(err)
        throw err;
      setResponse(res);
      response.send(message);
    });
  }
  
});

module.exports = router;