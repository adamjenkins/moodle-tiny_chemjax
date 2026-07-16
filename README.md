# ChemJax TinyMCE Plugin

A TinyMCE editor plugin for Moodle that provides a dialog for inserting ChemJax chemistry notation with live preview support.

## Features

- Insert chemistry notation using ChemJax syntax directly into text editors
- Live preview of rendered chemistry formulas
- Integration with the ChemJax filter for consistent rendering across Moodle

## Requirements

- Moodle 5.0 or later
- ChemJax filter plugin version 2.0.0 or later

## Installation

1. Place the plugin directory in `lib/editor/tiny/plugins/chemjax` of your Moodle installation (under the `public/` docroot on Moodle 5.x).
2. Visit Site administration > Notifications to complete the upgrade.
3. Navigate to Site Administration > Plugins > Plugin Overview to confirm ChemJax appears as installed.

## Usage

Once installed, users with the `tiny/chemjax:use` capability can access the ChemJax formula dialog through the TinyMCE editor.

## License

This plugin is licensed under the GPL v3 license.
