
// Hide and show submenu
$('.header-menu--click-submenu .submenu__dropdown').find('a').each(function(index, domObject) {
  var $element = $(domObject);
  $element.on('click', function(index, value) {
    $element.parent().toggleClass('show');
  });
});
$('.header-menu--hover-submenu .submenu__dropdown .mobile-click').each(function(index, domObject) {
  var $element = $(domObject);
  console.log($element);
  $element.on('click', function(index, value) {
    $element.closest('li').toggleClass('show');
  });
});


$(document).ready(function(){
  if ($(".header__header-menu").length) {
    var $mobileSearch;
    var $mobileSocialMedia;
    var nav = responsiveNav(".header__header-menu .header-menu", { // Selector
      animate: false, // Boolean: Use CSS3 transitions, true or false
      transition: 200, // Integer: Speed of the transition, in milliseconds
      label: "", // String: Label for the navigation toggle
      insert: "before", // String: Insert the toggle before or after the navigation
      customToggle: "mobile-menu-toggle", // Selector: Specify the ID of a custom toggle
      closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
      openPos: "relative", // String: Position of the opened nav, relative or static
      navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
      navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
      jsClass: "js", // String: 'JS enabled' class which is added to  element
      init: function(){

      },
      open: function(){
        $(".header__header-menu .header-menu--wrapper > ul").stop().animate({
          left: '451px'
        }, 400, "linear");
        $("body").append('<div class="page-overlay"></div>');

        if($('.header__search .search-form').length) {
          $mobileSearch = $(".header__search .search-form").clone().show().attr('id', 'mobile-search-block');
          $mobileSearch.insertAfter('.header__header-menu .header-menu--wrapper  > ul > li.last');
        }
        if($('.header__social-media-search .header__social-media-links').length) {
          $mobileSocialMedia = $('.header__social-media-search .header__social-media-links').clone().show().attr('id', 'mobile-social-media');
          if($mobileSearch.length) {
            $mobileSocialMedia.insertAfter($mobileSearch);
          } else {
            $mobileSocialMedia.insertAfter('.header__header-menu .header-menu--wrapper  > ul > li.last');
          }
        }

      },
      close: function(){
        $(".header__header-menu .header-menu--wrapper > ul").stop().animate({
          left: '0px'
        }, 400, "linear");
        $('.page-overlay').remove();
        if($mobileSearch) {
          $mobileSearch.remove();
        }
        if($mobileSocialMedia) {
          $mobileSocialMedia.remove();
        }
      }
    });
    $('body').on('click', '.page-overlay', function(events) {
      $(this).remove();
      nav.close();
    });

    var timeoutNav;
    $(window).resize(function() {
      clearTimeout(timeoutNav);
      timeoutNav = setTimeout(function() {
        if($(window).width() > 768) {
          nav.close();
        }
      }, 20);
    });
  }


});
