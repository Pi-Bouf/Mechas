var Client = require('../model/Client');

class SocketServer {
    constructor(port) {
        var socket = require('socket.io')(port);
        socket.on('connect', function(socketHandler) {
            new Client(socketHandler);
        });
        console.log("SocketServer started !");
    }
}

module.exports = SocketServer;