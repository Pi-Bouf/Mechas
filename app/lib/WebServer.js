var express = require('express');
var app = express();
var path = require('path');

class WebServer {
    constructor(port) {
        app.listen(port);
        console.log("WebServer started !");

        this.initRoute();
    }

    initRoute() {
        app.get('/etage/:etagenum/chambre', function (req, res) {
            res.render('test.ejs', { etage: req.params.etagenum });
        });
    }
}

module.exports = WebServer;