var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var exports = module.exports = {};
exports.connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'app'
});

exports.connection.connect(function(err) {
    if (err) throw err;
});

module.exports = exports;

