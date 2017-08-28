# UCSF Pattern Library 
Github repo source: ucsf_pattern_library_php
Github repo public: ucsf_pattern_library_package_php

This Pattern Library, built on Pattern Lab - PHP + Twig version, has been created by the UCSF University Relations department for the following audiences and purposes.

* Site owners/builders using UCSF StarterKit version 3 / SiteBuilder
* Developers creating applications outside of the UCSF Drupal ecosystem
* Developers applying and extending brand standards within the UCSF Drupal ecosystem, but not within the SiteBuilder environments

## Site owners using StarterKit version 3 / SiteBuilder

For this user group, use the pages and templates as examples of how to place your site's building blocks in a way that has been designed and tested for the best usability and the most consistent UCSF look and feel.

**Assumptions**
1. The Pattern Library has been generated with only one of the Primary + Secondary color sets.
1. The library includes some features and improvements not yet applied to the StarterKit v.3 / SiteBuilder in Drupal. Samples include: footer styling, location styling, improved accessible form element styling, tabular syling, and changes in H1 wieghts (200 vs. 300)
1. Templates (basic structure) have been built out, but some sample Pages (Templates with real-like data) have yet to be built.

## Developers creating applications outside of the UCSF Drupal ecosystems

For this group of users, use the CSS, the SASS, JS, HTML and supporting grid system to create a branded, mobile responsive tool within your custom system. This may include: basic HTML pages, PHP/Symfony/Twig applications, Drupal themes, and Java / JSP applications.

Some basic use cases are covered here, but this Pattern Library is intended to provide guidance about site layouts (like for the Site Owners), the base CSS, JS, and HTML framework to just "use", or the base building blocks to apply to your richer development environment and extend as needed.

### Use case 1: Basic HTML or PHP site - no additional CSS changes

1. Download the package
1. Add the following asset directories: 

* CSS
* JS
* Fonts
* Images (just double check)

/public/css/style.css
/public/css/vendor/*.css
/public/js/script.js (already minified)

/public/js/custom/ (these are included in script.js)
/public/js/vendor/ (these are included in script.js)
/public/js/vendor-compiled (these are included in script.js)

/fonts/

3. Add the CSS and supporting JS to your html head

Chris - sample.html Make a snippet of this.

4. Use the page samples, page templates, and component HTML as samples for your code. Cut and paste into your HTML pages as needed.

5. Update the HTML content as required by your business. Be sure to address each HTML item's complete metadata for proper SEO and accessibility support.

### Use case 2: Using PHP, Java, or another dynamic language

1. download the assets
2. Add to the HTML headers (as you would in your template system)
3. Use the component sample HTML to get the markup required for list and programmatically created output. 


#### Leveraging the Pattern Lab Twig templates.

You may consider leveraging the Twig templates in Pattern Lab. There are many considerations with this approach. Assume the Twig templates driving the Pattern Library as an _example only_ and do not explicitly copy and expect them to work.

**Why not directly copy or include the Twig templates?**

1. The version of Twig used directly impacts the functionality of the Twig template code.
1. Twig.js (Node.js), Twig (for PHP), Twig (for Drupal), and jTwig (for Java) all have different levels of support for Twig syntax and functions. We ran into these differences and limitations in the creation of the Pattern Library.
1. The Pattern Lab / Pattern Library Twig templates includes variables and logic required to display various versions of elements and are influenced by the JSON data files.
1. The Pattern Lab / Pattern Library Twig templates have been created to nest (create once, leverage everywhere) by being included in Twig blocks. This, for some reasons, may not be the best for your custom tool development _or_ may require a different level of block inclusion.
1. You may need to add different logic to support your custom tool's needs at the display layer. 

An example of a PHP file, with a couple of Twig templates is included [here][/source/examples/php/README.md]. Note: this requires a composer install to make sure a compatible version of Twig is used. 

Note: There may be some differences of logic due to the pattern lab elements and a direct copy or import of the Pattern Lab twig is not recommended due to the constrains of the Pattern Lab system and the version of Twig supported by Pattern Lab and the custom PHP solution being created.

Recommendation is to look at them and use them as a sample.

### Use case 3: Using Pattern Library to Inform Drupal work

Assumptions: Don't remove stuff, add yours in your own area. Extend, don't hack core.

Known limitations and constraints.
Known tools:
	Drupal 7
	Drupal 8

## Developer Section

### Assumptions and Findings

### How is the Pattern Lab, Twig, and JSON configured?

### What happens if the Pattern Library is updated?
1. Get some notification
2. Download the recent package site
3. Code compare (checked for hacked core) and confirm that no changes were made to your local version of the SASS / CSS
4. Test the site!

### How-to: Extending CSS & Adding your own partials

Assumptions: 
* Don't hack Pattern Lab core.
* Don't remove or change, just add yours in your own area.
* Use your own SASS compiler scripts, not the Pattern Lab ones, although they can copy from the sample if they need a start.
* Keep the custom folder somewhere else, use gulp to put it in the right place.

1. Copy the /public/sass /public and JS source directories to your code base
2. Create a /sass/scss/custom folder.
3. Add your own styles, they are already mapped in the style.scss import rules

Chris - add an empty custom folder and add it to the style.scss in the pattern source. Sample.scss Add two rules? one sass in a base folder, one in one level deep, one in a sub-dir. it is ok if there is only one subdir.

# Developers applying and extending brand standards within the UCSF Drupal ecosystem, but not within the SiteBuilder environment

