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

// Create STACK
app.get('/create', function (req, res) {
    res.render('create');
});

// View STACK
app.get('/view', function (req, res) {
    res.render('view');
});

app.listen(config.Port);