$(function(){

    $(".header__slider").slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider__arrows slider__arrows-left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider__arrows slider__arrows-right" src="img/arrows-right.svg" alt="">',
        asNavFor: ".slider-dotshead",
    });

    $(".slider-dotshead").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: ".header__slider",
    });


    $(".serf-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider__arrows slider__arrows-left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider__arrows slider__arrows-right" src="img/arrows-right.svg" alt="">',
        asNavFor: ".slider-map",
    });


    $(".slider-map").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".serf-slider",
        focusOnSelect: true,
    })
});