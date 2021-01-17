$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  // Toggle menu/navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // owl carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      800: {
        items: 2,
        nav: false,
      },
      1200: {
        items: 3,
        nav: false,
      },
    },
  });

  // Make img equal width and height
  var cw = $(".about .content .left img").width();
  $(".about .content .left img").css({ height: cw + "px" });
  $(window).resize(function () {
    var cw = $(".about .content .left img").width();
    $(".about .content .left img").css({ height: cw + "px" });
  });
});
