$(function() {

    $('.burger-menu').click(function() {
        $(this).toggleClass('open');
        $('.burger-menu__links').toggleClass('opacity');
        $('.burger-menu__links').toggleClass('transform');
    });

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        cssEase: 'linear'
    });

     $('.slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        cssEase: 'linear'
    });

});
