jQuery(document).ready(function($) {
	headerScripts($);
	slick($);
	cookieLayer($);
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

function cookieLayer($) {
	var acceptCookies = getCookie('acceptCookies');
	if (acceptCookies != 'true') {
		$('#cookie-layer').show()
	}

	$('#accept-cookies').click(function() {
		setCookie('acceptCookies', true);
		$('#cookie-layer').hide()
	})
}

function setCookie(name, value) {
	var date = new Date();
	date.setTime(date.getTime() + 1000 * 3600);
	var expires = 'expires=' + date.toUTCString();
	document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }
  
  function getCookie(name) {
	var name = name + '=';
	var allCookies = document.cookie.split(';');
	for(var i = 0; i < allCookies.length; i++) {
		var cookie = allCookies[i];
	  	while (cookie.charAt(0) == ' ') {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) == 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}
	return '';
  }
  