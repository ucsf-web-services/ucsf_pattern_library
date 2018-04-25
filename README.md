# UCSF Web Patterns Library

* [Web Patterns Library website](http://webpatterns.ucsf.edu/)
   * Online demo of Patterns
   * Annotations and documentation
* [Web Patterns Source Code](https://github.com/ucsf-web-services/ucsf_pattern_library)
   * Twig templates
   * Sass
* [Web Patterns Compiled Code](https://github.com/ucsf-web-services/ucsf\_pattern\_library\_package)
   * HTML templates
   * CSS

This Pattern Library, built on [Pattern Lab](http://patternlab.io), has been created by the UCSF University Relations department for the following audiences and purposes:

* Developers creating applications outside of the UCSF Drupal ecosystem
* Developers applying and extending brand standards within the UCSF Drupal ecosystem, but not within the Drupal SiteBuilder environment
* Site owners/builders using UCSF SiteBuilder (StarterKit v.3) as a reference for designing out their website.

To learn more about general principals of Pattern Lab and its output (the pattern library) see [http://patternlab.io](http://patternlab.io).

## Developers building Web Applications or Websites that want to follow UCSF Branding Guidelines

This group of users will use the supporting assets (CSS, the SASS, JS, HTML and supporting grid system) to create a branded, mobile responsive tool within a custom system.

Development approaches may include: basic HTML pages, PHP applications, Drupal themes, and Java / JSP applications, Ruby, C# and many other languages that serve HTML pages.

Some basic use cases of how to leverage the Pattern Library are covered in this README, but this Pattern Library is intended to provide guidance about site layouts (like for the Site Owners), the compiled base CSS, JS, and HTML framework to just "use", or the source building blocks to apply to your richer development environment and extend as needed.

In all use cases of the Pattern Library, these assumptions apply:

* Keep the Pattern Library in a separate location from your code.
* Add your customizations in your own specified "custom" directories.
* Essentially, just extend and reference the library, don't hack it.
* Don't remove existing patterns from the Pattern Lab and Library

### Installation Instructions
Please use GIT to download the repo: `https://github.com/ucsf-web-services/ucsf_pattern_library.git`

Please follow our installation instructions:

* [Installing Pattern Library and its Dependencies](readme/INSTALL.md)
* [Use case 1: Basic HTML or PHP site - no additional CSS changes](readme/USECASE1.md)
* [Use case 2: Using PHP, Java, or another language for dynamic markup](readme/USECASE2.md)
* [Use case 3: Using Pattern Library to Inform Drupal work](readme/USECASE3.md)
<!--* User Case 4: Site owners using StarterKit version 3 / SiteBuilder-->

For this user group, use the pages and templates as references of how to place your site's building blocks in a way that has been designed and tested for the best usability and the most consistent UCSF look and feel.

**Assumptions**

1. The Pattern Library has been generated with only one of the Primary + Secondary color sets as a sample. Use your SiteBuilder wizard to choose your color combinations.
1. The library includes some features and improvements not yet applied to the SiteBuilder (StarterKit v.3) in Drupal. Samples include: footer styling, location styling, improved accessible form element styling, and tabs and table syling.
