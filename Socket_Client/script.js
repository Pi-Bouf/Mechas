function Game() {

    var socket = io.connect('http://localhost:357');
    socket.emit('security', "Zorrooooo|111111");
    socket.emit("test", "ok");
    var player = document.getElementById("player1");
    var position = player.getBoundingClientRect();
    var x = position.left;
    var y = position.y;
}

function test() {
    console.log(x);
    socket.emit("position", "ok");
}