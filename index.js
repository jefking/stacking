'use strict';

const express = require('express');

const config = require('./config');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Azure: 4!");

});

server.listen(config.Port);