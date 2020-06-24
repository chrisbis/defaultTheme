<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Petti_Cap
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="footer-menus">
			<div class="container">
				<div class="row">
						<div class="col-sm-4">
							<div class="footer-menu menu-left">
								<?php
								if ( is_front_page() ) :
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
						<div class="col-sm-4">
							<div class="footer-menu menu-middle">
								<?php
								wp_nav_menu(
									array(
										'theme_location' => 'footer',
										'menu_class'     => 'secondary-menu',
									)
								);
								?>	
							</div>	
						</div>
						<div class="col-sm-4">
							<div class="footer-menu menu-right">
								<a href="tel:+4915114217370">
									<i class="fa fa-phone"></i>
									+49 151 14217370
								</a>
								<br>
								<a href="mailto:anita.staab@petticap.com">
									<i class="fa fa-envelope"></i>
									anita.staab@petticap.com
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		<div class="site-info">
			<div class="container">		
				<i class="fa fa-copyright"></i>
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( ' 2020 by PettiCap', 'petti-cap' ), '' );
				?>
			</div>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
