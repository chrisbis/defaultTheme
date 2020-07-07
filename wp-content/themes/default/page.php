<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Petti_Cap
 */

get_header();
?>

	<main id="primary" class="site-main main">
		<?php if (!is_page('datenschutz')) : ?>
			<div id="cookie-layer">
				<div class="text">
					Diese Seite verwendet Cookies, um Ihnen ein angenehmeres Surfen zu ermöglichen. Mehr Informationen dazu auf <a href="<?php $url = site_url( '/datenschutz/', 'https' ); echo $url?>">Datenschutz</a>.
					<button id="accept-cookies" class="button">Alles klar!</a>
				</div>
			</div>
		<?php endif; ?>
		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );
		endwhile; // End of the loop.
		?>
	</main><!-- #main -->

<?php
get_footer();
