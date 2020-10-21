<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Theme_Gold
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="preload" href="/wp-content/themes/theme-gold/fonts/Karla-Bold.ttf" as="font" type="font/ttf" crossorigin="anonymous">
	<link rel="preload" href="/wp-content/themes/theme-gold/fonts/Lato-Light.ttf" as="font" type="font/ttf" crossorigin="anonymous">
	<link rel="preload" href="/wp-content/themes/theme-gold/fonts/Lato-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous">
	
	<meta property="og:image" content="<?php echo esc_url( home_url() ); ?>/wp-content/uploads/2020/10/favicon_large.png" />
	<meta property="og:description" content="Kompetenzen in der Webentwicklung seit 2015 - Breitgefächerte Erfahrungen in der Entwicklung, der Konzeption, dem Design und dem (agilen) Projektmanagement – Selbstständig oder im Team." />
	<meta property="og:title" content="Christoph Kleber -  Webentwicklung, Design & Konzeption" />
	<meta property="og:type" content="Website" />
	<meta property="og:url" content="<?php echo esc_url( home_url() ); ?>" />
	<meta property="og:site_name" content="Christoph Kleber" />

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'theme-gold'); ?></a>
		<header class="site-header header-big">
			<nav id="site-navigation" class="main-navigation">
				<div class="container">
					<div class="row">
						<div class="col col-6 col-xl-4 menu-row">
							<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false" title="<?php esc_html_e('Toggle Menu', 'theme-gold'); ?>">
								<div class="icon">
									<div class="line"></div>
									<div class="line"></div>
									<div class="line"></div>
								</label>
							</button>
							<div class="menu-wrapper">
								<?php
								if (is_front_page()) :
									wp_nav_menu(
										array(
											'theme_location' => 'header',
											'menu_class'     => 'primary-menu',
										)
									);
								else :
									wp_nav_menu(
										array(
											'theme_location' => 'header-not-front',
											'menu_class'     => 'primary-menu',
										)
									);
								endif;
								?>
							</div>
						</div>
						<div class="col col-5 col-xl-7">
							<div class="site-title">
								<a href="<?php echo esc_url( home_url( '/' ) ); ?>">k.</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
		<div class="header-image">
			<span class="container header-image-text">Webentwicklung aus Berlin.</span>
		</div>
		<div class="container">