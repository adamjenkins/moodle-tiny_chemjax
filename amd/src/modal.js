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
 * ChemJax Modal for Tiny.
 *
 * @module      tiny_chemjax/modal
 * @copyright   2018 Kenichi Miura, 2026 TinyMCE rewrite
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import Modal from 'core/modal';

export default class ChemjaxModal extends Modal {
    static TYPE = 'tiny_chemjax/modal';
    static TEMPLATE = 'tiny_chemjax/modal';

    registerEventListeners() {
        super.registerEventListeners();

        this.registerCloseOnSave();
        this.registerCloseOnCancel();
    }

    configure(modalConfig) {
        modalConfig.show = true;
        modalConfig.removeOnClose = true;

        super.configure(modalConfig);
    }
}

ChemjaxModal.registerModalType();
