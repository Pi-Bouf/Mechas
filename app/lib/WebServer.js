var express = require('express');
var app = express();
var path = require('path');
var serveIndex = require('serve-index');
var UserRoutes = require('./UsersRoutes');

class WebServer {
    constructor(port) {
        app.listen(port);
        console.log("WebServer started !");

        this.initRoute();
    }

    initRoute() {
        app.use('/', express.static(path.join(__dirname, "../../public")));

        app.get('/user/list', (req, res) => {
            res.send(userList);
        });

        app.get('/user/:id', (req, res) => {
            res.send(req.params.id);
        });

        app.use('/steak', UserRoutes);
    }
}

module.exports = WebServer;