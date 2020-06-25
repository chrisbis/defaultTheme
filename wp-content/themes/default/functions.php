<?php
/**
 * Petti_Cap functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Petti_Cap
 */

if ( ! defined( 'PETTI_CAP_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( 'PETTI_CAP_VERSION', '1.0.0' );
}

if ( ! function_exists( 'petti_cap_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function petti_cap_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Petti_Cap, use a find and replace
		 * to change 'petti-cap' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'petti-cap', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'petti-cap' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'petti_cap_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'petti_cap_setup' );

function all_enqueue_styles() {
	wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/vendor/bootstrap/css/bootstrap.min.css' );
	wp_enqueue_style( 'fontawesome', get_template_directory_uri() . '/vendor/fontawesome/css/all.min.css' );
	wp_enqueue_style( 'slick', get_template_directory_uri() . '/vendor/slick/slick.css' );
}
add_action( 'wp_enqueue_scripts', 'all_enqueue_styles');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function petti_cap_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'petti_cap_content_width', 640 );
}
add_action( 'after_setup_theme', 'petti_cap_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function petti_cap_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'petti-cap' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'petti-cap' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'petti_cap_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function petti_cap_scripts() {
	wp_enqueue_style( 'petti-cap-style', get_stylesheet_uri(), array(), PETTI_CAP_VERSION );
	wp_style_add_data( 'petti-cap-style', 'rtl', 'replace' );

	wp_enqueue_script( 'petti-cap-navigation', get_template_directory_uri() . '/js/navigation.js', array(), PETTI_CAP_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'petti_cap_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
	require get_template_directory() . '/inc/woocommerce.php';
}

function all_enqueue_scripts() {
	wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/vendor/bootstrap/js/bootstrap.bundle.min.js', array( 'jquery' ) );
	wp_enqueue_script( 'slick', get_template_directory_uri() . '/vendor/slick/slick.min.js', array( 'jquery' ) );
	wp_enqueue_script( 'functions', get_template_directory_uri() . '/js/dest/functions.min.js');
}
add_action( 'wp_enqueue_scripts', 'all_enqueue_scripts');

 
function register_footer_menu() {
    register_nav_menu( 'footer', __( 'footer', 'footer' ) );
}

function register_header_menu() {
	register_nav_menu( 'header', __( 'header', 'header' ) );
	register_nav_menu( 'header-not-front', __( 'header-not-front', 'header-not-front' ) );
}

add_action( 'after_setup_theme', 'register_footer_menu' );
add_action( 'after_setup_theme', 'register_header_menu' );
