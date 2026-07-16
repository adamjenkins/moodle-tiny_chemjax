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
 * English language strings for ChemJax TinyMCE plugin.
 *
 * @package    tiny_chemjax
 * @copyright  2018 Kenichi Miura, 2026 TinyMCE rewrite
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

$string['chemjax:use'] = 'Use the ChemJax formula dialog';
$string['dialogtitle'] = 'ChemJax formula';
$string['help_intro'] = 'ChemJax draws chemical structural formulas from a chemfig-like notation written inside a \\cjx{...} command.';
$string['help_sec01_example'] = '\cjx{CH_3 -CH (#[2]CH_3) -CH_2 -C (=[:60]O) -[:-60]O -H}';
$string['help_sec01_title'] = 'A simple example';
$string['help_sec02_body'] = '<ul><li>Options may be omitted from the right: -[4,2] sets angle and length ratio only. Use empty commas to skip earlier options, e.g. -[,,1,2].</li><li>Bond types: single "-", double "=", triple "#".</li><li>Line break between formulas: \\\\ (e.g. \cjx{CH3 -CH} \\\\ \cjx{-CH_2 -OH}).</li></ul>';
$string['help_sec02_example'] = '-[angle, length ratio, from-atom number, to-atom number]';
$string['help_sec02_title'] = 'Bond options';
$string['help_sec03_body'] = '<ul><li>Multiples of 45°: [2] means 90°.</li><li>Absolute angle: [:90].</li><li>Relative angle: [::30].</li></ul>';
$string['help_sec03_example'] = '-[2]  -[:90]  -[::30]';
$string['help_sec03_title'] = 'Option 1: bond angle';
$string['help_sec04_example'] = '\cjx{C -C -[::20]C -[::20]C -[::20]C}';
$string['help_sec04_title'] = 'Relative angles';
$string['help_sec05_example'] = '\cjx{CH_3 -[,2]CH (-[2,1.5]CH3) -CH2^2+ -C (=[:30]O) -[:-60]O -H}';
$string['help_sec05_title'] = 'Option 2: bond length ratio';
$string['help_sec06_example'] = '\cjx{CH_3CH_2 -[:-90,,3]OH}';
$string['help_sec06_title'] = 'Options 3 and 4: bonded atom numbers';
$string['help_sec07_example'] = '\cjx{CH_3 -CH (-[2]CH (-CH3) -[2]CH3) -CH3}';
$string['help_sec07_title'] = 'Branches: (...)';
$string['help_sec08_example'] = '\cjx{-[:-30] -[::60] (=[2]O) -[::-60] =[::60] (-[::60]) -[::-60]}';
$string['help_sec08_title'] = 'Omitting carbon atoms';
$string['help_sec09_example'] = '\cjx{H2C (-[-2,,2,2]H2C -[0]CH2 -[2]CH2) -CH2}';
$string['help_sec09_title'] = 'Ring structures';
$string['help_sec10_body'] = 'Dewar benzene example.';
$string['help_sec10_example'] = '\cjx{C =[6]C -[::60]C -[::60]C =[::60]C -[::60]C (-[-2,2]\phantom{X}) -[::60]\phantom{X}}';
$string['help_sec10_title'] = 'Molecules with several rings';
$string['help_sec11_example'] = '\cjx{-[:-30] =[::60] -[::60] =[::60] -[::60] =[::60]}';
$string['help_sec11_title'] = 'Regular-polygon rings';
$string['help_sec12_body'] = 'The benzene above rotated by -30°. Set the second option of the first bond to 0 to make it a rotation anchor.';
$string['help_sec12_example'] = '\cjx{-[:-30,0] -[::-30] =[::60] -[::60] =[::60] -[::60] =[::60]}';
$string['help_sec12_title'] = 'Rotating the whole structure';
$string['helpbutton'] = 'Notation help';
$string['helptitle'] = 'How to write ChemJax notation';
$string['insert'] = 'Insert';
$string['notationlabel'] = 'ChemJax notation';
$string['pluginname'] = 'ChemJax';
$string['previewlabel'] = 'Preview';
$string['privacy:metadata'] = 'The ChemJax TinyMCE plugin does not store any personal data.';
$string['update'] = 'Update';
