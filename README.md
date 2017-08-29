# UCSF Pattern Library 

* Github repo source: ucsf_pattern_library_php
* Github repo public: ucsf_pattern_library_package_php

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

In all cases of Pattern Library application, these assumptions apply:
* Don't remove Pattern Library and Pattern Lab information
* Add your customizations in your own specified "custom" directories.
* Simply, extend the library, don't hack it.

### Use case 1: Basic HTML or PHP site - no additional CSS changes

1. Download the Pattern Library package (not the source repo)
1. Add the supporting asset directories to your site. They contain the compiled assets needed to have a basic HTML site "just work" within the framework.
1. Add the CSS and supporting assets JS to your html head, as provided in the example HTML file.
1. Use the page samples, page templates, and component HTML as samples for your code. Cut and paste into your HTML pages as needed.
1. Update the HTML content as required by your business. Be sure to address each HTML item's complete metadata for proper SEO and accessibility support.

**Supporting asset directories:**

* CSS /public/css/*
* JS /public/js/*
* Fonts /public/fonts/*

**HTML Page Sample**

See the HTML Page sample in /public/examples/HTML/index.html (in the package repo) or /source/examples/HTML/index.html (in the source repo).

### Use case 2: Using PHP, Java, or another language for dynamic markup

1. Read the Basic HTML Use Case instructions
1. Download the supporting assets listed in the Basic HTML use case
1. Include the supporting assets in whatever method that produces the HTML headers required by your dynamic templating system
1. Use the sample HTML to get the markup required for the programmatically created output. For each component and template, view the pattern info in the settings cog.
1. Also take a look at the Twig templates and JSON data files in the relative pattern source directories: /source/_patterns/[atomic-level]/[component]/[component].twig (in the source repo).

#### Leveraging the Pattern Lab Twig templates

You may consider leveraging the Twig templates in Pattern Lab. There are many considerations with this approach. 

**Directly leveraging the Pattern Lab Twig templates is not advised.**

Assume the Twig templates driving the Pattern Library as an _example only_ and do not explicitly copy and expect them to work.

**Why not directly copy or include the Twig templates?**

1. The version of Twig used directly impacts the functionality of the Twig template code.
1. Twig.js (Node.js), Twig (for PHP), Twig (for Drupal), and jTwig (for Java) all have different levels of support for Twig syntax and functions. We ran into these differences and limitations in the creation of the Pattern Library and using Twig.js and the different affect the PHP version has on Twig support.
1. The Pattern Lab / Pattern Library Twig templates includes variables and logic required to display various versions of elements and are influenced by the JSON data files. These variables may not exactly match what your custom solution needs.
1. The Pattern Lab / Pattern Library Twig templates have been created to nest (create once, leverage everywhere) by being included in Twig blocks. This, for some reasons, may not be the best for your custom tool development _or_ your application may require a different type or level of Twig block inclusion.
1. You may need to add different logic to support your custom tool's needs at the display layer. 

An example of a PHP file, with a couple of Twig templates is included and /public/examples/php/README.md (in package repo) and /source/examples/php/README.md (in source repo). Note: this example requires a Composer install to use and to ensure _a compatible version of Twig_ is used. Read the README.md for more information.

### Use case 3: Using Pattern Library to Inform Drupal work

This section is for developers applying and extending brand standards within the UCSF Drupal ecosystem, but not within the SiteBuilder environment. This may be either Drupal 7 or Drupal 8.

**Known limitations and constraints.**

* Drupal core, for both versions, require a specific minimal version of PHP to run.
* Drupal 7 has a specific theme to implement Twig. https://www.drupal.org/project/tfd7 and says to download Twig version 1.0 from Github. The development team working with Pattern Lab had many issues with Twig version 1.0 (the base of Twig.js) inlcuding the lack of support for some basic Twig logic. This was a blocking issue which made the team use Pattern Lab for PHP for the UCSF project.
* Drupal 8 also leverages version 1.x of Twig in core, with plans to upgrade to version 2.x in 8.4 (slated for end of calendar year 2017). Version 2 also depends on PHP version 7.
* Both versions of Drupal require special syntax to call the CMS field variables for the data insert within the Twig template.

The following Drupal 8 themes and other tools were reviewed in the making of this project:

* Pattern Lab Starter (Phase 2) https://github.com/phase2/pattern-lab-starter
* Emulsify (Four Kitchens) http://emulsify.info/
* UC Davis Pattern Library (Pattern Lab v 1 with Mustache markup)

If you wanted to include the Pattern Lab Twig Library within your Drupal docroot, consider the use of Component Libraries module: https://www.drupal.org/project/components although it will not have the CMS data fields required for data display.

Including the Pattern Lab source Twig is not recommended. This library was built to be stand-alone, but with Drupal 8 in mind. Drupal 8 can extend the structure and the layouts, but it is completely informed by the CMS Site Building architecture being used. The CMS architecture for Drupal 8 had not yet been defined for the UCSF or UC Drupal 8 template at the creation of this library. 

The Drupal 7 SiteBuilder doesn't always use explicit field templates for the layouts, but it uses an extension to the WYSIWYG editor and one big body field vs. well defined data structures to leverage the pattern library templates.

## Developer Section

### Assumptions and Findings

* This section is written for developers who are versed in Front-End development, Front-End development operations, Gulp, NPM, and SASS.
* Custom application and use of the Pattern Lab / Library source will differ for each project. 
* Exhaustive step-by-step instructions are almost impossible to predict. This documentation will point you in the right direction. Use this information, in addition to industry standard Front-end development tool documentation and best practices.

### How are Twig and JSON configured in the Pattern Lab?

The UCSF patterns needed to expose many variations of a specific element or a group of elements within specific context, such as with or without a sidebar, in a list, or as spotlighted material (e.g., latest news). These variants are coded within the Twig files and driven by JSON data.

*Twig files*

* See the Pattern Lab documentation for basic Twig assumptions. http://patternlab.io/docs/
* There are some neat things happening in the Twig files.
* See how the templates are nesting components across the atomic structures.
* Templates take a variable from JSON to display "active page" (e.g., pagination)
* Templates take a variable from JSON to display or not display sidebars, this informs nested patterns on how they should render content (display 3 news articles vs. four)
* Templates will iterate on links from JSON
* Layouts are extended and embedded where suitable (e.g., additional logic needed to drive multiple business cases)
* Macros were used for common content

*JSON files*

* Core JSON file is in /source/_data/data.json 
* Patterns can override the core data file in the pattern directory (e.g., /_patterns/05-pages/homepage/homepage--hero-1.json). These local patterns are NOT inherited (Sidecar JSON files) by other templates including the pattern. Only data in the _data/data.json is available everywhere.
* See known issues with JSON data files in /source/_data/README.md

### How do I Extend SASS/CSS and JS?

Often custom development will require addition of more SASS/CSS through SASS partials and require a recompilation of the front-end SASS and Javascript. You may also need to redefine some values set in the core Pattern Library, like the primary and secondary color. 

A "custom" directory namespace has been reserved for SASS partials and custom JS to keep custom code directories separate from the rest of the Pattern Library. Your developers may also keep these custom directories completely outside of the Pattern Library source SASS and JS by updating their Gulp config.

**Assumptions:** 

* Really try not to hack the Pattern Library core. 
* You can update the primary and secondary color variables within your custom SCSS partials (they are set as default in the SASS).
* Don't remove or change the pattern's SASS/CSS and JS, just add your code in the "custom" directories (see below).
* Use your own SASS/JS compiler scripts, not the Pattern Lab ones. You may consider reviewing and/or copying some of the scripts from the Pattern Lab source to ensure all supporting Pattern Library assets are included correctly.
* You may move the custom folder to a location outside of the Pattern Library and use Gulp to compile it with the Pattern Lab partials.

**How to do add custom files**

1. Copy all the supporting assets as defined in Use case 1: HTML.
1. Create your own external folders to store your custom work (e.g.,  /coderoot/js/custom and /coderoot/scss/custom) use your own development best practices to define the additional JS and SCSS code.
1. Use your own Gulp tasks to copy the custom directory content to the respective /public/sass/custom directory and the /public/js/custom directory. 
1. Add your own styles and compile the SASS. The custom directories are are already mapped in the Pattern Library style.scss import rules.

### What happens if the Pattern Library is updated?

This process works for any of the inclusion methods Basic HTML Include or Custom SASS/JS Extension methods. 

1. Subscribe to the UCSF Pattern Library Package Github to be notified on changes. @TODO UCSF team maybe set up a distribution list for known Library users.
1. Download the recent Pattern Library Package from Github.
1. Use a code diff / code compare tool (like SmartSynchroize from Syntevo) to check for hacked Pattern Library files. Confirm that no changes were made to your local version of the SASS / CSS. 
1. Copy the new Pattern Library updates over to a dev version of your site. If extending the SCSS, make sure you recompile your SASS.
1. Test the site! Is everything ok? If yes, deploy as required to production.


