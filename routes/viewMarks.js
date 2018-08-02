var express = require('express');
var router= express.Router();
var db = require('./databaseConnection');


router.post('/', function(req, response, next) {
    
    var username = req.body.username;
      
    db.query('',function(err,res,feilds){

    }); 
      
   
    
});
  
module.exports = router;