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
 * Tiny ChemJax configuration.
 *
 * Places the registered button in the default "content" toolbar group and the
 * registered menu item in the "Insert" menu. Without this, editor_tiny's
 * getEditorConfiguration() never calls a configure() for this plugin, and the
 * button/menuitem - though registered with TinyMCE - would never be added to
 * any toolbar or menu string and so could never appear in the editor UI.
 *
 * @module      tiny_chemjax/configuration
 * @copyright   2018 Kenichi Miura, 2026 TinyMCE rewrite
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {buttonName} from 'tiny_chemjax/common';
import {addToolbarButtons} from 'editor_tiny/utils';

const configureMenu = (menu) => {
    if (menu.insert.items.match(buttonName)) {
        return menu;
    }

    menu.insert.items = `${buttonName} ${menu.insert.items}`;

    return menu;
};

export const configure = (instanceConfig) => {
    return {
        menu: configureMenu(instanceConfig.menu),
        toolbar: addToolbarButtons(instanceConfig.toolbar, 'content', [buttonName]),
    };
};
