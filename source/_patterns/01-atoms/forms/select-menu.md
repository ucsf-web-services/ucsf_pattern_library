---
title: Select Menu
---

---
state: complete
---

### Description
This is a select menu.

### Usage
If you have a long list of options but a limited amount of space, a select menu is a good stylistic choice. Users can only select one item at a time, so it should only be used for questions that require a single answer. Text for each choice should be roughly the same length, and kept as short as possible.

### Accessibility Considerations
It is recommended that multiple select menus be avoided. Not all browsers provide intuitive keyboard navigation for multiple select menus. Many users do not know to use CTRL/Command or Shift + click to select multiple items. Typically, a set of check box options can provide similar, yet more accessible functionality. Please ensure accessibility by testing the whole page, including this element, in context.

* About Accessible Form Controls: http://webaim.org/techniques/forms/controls#select
* About form markup: https://www.w3schools.com/tags/tag_form.asp

### SEO Considerations
This section is left intentionally blank and is for future consideration.

### Technical Considerations
To implement the select menu, use the markup structure shown here, with the class select-style.

The Select Menu utilizes the jquery-ui.min.js library and is checked into GIT. The Js file can be found in the source/js/vendor-compiled/jquery-mui.min.js file. All compilation dependencies are listed in npm-shrinkwrap.json file.
