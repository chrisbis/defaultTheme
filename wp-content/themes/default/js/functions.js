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

	$('.gallery-slider .blocks-gallery-grid').slick({
		arrows: true,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			  }
			},
			{
			  breakpoint: 567,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});

	$('.product-slider .blocks-gallery-grid').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
	});

	$('.product-slider-nav .blocks-gallery-grid').slick({
		slidesToShow: 4,
		asNavFor: '.product-slider .blocks-gallery-grid',
		focusOnSelect: true,
		dots: false,
		arrows: false,
	});
}

