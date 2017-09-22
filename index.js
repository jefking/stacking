'use strict';

const express = require('express');
const config = require('./config');

var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

server.listen(config.Port);

console.log("Server running at http://localhost:%d", port);
