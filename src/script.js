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

  var cw = $(".about .content .left img").width();
  $(".about .content .left img").css({ height: cw + "px" });
  $(window).resize(function () {
    var cw = $(".about .content .left img").width();
    $(".about .content .left img").css({ height: cw + "px" });
  });
});
