"use strict";

jQuery(document).ready(function ($) {
  // Scroll Anchor Links
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    var hash = $(this).prop('hash');
    $('html, body').animate({
      scrollTop: $(jQuery.attr(this, 'href')).offset().top
    }, 800, function () {
      setHash(hash);
    });
  }); // Header

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.main-navigation').removeClass('header-big');
    } else {
      $('.main-navigation').addClass('header-big');
    }
  });
});

function setHash(hash) {
  window.location.hash = hash;
}