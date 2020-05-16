$(document).ready(function() {
    $('.popup-open').on('click', function() {
        $('.popup').fadeIn();
    });
    $('.popup-close').on('click', function() {
        $('.popup').fadeOut();
    });
});