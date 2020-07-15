<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Petti_Cap
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'petti-cap'); ?></a>
		<header class="site-header header-big">
			<nav id="site-navigation" class="main-navigation">
				<div class="container">
					<div class="row">
						<div class="col col-5 col-sm-3 col-md-3">
							<div class="site-title">
								<?php
								the_custom_logo();
								?>
							</div>
						</div>
						<div class="col col-7 col-sm-9 col-md-9 menu-row">
							<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false" title="<?php esc_html_e('Toggle Menu', 'petti-cap'); ?>">
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
					</div>
				</div>
			</nav>
		</header>