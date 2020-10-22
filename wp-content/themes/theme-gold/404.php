<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Theme_Gold
 */

get_header();
?>

	<main id="primary" class="site-main main header-big">

		<section class="error-404 not-found">

			<div class="page-content">
				<h1 class="entry-title"><?php esc_html_e( 'Seite nicht gefunden.', 'theme-gold' ); ?></h1>
				<p><?php esc_html_e( 'Leider wurde Ihre gewünschte Seite nicht gefunden. Sie gelangen über das Logo zurück zur Startseite.', 'theme-gold' ); ?></p>
		
			</div><!-- .page-content -->
		</section><!-- .error-404 -->

	</main><!-- #main -->
</div>
<?php
get_footer();
