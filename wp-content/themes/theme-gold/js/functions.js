jQuery(document).ready(function ($) {
	headerScripts($);
	cookieLayer($);
});

function setHash(hash) {
	window.location.hash = hash;
}

function headerScripts($) {
	scrollHeader($);

	$(window).on("scroll", function () {
		scrollHeader($, this);
	});

	$(".main-navigation a").click(function () {
		$(".main-navigation").removeClass("toggled");
		$(".menu-toggle").attr("aria-expanded", "false");
		$(".main-navigation a").removeClass("focus");
		$(this).addClass("focus");
	});

	// Scroll Anchor Links
	$(document).on("click", 'a[href^="#"]:not(".nav-tab")', function (event) {
		event.preventDefault();
		const hash = $(this).prop("hash");
		$("html, body").animate(
			{
				scrollTop: $(jQuery.attr(this, "href")).offset().top,
			},
			800,
			function () {
				setHash(hash);
			}
		);
	});
}

function scrollHeader($, that) {
	if ($(that).scrollTop() > 50) {
		$(".main-navigation, .main").removeClass("header-big");
	} else {
		$(".main-navigation, .main").addClass("header-big");
	}
}


function cookieLayer($) {
	var acceptCookies = getCookie("acceptCookies");
	if (acceptCookies != "true") {
		$("#cookie-layer").show();
	}

	$("#accept-cookies").click(function () {
		setCookie("acceptCookies", true);
		$("#cookie-layer").hide();
	});
}

function setCookie(name, value) {
	var date = new Date();
	date.setTime(date.getTime() + 1000 * 3600);
	var expires = "expires=" + date.toUTCString();
	document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
	var name = name + "=";
	var allCookies = document.cookie.split(";");
	for (var i = 0; i < allCookies.length; i++) {
		var cookie = allCookies[i];
		while (cookie.charAt(0) == " ") {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) == 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}
	return "";
}
