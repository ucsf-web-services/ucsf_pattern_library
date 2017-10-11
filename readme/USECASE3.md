### Use case 3: Using Pattern Library to Inform Drupal work

This section is for developers applying and extending brand standards within the UCSF Drupal ecosystem, but not within the SiteBuilder environment. This may be either Drupal 7 or Drupal 8.

####**Known limitations and constraints.**

* Drupal core, for both versions, require a specific minimal version of PHP to run.
* Drupal 7 has a specific theme to implement Twig. https://www.drupal.org/project/tfd7 and says to download Twig version 1.0 from Github. The development team working with Pattern Lab had some issues with Twig version 1.0. This was a blocking issue which made the team use Pattern Lab for PHP for the UCSF project and Twig version 2.
* Drupal 8 also leverages version 1.x of Twig in core, with plans to upgrade to version 2.x in 8.4 (slated for end of calendar year 2017). Version 2 also depends on PHP version 7.
* Both versions of Drupal require special syntax to call the CMS field variables for the data insert within the Twig template.

The following Drupal 8 themes and other tools were reviewed in the making of this project:

* Pattern Lab Starter (Phase 2) [https://github.com/phase2/pattern-lab-starter](https://github.com/phase2/pattern-lab-starter)
* Emulsify (Four Kitchens) [http://emulsify.info/](http://emulsify.info/)
* UC Davis Pattern Library (Pattern Lab v 1 with Mustache markup)

If you wanted to include the Pattern Lab Twig Library within your Drupal docroot, consider the use of Component Libraries module: [https://www.drupal.org/project/components](https://www.drupal.org/project/)components although it will not have the CMS data fields required for data display.

Including the Pattern Lab source Twig in this method is not recommended. This library was built to be stand-alone, but with Drupal 8 in mind. Drupal 8 can extend the structure and the layouts, but it is completely informed by the CMS Site Building architecture being used. The CMS architecture for Drupal 8 had not yet been defined for the UCSF or UC Drupal 8 template at the creation of this library. 

Also note, the Drupal 7 UCSF SiteBuilder doesn't always use explicit fields and templates for all layouts. The WYSIWYG editor has been extended to provide custom templates and layout in one big body field vs. well defined data structures that would be best suited to leverage the Pattern Library templates.

