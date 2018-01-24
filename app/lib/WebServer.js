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
        app.use('/Musics', serveIndex(path.join(__dirname, "../../data/Musics"), {'icons': true}));
        app.get('/Musics/*.mp3', (req, res) => {
            res.download(path.join(__dirname, "../../data", decodeURIComponent(req.url)));
        });

        app.get('/user/list', (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(userList);
        });

        app.use('/user/', UserRoutes);
    }
}

module.exports = WebServer;