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
 * Tiny ChemJax notation help dialog: a translated cheat-sheet of the ChemJax
 * notation, rendered from templates/help.mustache with all section strings
 * (titles, examples, and HTML-bearing bodies) resolved up front.
 *
 * @module      tiny_chemjax/helpmodal
 * @copyright   2018 Kenichi Miura, 2026 TinyMCE rewrite
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import Modal from 'core/modal';
import {getStrings} from 'core/str';
import Url from 'core/url';

// Section number -> notation-image mapping (pix/figN.png in this plugin). Sections without an
// illustrative image (02, 03) map to an empty string.
//
// Note: the template does *not* use the {{#pix}} mustache helper for these - Moodle's pix
// helper renders `<img class="icon">`, and Boost's CSS constrains `.icon` to ~16-20px, which
// makes these illustrative chemical-structure diagrams illegible. Image URLs are resolved here
// via core/url.imageUrl and rendered as plain <img> tags in help.mustache instead, so our own
// CSS class controls the size.
const SECTIONS = [
    {n: '01', img: 'fig1'}, {n: '02', img: ''}, {n: '03', img: ''},
    {n: '04', img: 'fig2'}, {n: '05', img: 'fig3'}, {n: '06', img: 'fig4'},
    {n: '07', img: 'fig5'}, {n: '08', img: 'fig6'}, {n: '09', img: 'fig7'},
    {n: '10', img: 'fig8'}, {n: '11', img: 'fig9x'}, {n: '12', img: 'fig10x'},
];
// Sections that have a body string (others render title + example only).
const HASBODY = new Set(['02', '03', '10', '12']);

class ChemjaxHelpModal extends Modal {
    static TYPE = 'tiny_chemjax/help';
    static TEMPLATE = 'tiny_chemjax/help';

    configure(modalConfig) {
        modalConfig.show = true;
        modalConfig.removeOnClose = true;
        modalConfig.large = true;
        super.configure(modalConfig);
    }
}
ChemjaxHelpModal.registerModalType();

/**
 * Open the ChemJax notation cheat-sheet modal.
 *
 * @returns {Promise<void>}
 */
export const showHelp = async() => {
    const requests = [];
    SECTIONS.forEach(({n}) => {
        requests.push({key: `help_sec${n}_title`, component: 'tiny_chemjax'});
        requests.push({key: `help_sec${n}_example`, component: 'tiny_chemjax'});
        if (HASBODY.has(n)) {
            requests.push({key: `help_sec${n}_body`, component: 'tiny_chemjax'});
        }
    });
    const strings = await getStrings(requests);
    let i = 0;
    const sections = SECTIONS.map(({n, img}) => {
        const title = strings[i++];
        const example = strings[i++];
        const body = HASBODY.has(n) ? strings[i++] : '';
        const imgurl = img ? Url.imageUrl(img, 'tiny_chemjax') : '';
        return {title, example, body, imgurl};
    });
    await ChemjaxHelpModal.create({templateContext: {sections}});
};
