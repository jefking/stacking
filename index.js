'use strict';

const express = require('express');

const config = require('./config');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

// ROOT
app.get('/', function (req, res) {
    res.render('index');
});

app.listen(config.Port);