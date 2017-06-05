
// Hide and show submenu
$('.submenu__dropdown').find('a').each(function(index, domObject) {
  var $element = $(domObject);
  $element.on('click', function(index, value) {
    $element.parent().toggleClass('show');
  });
});

// Hide and show menu

$('.toggle-menu').on('click', function() {
  $('.header-menu').toggleClass('open');
  $('.toggle-menu').toggleClass('close');
});