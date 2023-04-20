<?php

/*
*
*
* Description: Admin search dashboard for WP Client reference
* Author: Roberto Cannella
*/


if(!defined('ABSPATH')) exit; //Exit if accessed directly

class AdminSearch{
    public function __construct()
    {
        add_action('admin_enqueue_scripts', [$this, 'adminAssets']);

    }
    function adminAssets(){
        global $pagenow;

        if ( $pagenow === 'admin.php' && isset( $_GET['page'] ) && $_GET['page'] === 'wpclientref_articles' ) {

            wp_enqueue_script('bkj-admin-search-js',plugin_dir_url(__FILE__) . 'build/index.js',['wp-element'],time());
            wp_enqueue_style('bkj-admin-search-styles', plugin_dir_url(__FILE__) . '/build/index.css',null,time());

        }
    }

}
$adminSearch = new AdminSearch();