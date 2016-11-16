global.User = function(socket) {
    console.log(Write("Connexion from " + socket.handshake.address).yellow);
    socket.on('security', function(data) {
        data = data.split('|');
        this.name = data[0];
        this.email = data[1];
    });

    socket.on('test', function(data) {
        console.log("Son nom est: " + this.name);
    });
}