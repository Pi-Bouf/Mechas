$(document).ready(function() {
    var socket = io('127.0.0.1:30005');
    socket.on('connect', function() {


        socket.on('user_list', function(data) {
            $('#preloader').fadeOut(300, function() {
                $(this).remove();
                $('#status').text("Veuillez choisir un utilisateur...");
            });
        });
    });
});