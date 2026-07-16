<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * TinyMCE ChemJax plugin info.
 *
 * @package    tiny_chemjax
 * @copyright  2018 Kenichi Miura, 2026 TinyMCE rewrite
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace tiny_chemjax;

use context;
use editor_tiny\editor;
use editor_tiny\plugin;
use editor_tiny\plugin_with_buttons;
use editor_tiny\plugin_with_configuration;
use editor_tiny\plugin_with_menuitems;

/**
 * TinyMCE ChemJax plugin info.
 *
 * @package    tiny_chemjax
 * @copyright  2018 Kenichi Miura, 2026 TinyMCE rewrite
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class plugininfo extends plugin implements plugin_with_buttons, plugin_with_configuration, plugin_with_menuitems {
    /**
     * Check if the plugin is enabled.
     *
     * @param context $context The context to check
     * @param array $options Plugin options
     * @param array $fpoptions Filemanager/picker options
     * @param editor|null $editor The editor instance
     * @return bool
     */
    #[\Override]
    public static function is_enabled(context $context, array $options, array $fpoptions, ?editor $editor = null): bool {
        return has_capability('tiny/chemjax:use', $context);
    }

    /**
     * Get the list of available buttons.
     *
     * @return array
     */
    #[\Override]
    public static function get_available_buttons(): array {
        return ['tiny_chemjax/tiny_chemjax'];
    }

    /**
     * Get the list of available menu items.
     *
     * @return array
     */
    #[\Override]
    public static function get_available_menuitems(): array {
        return ['tiny_chemjax/tiny_chemjax'];
    }

    /**
     * Get the plugin configuration for a context.
     *
     * @param context $context The context
     * @param array $options Plugin options
     * @param array $fpoptions Filemanager/picker options
     * @param editor|null $editor The editor instance
     * @return array
     */
    #[\Override]
    public static function get_plugin_configuration_for_context(
        context $context,
        array $options,
        array $fpoptions,
        ?editor $editor = null
    ): array {
        return [
            'bondlen' => (int)(get_config('filter_chemjax', 'bondlen') ?: \filter_chemjax\text_filter::DEFAULT_BONDLEN),
            'mathjaxurl' => get_config('filter_chemjax', 'mathjaxurl') ?: \filter_chemjax\text_filter::DEFAULT_MATHJAXURL,
            'rendererurl' => (new \moodle_url('/filter/chemjax/renderer.html'))->out(false),
        ];
    }
}
