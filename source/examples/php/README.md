To run this Twig example you need to have Twig set up, and a web server serving up the content.

1. Set up Twig:
   
   The current code example assumes composer will be used (running 'composer update' will install the vendor files).  
   
   However, there are various ways to set up twig as seen here: https://twig.symfony.com/doc/1.x/installation.html, and the example may need to be modified to work with the selected installation method.

2. Set up a Web Server:
   
   Some web server needs to be running with php support to process the php example. Point it to the /examples/php directory.

Changes:

* Macros were added to header-menu.twig.
* Twig template include was modified to remove PatternLab namespace on header-menu.twig
