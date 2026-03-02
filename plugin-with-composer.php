<?php
/*
Plugin Name: Plugin with Composer
Description: A plugin that uses Composer for dependency management.
Version: 1.0.0
Author: Your Name
*/
namespace Shohan\PluginAddon;

if ( ! defined("ABSPATH") ) exit;

if ( ! class_exists(PluginAddon::class) && is_readable(__DIR__ . '/vendor/autoload.php') ) {
    require_once __DIR__ . '/vendor/autoload.php';
}


if ( class_exists(PluginAddon::class) ) {
    PluginAddon::instance()->init();
}