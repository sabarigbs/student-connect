var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'app'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;

