'use strict';

var express = require('express');

var config = require('./config');

var app = express();
app.set('view engine', 'ejs');

// HOME PAGE
app.get('/', function (req, res) {
    res.render('index');
});

// VIEW STACK
// app.get('/view/*', function (req, res) {
//     res.render('stack');
// });

app.listen(config.Port);