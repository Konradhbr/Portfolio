"use strict";

new WOW().init(); // click in navbar elements--------------------------------

$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
}); // scroll navbar----------------------------------------

window.onscroll = function () {
  scrollNavbar();
};

function scrollNavbar() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("scrollNavbar").style.backgroundColor = "black";
    document.getElementById("scrollNavbar").style.transition = "0.6s";
  } else {
    document.getElementById("scrollNavbar").style.backgroundColor = "transparent";
  } //else {
  //     document.getElementById("scrollNavbar").style.top = "-50px";
  // }

}