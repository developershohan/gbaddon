<?php
namespace Shohan\PluginAddon;
if (! defined("ABSPATH")) exit;

class PluginAddon
{
    use App\Traits\Singleton;
    public function init()
    {
        $this->define_constants();

        add_action('plugins_loaded', array($this, 'init_plugin'));
    }

    public function define_constants()
    {

        define('PLUGIN_ADDON_VERSION', '1.0.0');
        define('PLUGIN_ADDON_PATH', plugin_dir_path(__DIR__));
        define('PLUGIN_ADDON_URL', plugin_dir_url(__DIR__));
    }

    public function init_plugin()
    {
         $this->includes();
         $this->init_hooks();
    }

    public function includes(){
        \Shohan\PluginAddon\App\BlockHandler::instance()->init();
    }
    public function init_hooks(){
        load_plugin_textdomain( 'plugin-addon',false, PLUGIN_ADDON_PATH .'i18n/');
    }

}
