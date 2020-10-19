<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Theme_Gold
 */

?>

<footer id="colophon" class="site-footer">
	<div class="footer-menus">
		<div class="container">
			<div class="row">
				<div class="col-md-2 footer-menu menu-left">
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
				<div class="col-md-6 footer-menu menu-middle">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer',
							'menu_class'     => 'secondary-menu',
						)
					);
					?>
				</div>
				<div class="col-md-4 footer-menu menu-right">
					<a href="mailto:info@christophkleber.de">
						<i class="fa fa-envelope"></i>
						info@christophkleber.de
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="site-info">
		<div class="container">
			<div class="row">
				<div class="col-md-3">
					<i class="fa fa-copyright"></i>
					<?php
					printf(esc_html__(' 2020 Christoph Kleber', 'theme-gold'), '');
					?>
				</div>
			</div>
		</div>
	</div><!-- .site-info -->
</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>