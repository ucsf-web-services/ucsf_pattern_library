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

* The data populating elements (like text strings and images) is stored in JSON files. 
* The main, globally includable JSON data file is in /source/_data/data.json 
* Patterns can override the core data file in the pattern directory (e.g., /_patterns/05-pages/homepage/homepage--hero-1.json). These local patterns are NOT inherited by other templates including the pattern (e.g., sidecar JSON files). Only data in the _data/data.json is available everywhere.
* See known issues with JSON data files in /source/_data/README.md

### How do I Extend SASS/CSS and JS?

Often custom development will require addition of more SASS/CSS through SASS partials and require a recompilation of the front-end SASS and Javascript. You may also need to redefine some values set in the core Pattern Library, like the primary and secondary color. 

A "custom" directory namespace has been reserved for SASS partials and custom JS to keep custom code directories separate from the rest of the Pattern Library. Your developers may also keep these custom directories completely outside of the Pattern Library source SASS and JS by updating their Gulp config.

An example custom directory has been added to the scss and the js directories, and include a sample of how to override the primary and secondary color without "hacking" the Pattern Library code.

**Assumptions:** 

* Really try not to hack the Pattern Library core code. 
* You can update the primary and secondary color variables within your custom SCSS partials (they are set as default in the SASS).
* Don't remove or change the pattern's SASS/CSS and JS, just add your code in the "custom" directories (see below).
* Use your own SASS/JS compiler scripts, not the Pattern Lab ones. You may consider reviewing and/or copying some of the scripts from the Pattern Lab source to ensure all supporting Pattern Library assets are included correctly.
* You may move the custom folder to a location outside of the Pattern Library and use Gulp to compile it with the Pattern Lab partials.

**How to do add custom files**

1. Copy all the supporting assets as defined in Use case 1: HTML.
1. Create your own external folders to store your custom work (e.g.,  /coderoot/js/custom and /coderoot/scss/custom) use your own development best practices to define the additional JS and SCSS code.
1. Use your own Gulp tasks to copy the custom directory content to the respective /public/sass/custom directory and the /public/js/custom directory. 
1. Add your own styles and compile the SASS. The custom directories are are already mapped in the Pattern Library style.scss import rules.

### What happens to your website if the Pattern Library is updated?

This process works for any of the inclusion methods Basic HTML Include or Custom SASS/JS Extension methods. 

1. Subscribe to the UCSF Pattern Library Package Github to be notified on changes. @TODO UCSF team maybe set up a distribution list for known Library users.
1. Download the recent Pattern Library Package from Github.
1. Use a code diff / code compare tool (like SmartSynchroize from Syntevo) to check for hacked Pattern Library files. Confirm that no changes were made to your local version of the SASS / CSS. 
1. Copy the new Pattern Library updates over to a dev version of your site. If extending the SCSS, make sure you recompile your SASS.
1. Test the site! Is everything ok? If yes, deploy as required to production.

### How do I contribute to the Pattern Library?

@TODO for UR team. Insert your business process for managing requests here.

@TODO for the Web Services team, insert the specific repo urls and access requirements here.
 
1. Work with the UR team to add an item to the Pattern Library.
1. Define with UR your new Pattern(s)' name and locations in the atomic structure.
1. Clone the _source_ Pattern Library repo to your local machine.
1. Create a new branch for your work. @TODO work with Web Services team for the UCSF branch naming convention.
1. Follow the installation instructions in the INSTALL.md file.
1. Follow the local npm server start instructions in the Install.md file.
1. Follow the naming conventions and standards set up in the pattern library. See existing MD files explaining atomic sections and their use. These are seen when using the "View All" button.
1. Add your pattern templates, supporting directory structures, md files, and JSON files to your branch locally.
1. Review the visual changes with the UR team.
1. Push your changes to your feature branch on GitHub.
1. Clone the _package_ Pattern Library to your local machine in a directory structure COMPLETELY SEPARATE from the source repo.
1. Create a new branch for your work name it the same as the branch you named it in the _source_ Pattern Library repo. @TODO work with Web Services team for the UCSF branch naming convention.
1. Make sure your local _source_ repo is clear of all development work and the npm server has been installed and started. This generates all of the output for checking into the _package_ repo.
1. Use some type of diff / directory compare tool to copy/update only the changes from your local running _source_ Pattern Library.
1. Source directory to copy files _from_: [path-to-your-local-source]/pattern-lab-source/public
1. Destination directory to copy files _to_: [path-to-your-local-source]/public
1. Add and commit all of the changes. Push it up to the _package_ repo. At this point, UR can approve the compiled output that is used for their review site.
1. When all is approved, create a Pull Request in each of the repos. Someone in Web Services will review your code. Once approved the code will be merged into the master branch by an approved Pattern Library developer/owner.

### Future possibilities

1. The master _package_ updates can be automated by githooks and a CI Environment.
1. The _package_ output can live on an AWS server instead of on GitHub browsing (like UC Davis' implementation).


