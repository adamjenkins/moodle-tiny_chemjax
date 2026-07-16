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

1. Place the plugin directory in `/lib/editor/tiny/plugins/chemjax` on your Moodle installation
2. Navigate to Site Administration > Plugins > Plugin Overview
3. The plugin should appear in the list for installation

## Usage

Once installed, users with the `tiny/chemjax:use` capability can access the ChemJax formula dialog through the TinyMCE editor.

## License

This plugin is licensed under the GPL v3 license.
