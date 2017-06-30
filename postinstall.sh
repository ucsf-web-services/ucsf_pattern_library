#!/bin/bash
echo "Copying Config file to PatternLab"
rm -fr pattern-lab-source/source
cp config.yml pattern-lab-source/config/.
echo "Copying required files from Node Modules to PatternLab"
cp node_modules/font-awesome/fonts/* source/fonts/vendor
cp node_modules/slick-carousel/slick/slick.js source/js/vendor
rm -fr node_modules/slick-carousel/slick/*.css
cp node_modules/jquery/dist/jquery.min.js source/js/vendor
cp node_modules/jquery-accessible-accordion-aria/jquery-accessible-accordion-aria.js source/js/vendor
cp node_modules/jquery-accessible-tabpanel-aria/jquery-accessible-tabs.js source/js/vendor

