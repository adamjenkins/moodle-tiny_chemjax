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
 * Tiny ChemJax UI: the dialog with a live renderer preview, and insert/edit.
 *
 * @module      tiny_chemjax/ui
 * @copyright   2018 Kenichi Miura, 2026 TinyMCE rewrite
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import ChemjaxModal from 'tiny_chemjax/modal';
import ModalEvents from 'core/modal_events';
import {getBondlen, getMathjaxUrl, getRendererUrl} from 'tiny_chemjax/options';
import {showHelp} from 'tiny_chemjax/helpmodal';

const DEBOUNCE_MS = 300;

/**
 * Open the ChemJax dialog for the current editor.
 *
 * @param {TinyMCE} editor
 */
export const handleAction = async(editor) => {
    const selected = editor.selection.getContent({format: 'text'});
    const isupdating = selected.includes('\\cjx');

    const modal = await ChemjaxModal.create({
        templateContext: {
            elementid: editor.id,
            source: isupdating ? selected : '',
            isupdating,
            rendererurl: getRendererUrl(editor),
        },
    });

    const rootJQ = await modal.getRoot();
    const root = rootJQ[0];
    const textarea = root.querySelector('.tiny_chemjax_source');
    const iframe = root.querySelector('.tiny_chemjax_preview');

    const send = () => {
        if (textarea.value.trim() !== '') {
            iframe.contentWindow.postMessage({type: 'chemjax-render', tex: textarea.value}, window.location.origin);
        }
    };

    iframe.addEventListener('load', () => {
        iframe.contentWindow.postMessage({
            type: 'chemjax-config',
            mathjaxurl: getMathjaxUrl(editor),
            bondlen: getBondlen(editor),
        }, window.location.origin);
        send();
    });

    let timer = null;
    textarea.addEventListener('input', () => {
        clearTimeout(timer);
        timer = setTimeout(send, DEBOUNCE_MS);
    });

    const onHeight = (e) => {
        if (e.origin === window.location.origin && e.source === iframe.contentWindow
                && e.data && e.data.type === 'chemjax-height') {
            iframe.style.height = Math.max(150, e.data.height + 16) + 'px';
        }
    };
    window.addEventListener('message', onHeight);

    // The dialog can close via Save, Cancel, the backdrop, or Escape - core/modal routes all of
    // those through modal:destroyed (removeOnClose is set in modal.js). Cleaning up there, rather
    // than only in the save handler below, avoids leaking the window message listener and pending
    // debounce timer across dialog opens regardless of how the user closed it.
    rootJQ.on(ModalEvents.destroyed, () => {
        clearTimeout(timer);
        window.removeEventListener('message', onHeight);
    });

    root.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="save"]')) {
            e.preventDefault();
            const tex = textarea.value.trim();
            if (tex !== '') {
                // Insert as plain text: encode entities so the notation survives as-is.
                editor.selection.setContent(editor.dom.encode(tex));
            }
            modal.destroy();
        } else if (e.target.closest('[data-action="help"]')) {
            e.preventDefault();
            showHelp();
        }
    });
};
