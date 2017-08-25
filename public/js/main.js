$(document).ready(function () {
    setTimeout(() => {
        $('#loader').fadeOut(300, function () {
            $(this).remove();
        });
    }, 5000);
});