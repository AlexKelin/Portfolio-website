(function($) {
  var $window = $(window),
    $body = $('body'),
    $nav = $('#nav'),
    $menuToggle = $('#menu-toggle');

  // Breakpoints.
  breakpoints({
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: [null, '736px'],
  });

  // Play initial animations on page load.
  $window.on('load', function() {
    window.setTimeout(function() {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Scrolly.
  $('#nav a, .scrolly').scrolly({
    speed: 1000,
    offset: function() {
      return $nav.height();
    },
  });

  // Menu toggle.
  $menuToggle.on('change', function() {
    $nav.toggleClass('open');
  });

  // Adjust dropdown width on mobile.
  function adjustDropdownWidth() {
    if (breakpoints.active('small')) {
      var windowWidth = $window.width();
      $nav.css('width', windowWidth + 'px');
    } else {
      $nav.css('width', '');
    }
  }

  // Initial adjustment on page load
  adjustDropdownWidth();

  // Adjust width on window resize
  $window.on('resize', function() {
    adjustDropdownWidth();
  });

})(jQuery);



