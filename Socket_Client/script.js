window.onload = function() {

    var socket = io.connect('http://localhost:357');

    var player = document.getElementById("player1");
    var position = player.getBoundingClientRect();
    var x = position.left;
    var y = position.top;

    player.onclick = function(e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;
    }

}