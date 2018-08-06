var express = require('express');
var router= express.Router();
var db = require('./databaseConnection');


router.post('/', function(req, response, next) {

    var message;

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Content-Type', 'application/json');
    
    var username = req.body.username;

    console.log(username);
      
    db.query('SELECT student_name,course_id,course_name,marks FROM students NATURAL JOIN enrollments NATURAL JOIN courses NATURAL JOIN marks WHERE student_id = ? ',[username],function(err,res,feilds){
        if(err)
            throw err;
        message={
            'success':true,
            'rollno':username,
            'studentName':res[0]['student_name'],
            'marks':res
        }
        console.log(res)
        response.send(message);
    }); 
      
   
    
});
  
module.exports = router;