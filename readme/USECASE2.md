### Use case 2: Using PHP, Java, or another language for dynamic markup

1. Read the Basic HTML Use Case instructions
1. Download the supporting assets listed in the Basic HTML use case
1. Include the supporting assets in whatever method that produces the HTML headers required by your dynamic templating system
1. Use the sample HTML to get the markup required for the programmatically created output. For each component and template, view the pattern info in the settings cog.
1. Take a look at the Twig templates and JSON data files in the relative pattern source directories. They will inform how and when to use variables within the markup: /source/_patterns/[atomic-level]/[component]/[component].twig (in the source repo).

#### Leveraging the Pattern Lab Twig templates

You may consider leveraging the Twig templates in Pattern Lab. There are many considerations with this approach. 

_Directly leveraging the Pattern Lab Twig templates is not advised._

Assume the Twig templates driving the Pattern Library as an _example only_ and do not explicitly copy them into your custom repository and expect them to work.

**Why not directly copy or include the Twig templates?**

1. The version of Twig used directly impacts the functionality of the Twig template code.
1. Twig.js (Node.js), Twig (for PHP), Twig (for Drupal), and jTwig (for Java) all have different levels of support for Twig syntax and functions. We ran into these differences and limitations in the creation of the Pattern Library and using Twig.js and the different affect the PHP version has on Twig support.
1. The Pattern Lab / Pattern Library Twig templates includes variables and logic required to display various versions of elements and are influenced by the JSON data files. These variables may not exactly match what your custom solution needs.
1. The Pattern Lab / Pattern Library Twig templates have been created to nest (create once, leverage everywhere) by being included in Twig blocks. This, for some reasons, may not be the best for your custom tool development _or_ your application may require a different type or level of Twig block inclusion.
1. You may need to add different logic to support your custom tool's needs at the display layer. 

An example of a PHP file with a couple of Twig templates is included at /public/examples/php/README.md (in package repo) and at /source/examples/php/README.md (in source repo). **Note:** this example requires a Composer install to use and to ensure _a compatible version of Twig_ is used. Read the example's README.md for more information.
