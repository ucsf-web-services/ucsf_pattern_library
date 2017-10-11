### Use case 1: Basic HTML or PHP site - no additional CSS changes

1. Clone/download the Pattern Library _package_ repo (not the source repo)
1. Add the supporting asset directories to your site. They contain the compiled assets needed to have a basic HTML site "just work" within the framework.
1. Add the CSS and supporting assets JS to your html head, as provided in the example HTML file.
1. Use the page samples, page templates, and component HTML as samples for your code. Cut and paste into your HTML pages as needed.
1. Update the HTML content as required by your business. Be sure to address each HTML item's complete metadata for proper SEO and accessibility support.

**Supporting asset directories:**

* CSS /public/css/*
* JS /public/js/*
* Fonts /public/fonts/*

_Note:_ Supporting assets / packages loaded with NPM are defined in the package.json file at the root of the _source_ repo.

**HTML Page Sample**

See the HTML Page sample in /public/examples/HTML/index.html (in the package repo) or /source/examples/HTML/index.html (in the source repo). They are the same code and are packaged for delivery with Gulp tasks from the source repo.