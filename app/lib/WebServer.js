var express = require('express');
var app = express();
var path = require('path');
var serveIndex = require('serve-index');

class WebServer {
    constructor(port) {
        app.listen(port);
        console.log("WebServer started !");

        this.initRoute();
    }

    initRoute() {
        app.use('/', express.static(path.join(__dirname, "../../public")));

        app.get('/user/list', (req, res) => {
            res.send(clientList);
        });
    }
}

module.exports = WebServer;