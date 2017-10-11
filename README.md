# UCSF Pattern Library 

* Github repo source: [https://github.com/ucsf-web-services/ucsf\_pattern\_library](https://github.com/ucsf-web-services/ucsf_pattern_library)
* Github repo public: [https://github.com/ucsf-web-services/ucsf\_pattern\_library\_package](https://github.com/ucsf-web-services/ucsf\_pattern\_library\_package)

This Pattern Library, built on [Pattern Lab](http://patternlab.io), has been created by the UCSF University Relations department for the following audiences and purposes:

* Developers creating applications outside of the UCSF Drupal ecosystem
* Developers applying and extending brand standards within the UCSF Drupal ecosystem, but not within the Drupal SiteBuilder environment
* Site owners/builders using UCSF SiteBuilder (StarterKit v3) as a reference for designing out their website.


## Developers building Web Applications or Websites that want to follow UCSF Branding Guidelines 

This group of users will use the supporting assets (CSS, the SASS, JS, HTML and supporting grid system) to create a branded, mobile responsive tool within a custom system. 

Development approaches may include: basic HTML pages, PHP/Symfony/Twig applications, Drupal themes, and Java / JSP applications.

Some basic use cases of how to leverage the Pattern Library are covered in this README, but this Pattern Library is intended to provide guidance about site layouts (like for the Site Owners), the compiled base CSS, JS, and HTML framework to just "use", or the source building blocks to apply to your richer development environment and extend as needed.

In all cases of Pattern Library application, these assumptions apply:

* Don't remove Pattern Library and Pattern Lab information from your local area
* Keep the Pattern Library in a separate location from your code.
* Add your customizations in your own specified "custom" directories.
* Essentially, just extend and reference the library, don't hack it.

### Installation Instructions
Please use GIT to download the repo at `https://github.com/ucsf-web-services/ucsf_pattern_library.git`
Please follow our installation instructions at 
### [Installing Pattern Library and its Dependencies](readme/INSTALL.md)

### [Use case 1: Basic HTML or PHP site - no additional CSS changes](readme/USECASE1.md)


### [Use case 2: Using PHP, Java, or another language for dynamic markup](readme/USECASE2.md)


### [Use case 3: Using Pattern Library to Inform Drupal work](readme/USECASE3.md)



## Site owners using StarterKit version 3 / SiteBuilder

For this user group, use the pages and templates as examples of how to place your site's building blocks in a way that has been designed and tested for the best usability and the most consistent UCSF look and feel.

**Assumptions**

1. The Pattern Library has been generated with only one of the Primary + Secondary color sets as a sample. Use your SiteBuilder wizard to choose your colors.
1. The library includes some features and improvements not yet applied to the StarterKit v.3 / SiteBuilder in Drupal. Samples include: footer styling, location styling, improved accessible form element styling, tabs and table syling, and changes in H1 wieghts (200 vs. 300)
1. Templates (basic structure) have been built out, but more sample Pages (Templates with real-like data) have yet to be built.

