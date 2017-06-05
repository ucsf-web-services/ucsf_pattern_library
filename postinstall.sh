#!/bin/bash
echo "Copying Config file to PatternLab"
rm -fr pattern-lab-source/source
cp config.yml pattern-lab-source/config/.
echo "Copying required files from Node Modules to PatternLab"
cp node_modules/font-awesome/fonts/* source/fonts/vendor
cp node_modules/flexslider/jquery.flexslider-min.js source/js/vendor
cp node_modules/jquery/dist/jquery.min.js source/js/vendor
cp node_modules/flexslider/flexslider.css source/css/vendor
cp -r node_modules/flexslider/fonts/* source/fonts/vendor
