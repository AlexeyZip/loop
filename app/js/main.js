$(function(){

    $('.menu-down').on('click', function(){
        $(this).toggleClass('active')
      });

    $('.header__slider-items').slick({
        arrows: false,
        dots: true,
        dotsClass: 'header-dots',
    });

    $('.menu-btn').on('click', function(){
        $('.menu-list').slideToggle();
    });
});