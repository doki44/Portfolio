$(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: '<button class="slider-btn slider-prev"><img src="../images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slider-btn slider-next"><img src="../images/arrow-right.svg" alt=""></button>',
    });
    $('.header__burger').on('click', function () {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
