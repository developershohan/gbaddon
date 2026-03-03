<?php


namespace Shohan\PluginAddon\App;

if (! defined("ABSPATH")) exit;

class BlockHandler
{
    use Traits\Singleton;
    public function init()
    {
        add_action('init', array($this, 'register_blocks'));
    }

    public function register_blocks()
    {
        $blocks = include PLUGIN_ADDON_PATH . 'blocks/build/blocks-manifest.php';

        foreach (array_keys($blocks) as $block_name) {
            register_block_type(PLUGIN_ADDON_PATH . 'blocks/build/' . $block_name);
        }
    }
}
