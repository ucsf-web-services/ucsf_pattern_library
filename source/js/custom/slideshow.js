$(document).ready(function(){
  $('.slider').slick({
    // Settings
  });

  $('.slider-hero').slick({
    slide: '.hero',
    variableWidth: false,
    slidesToShow: 1,
    infinite: true,
    centerMode: false,
    arrows: true,
    dots: false,
    autoplay: false
  });

});
