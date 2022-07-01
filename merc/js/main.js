$(function () {
    $('.about__top-slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                }
            }, 
        ]
    });
    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1060,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.header__burger').on('click', function () {
        $('.header__burger, .menu__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});