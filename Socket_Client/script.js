window.onload = function () {

    var socket = io.connect('http://localhost:357');

    socket.emit("User", "Pierre");
    socket.emit("Sync", "request");

    setTimeout(function () {
        socket.emit("Sync", "pull");
    }, 1500);

}