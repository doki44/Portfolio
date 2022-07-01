$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.top-btn').fadeIn();
        } else {
            $('.top-btn').fadeOut();
        }
    });
    $('.top-btn').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });

    $('.header__burger').on('click', function () {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});