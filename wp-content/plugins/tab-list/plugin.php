<?php
/**
 * Plugin Name: Tab List
 * Author: Christoph Kleber
 * Version: 1.0.0
 */
  
function loadMyBlock() {
  wp_enqueue_script(
    'tab-list',
    plugin_dir_url(__FILE__) . 'tab-list.js',
    array('wp-blocks','wp-editor'),
    true
  );
}
   
add_action('enqueue_block_editor_assets', 'loadMyBlock');