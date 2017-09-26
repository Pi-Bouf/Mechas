var express = require('express');
var app = express();
var path = require('path');
var serveIndex = require('serve-index');
var UserRoutes = require('./UserRoutes');

class WebServer {
    constructor(port) {
        app.listen(port);
        console.log("WebServer started !");

        this.initRoute();
    }

    initRoute() {
        app.use('/', express.static(path.join(__dirname, "../../public")));

        app.get('/user/list', (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(userList);
        });

        app.use('/user/', UserRoutes);
    }
}

module.exports = WebServer;