var express = require('express');
var app = express();
var path = require('path');

class WebServer {
    constructor(port) {
        app.use('/', express.static(path.join(__dirname, '../../public')));
        app.listen(port);
        console.log("WebServer started !");
    }
}

module.exports = WebServer;