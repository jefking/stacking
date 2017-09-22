'use strict';

const express = require('express');

const config = require('./config');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

// HOME PAGE
app.get('/', function (req, res) {
    res.render('index');
});

// VIEW STACK
// app.get('/view/*', function (req, res) {
//     res.render('stack');
// });

app.listen(config.Port);