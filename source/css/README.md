# Dealing with SASS

Currently in the style.scss file you will see various imports, under different
comments, here we will go over how they are processed in PatternLab and how they
can be processed if you are setting up your own compiler. Please note I am using
'SASS' to refer to sass/scss.

## Library Elements
These are pulled in from Node Modules, imported via NPM, on the PatternLab side.
They are imported by style.scss but are not present in the directories. Lets
look at how this is done on the PatternLab Gulp process, in the gulpfile.js:

```javascript
// SASS Compilation

var sass_config = {
  importer: importer,
  includePaths: gulp_config.sass_config.includePaths
};

gulp.task('pl-sass', function(){
  return gulp.src(normalizePath(paths().source.css) + '**/*.scss')
    .pipe(sass(sass_config).on('error', sass.logError))
    .pipe(gulp.dest(normalizePath(paths().public.root)));
});
```
The config is pulled in from gulp-config.json, and the path of each 'base' sass 
file is included there. You would do something similar to implement this. Note 
that Sass Globbing is used for the importer, this also allows the use of 

```
@import something/**/*.scss
```

## Global Elements
These are just the base elements used by all the partials.

## Atomic Elements
These are the partials specific SASS files.

## Vendor CSS
These are includes of actual CSS files where there were no libraries available
on NPM to pull SASS from.
