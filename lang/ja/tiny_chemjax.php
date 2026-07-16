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
 * Japanese language strings for ChemJax TinyMCE plugin.
 *
 * @package    tiny_chemjax
 * @copyright  2018 Kenichi Miura, 2026 TinyMCE rewrite
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

$string['chemjax:use'] = 'ChemJax 数式ダイアログの使用';
$string['dialogtitle'] = 'ChemJax 構造式';
$string['help_intro'] = 'ChemJax は、\cjx{...} コマンド内に書かれた chemfig 風の記法から化学構造式を描画します。';
$string['help_sec01_example'] = '\cjx{CH_3 -CH (#[2]CH_3) -CH_2 -C (=[:60]O) -[:-60]O -H}';
$string['help_sec01_title'] = '簡単な記述例';
$string['help_sec02_body'] = '<ul><li>必要なオプションまで指定すれば，その先は省略可能です。例えば，-[4,2] とすれば，角度と長さの倍率までを指定したことになります。途中のオプションを省略したい場合は，-[,,1,2] のように空のコンマを入れます。</li><li>結合の種類：単結合：- / 二重結合：= / 三重結合：#</li><li>改行：\\\\（例：\cjx{CH3 -CH} \\\\ \cjx{-CH_2 -C (=[:60]O) -[:-60]O -H}）</li></ul>';
$string['help_sec02_example'] = '-[angle, length ratio, from-atom number, to-atom number]';
$string['help_sec02_title'] = '結合のオプション';
$string['help_sec03_body'] = '<ul><li>45° の倍数による指定：90° であれば [2]</li><li>絶対角度による指定：90°であれば [:90]</li><li>相対角度による指定：30°であれば [::30]</li></ul>';
$string['help_sec03_example'] = '-[2]  -[:90]  -[::30]';
$string['help_sec03_title'] = '第1オプション：角度の指定';
$string['help_sec04_example'] = '\cjx{C -C -[::20]C -[::20]C -[::20]C}';
$string['help_sec04_title'] = '相対角度指定';
$string['help_sec05_example'] = '\cjx{CH_3 -[,2]CH (-[2,1.5]CH3) -CH2^2+ -C (=[:30]O) -[:-60]O -H}';
$string['help_sec05_title'] = '第2オプション：結合の長さ倍率';
$string['help_sec06_example'] = '\cjx{CH_3CH_2 -[:-90,,3]OH}';
$string['help_sec06_title'] = '第3，第4オプション：結合原子の指定';
$string['help_sec07_example'] = '\cjx{CH_3 -CH (-[2]CH (-CH3) -[2]CH3) -CH3}';
$string['help_sec07_title'] = '枝分かれの記述';
$string['help_sec08_example'] = '\cjx{-[:-30] -[::60] (=[2]O) -[::-60] =[::60] (-[::60]) -[::-60]}';
$string['help_sec08_title'] = '炭素原子の省略';
$string['help_sec09_example'] = '\cjx{H2C (-[-2,,2,2]H2C -[0]CH2 -[2]CH2) -CH2}';
$string['help_sec09_title'] = '環状構造の記述';
$string['help_sec10_body'] = 'デュワーベンゼンの例です。';
$string['help_sec10_example'] = '\cjx{C =[6]C -[::60]C -[::60]C =[::60]C -[::60]C (-[-2,2]\phantom{X}) -[::60]\phantom{X}}';
$string['help_sec10_title'] = '複数の環状構造を持つ分子';
$string['help_sec11_example'] = '\cjx{-[:-30] =[::60] -[::60] =[::60] -[::60] =[::60]}';
$string['help_sec11_title'] = '正多角形の環状構造を持つ分子';
$string['help_sec12_body'] = '上のベンゼンを -30°回転した例です。';
$string['help_sec12_example'] = '\cjx{-[:-30,0] -[::-30] =[::60] -[::60] =[::60] -[::60] =[::60]}';
$string['help_sec12_title'] = '全体の回転角の指定';
$string['helpbutton'] = '記法ヘルプ';
$string['helptitle'] = 'ChemJaxの書き方';
$string['insert'] = '挿入';
$string['notationlabel'] = 'ChemJax記法';
$string['pluginname'] = 'ChemJax';
$string['previewlabel'] = 'プレビュー';
$string['privacy:metadata'] = 'ChemJax TinyMCEプラグインは個人データを保存しません。';
$string['update'] = '更新';
