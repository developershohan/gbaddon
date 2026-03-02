<?php 
namespace Shohan\PluginAddon\App\Traits;
if (!defined("ABSPATH")) {
    exit;
}

trait Singleton{
    private static $instance;

    public static function instance(){
        if ( ! isset( self::$instance ) ) {
            self::$instance = new self();
        }
        return self::$instance;
    }
}