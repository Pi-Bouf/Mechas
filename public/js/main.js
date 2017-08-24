$(document).ready(function () {
    setTimeout(() => {
        $('#preloader').fadeOut(300, function () {
            $(this).remove();
            $('#status').text("Veuillez choisir un utilisateur...");
        });
    }, 5000);
});