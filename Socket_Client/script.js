window.onload = function () {

    var stateConnected = false;
    var socket = io.connect('http://localhost:357');

    socket.emit("@CO", "Pierre");
    socket.on('@CO', function(data) {
        if(data == "OK") {
            stateConnected = true;
            socket.emit("@SY", "request");
        } else {
            console.log("Bad username...");
        }
    });
    socket.on('@SY', function(data) {
        if(data == "OK-R")
        {
            socket.emit("@SY", "pull");
        }
        if(data == "OK-P")
        {
            socket.emit("@DL", "request");
        }
    })
}