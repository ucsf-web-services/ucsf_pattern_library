$(window).resize(function() {
  if( $(window).width() < 820 ) {
    $('.img-banner__right').insertBefore('.img-banner__left');
  }
  if( $(window).width() > 820 ) {
    $('.img-banner__left').insertBefore('.img-banner__right');
  }
});
