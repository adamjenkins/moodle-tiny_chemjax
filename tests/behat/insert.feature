@tiny @tiny_chemjax @editor_tiny @javascript
Feature: Insert ChemJax notation using the TinyMCE dialog
  In order to write chemistry formulas
  As a teacher
  I need to insert ChemJax notation from a dialog with a live preview

  Scenario: Insert notation into a page activity
    Given the following "courses" exist:
      | fullname | shortname |
      | ChemJax  | CJ102     |
    # contentformat 1 (FORMAT_HTML) is required: the page generator's default
    # (FORMAT_MOODLE) prevents TinyMCE from attaching to "Page content" at
    # all, so the dialog steps below would find no editor. Do not remove it.
    And the following "activities" exist:
      | activity | course | idnumber | name      | content | contentformat |
      | page     | CJ102  | p1       | Chem page | x       | 1             |
    And I log in as "admin"
    # A large window keeps the "Page content" field's editor on-screen on
    # load; TinyMCE defers initialising editors that are scrolled out of
    # view, and a small window would leave this one uninitialised (mirrors
    # core's editor_tiny/plugins/h5p behat coverage of the same edit form).
    And I change window size to "large"
    And I am on the "Chem page" "page activity editing" page
    When I click on the "ChemJax formula" button for the "Page content" TinyMCE editor
    And I set the field "ChemJax notation" to "\cjx{CH_3 -CH_3}"
    And I click on "Insert" "button" in the "ChemJax formula" "dialogue"
    And I click on "Save and display" "button"
    # filter_chemjax is active on the test site, so the saved page content is
    # passed through the filter on display. The filter wraps the notation in
    # a fallback span and loader.js (its AMD module) swaps that span for a
    # "filter-chemjax-frame" iframe almost immediately - well before MathJax
    # itself (loaded from the renderer iframe, cross-origin, CDN-backed) has
    # actually typeset anything. We only assert the notation made it into the
    # page via the filter's placeholder span in the DOM; we deliberately do
    # not wait for, or assert on, a completed render - that is filter_chemjax's
    # own render.feature's job. A DOM-presence check (rather than a visibility
    # check like "I should see") stays stable even if MathJax finishes fast
    # and the loader hides the fallback span mid-assertion.
    Then "//span[contains(@class, 'filter-chemjax-formula')]" "xpath_element" should exist

  Scenario: The help modal opens from the dialog
    Given I log in as "admin"
    And I open my profile in edit mode
    And I expand all toolbars for the "Description" TinyMCE editor
    When I click on the "ChemJax formula" button for the "Description" TinyMCE editor
    And I click on "Notation help" "button" in the "ChemJax formula" "dialogue"
    Then I should see "How to write ChemJax notation"
