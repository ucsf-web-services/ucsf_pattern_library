$(document).ready(function() {
  // The amazing scrolling header
  var fixedNavigation = $("#header"); // Change to nav div
  // var fixedNavTop = $(".ucsf-top-header");
  var scrollingContent = $("#main-wrapper");
  var toggleNavClass = "page-scrolling"; // Change to class name
  var threshold = 98; // Change to pixels scrolled
  $("<div class='page-scrolling-space'></div>").insertAfter(fixedNavigation);
  $(window).scroll(function () {
      var distance = $(this).scrollTop();
      if (distance > threshold) { // If scrolled past threshold
          fixedNavigation.addClass(toggleNavClass); // Add class to nav
          // fixedNavTop.addClass(toggleNavClass)
          scrollingContent.addClass(toggleNavClass);
          $(".page-scrolling-space").show()
      } else { // If user scrolls back to top
          if (fixedNavigation.hasClass(toggleNavClass)) { // And if class has been added
              fixedNavigation.removeClass(toggleNavClass); // Remove it
              // fixedNavTop.removeClass(toggleNavClass);
              scrollingContent.removeClass(toggleNavClass)
              $(".page-scrolling-space").hide()
          }
      }
  });
});
