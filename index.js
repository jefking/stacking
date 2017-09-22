'use strict';

const express = require('express');

const config;
config.Port = process.env.PORT || 3000;

//const app = express();
//app.set('view engine', 'ejs');
//app.use(express.static('public'));

var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Azure: 1!");

});

server.listen(config.Port);

console.log("Server running at http://localhost:%d", port);
