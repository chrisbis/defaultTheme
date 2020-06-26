jQuery(document).ready(function($) {
	headerScripts($);
	slick($);
});

function setHash(hash) {
	window.location.hash = hash;
}

function headerScripts($) {
	scrollHeader($);

	$(window).on('scroll', function () {
		scrollHeader($, this);
	});

	$('.main-navigation a').click(function() {
		$('.main-navigation a').removeClass('focus');
		$(this).addClass('focus');
	})

	// Scroll Anchor Links
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();
		const hash = $(this).prop('hash')
		$('html, body').animate({
			scrollTop: $(jQuery.attr(this, 'href')).offset().top,
		}, 800, function() {
			setHash(hash);
		});

	});
}

function scrollHeader($, that) {
	if ($(that).scrollTop() > 50) {
		$('.main-navigation, .main').removeClass('header-big');
	}
	else {
		$('.main-navigation, .main').addClass('header-big');
	}
}

function slick($) {
	$('.slider .blocks-gallery-grid').slick({
		dots: true,
		arrows: true
	  });
}

