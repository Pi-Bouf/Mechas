$(document).ready(function () {
    setTimeout(() => {
        $('#loaderr').fadeOut(300, function () {
            $(this).remove();
        });
    }, 5000);
});