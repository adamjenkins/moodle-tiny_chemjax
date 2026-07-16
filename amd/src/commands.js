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
 * Tiny ChemJax commands.
 *
 * @module      tiny_chemjax/commands
 * @copyright   2018 Kenichi Miura, 2026 TinyMCE rewrite
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {getString} from 'core/str';
import {component, buttonName, icon} from 'tiny_chemjax/common';
import {handleAction} from 'tiny_chemjax/ui';

// Simple benzene-ring mark, drawn for this plugin (GPL, original work).
const ICON_SVG = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
    + '<polygon points="12,3 19.8,7.5 19.8,16.5 12,21 4.2,16.5 4.2,7.5" fill="none" stroke="currentColor" stroke-width="1.6"/>'
    + '<circle cx="12" cy="12" r="4.4" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>';

export const getSetup = async() => {
    const buttonText = await getString('dialogtitle', component);

    return (editor) => {
        editor.ui.registry.addIcon(icon, ICON_SVG);

        editor.ui.registry.addButton(buttonName, {
            icon,
            tooltip: buttonText,
            onAction: () => handleAction(editor),
        });

        editor.ui.registry.addMenuItem(buttonName, {
            icon,
            text: buttonText,
            onAction: () => handleAction(editor),
        });
    };
};
