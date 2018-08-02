var express = require('express');
var router = express.Router();
var db = require('./databaseConnection');


router.post('/',function(req,response,next){

  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Content-Type', 'application/json');

  var username = req.body.username;
  var password = req.body.password;
  var role = req.body.role;
  var message;
  console.log(username + " " + password + " " + role);

  function sendResponse(res){
    console.log(res.password);
    if(res.length === 1)
      if(password === res.password)
        message={'success':true};
      else
        message={'success':false};
    else
      message={'success':false};
    }

    if (role === 'students') {

      db.query('SELECT password FROM `students` WHERE rollno LIKE ? ', [username], function (err, res, fields) {
        if(err)
          throw err;
        sendResponse(res[0]);
        response.send(message);
      });
    }
    else if (role === 'faculty') {
      db.query('SELECT password FROM `faculty` where `faculty_id` LIKE ? ', [username], function (err, res, fields) {
        if(err)
          throw err;
        sendResponse(res);
        response.send(message);
      });
    }

});

module.exports = router;
