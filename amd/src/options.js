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
 * Options helper for Tiny ChemJax plugin.
 *
 * @module      tiny_chemjax/options
 * @copyright   2018 Kenichi Miura, 2026 TinyMCE rewrite
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {getPluginOptionName} from 'editor_tiny/options';
import {pluginName} from 'tiny_chemjax/common';

const rendererUrlName = getPluginOptionName(pluginName, 'rendererurl');
const mathjaxUrlName = getPluginOptionName(pluginName, 'mathjaxurl');
const bondlenName = getPluginOptionName(pluginName, 'bondlen');

/**
 * Register the options for the Tiny ChemJax plugin.
 *
 * @param {TinyMCE} editor
 */
export const register = (editor) => {
    const registerOption = editor.options.register;

    registerOption(rendererUrlName, {processor: 'string', "default": ''});
    registerOption(mathjaxUrlName, {processor: 'string', "default": ''});
    registerOption(bondlenName, {processor: 'number', "default": 20});
};

/**
 * Get the URL of the ChemJax renderer page, as configured server-side.
 *
 * @param {TinyMCE} editor
 * @returns {string}
 */
export const getRendererUrl = (editor) => editor.options.get(rendererUrlName);

/**
 * Get the URL of the MathJax library, as configured server-side.
 *
 * @param {TinyMCE} editor
 * @returns {string}
 */
export const getMathjaxUrl = (editor) => editor.options.get(mathjaxUrlName);

/**
 * Get the default chemfig bond length, as configured server-side.
 *
 * @param {TinyMCE} editor
 * @returns {number}
 */
export const getBondlen = (editor) => editor.options.get(bondlenName);
