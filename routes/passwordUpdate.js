var express = require('express');
var router= express.Router();
var db = require('./databaseConnection');

router.post('/', function(req, response, next){
    
    var username = req.body.username;
    var oldPassword = req.body.oldPassword;
    var newPassword = req.body.newPassword;
    var role = req.body.role;
    var message;

    function checkOldPassword(results){
        if(results.password === oldPassword)
            return true;
        return false;
    }

    function checkAffectedRows(results){
        if(results.affectedRows === 1)
            return true;
        return false;
    }

    if(role === 'students'){
        db.query('SELECT password from `students` where rollno=?',[username],function(err,res,fields){

            if(err) 
                throw err;
            if(checkOldPassword(res)){
                db.query('UPDATE `students` SET `password`= ? WHERE `rollno`= ?',[newPassword,username],function(err,results,fields){
                    if(err) 
                        throw err;
                    if(checkAffectedRows(results))
                        message={'updated':true};
                    else
                        message={'updated':false};
                    
                });
            }else
                message={'oldPassword':false};
            response.send(message);
        });
    }else{
        db.query('SELECT password from `faculty` where staff_id=?',[username],function(err,res,fields){

            if(err) 
                throw err;
            if(checkOldPassword(res)){
                db.query('UPDATE `faculty` SET `password`= ? WHERE `rollno`= ?',[newPassword,username],function(err,results,fields){
                    if(err) 
                        throw err;
                    if(checkAffectedRows(results))
                        message={'updated':true};
                    else
                        message={'updated':false};
                    
                });
            }else
                message={'oldPassword':false};
            response.send(message);
        });
    }

    response.send(message);
    
});
        
module.exports = router;