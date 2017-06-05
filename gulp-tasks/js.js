/******************************************************
 * GULP - JS PROCESS
 *
 * The js processing for the gulp tasks.
 ******************************************************/

module.exports = function (gulp, config) {
  'use strict';
  var sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      path = require('path');

  function normalizePath() {
    return path
      .relative(
      process.cwd(),
      path.resolve.apply(this, arguments)
    )
      .replace(/\\/g, "/");
  }

  return function () {
    var stream = gulp.src(config.js_config.concatOrder, {cwd: normalizePath(config.patternlab.paths.source.js)} )
      .pipe(sourcemaps.init())
      .pipe(concat('script.js'))
      .pipe(uglify())
      .pipe(gulp.dest(normalizePath(config.patternlab.paths.public.js)));
    return stream;
  };

};

//var cached = require('gulp-cached');
//var eslint = require('gulp-eslint');
//var uglify = require('gulp-uglify');

//var gulpif = require('gulp-if');


// JS tasks.
//gulp.task('js-watch', function() {
//  gulp.src(options.eslint.files)
//    .pipe($.eslint())
//    .pipe($.eslint.format());
//  gulp.src(options.concat.files)
//    .pipe(concat('script.js'))
//    .pipe(gulp.dest('js_min'))
//    .pipe(uglify(options.uglify))
//    .pipe(gulp.dest('js_min'));
//});



// Compile javascript


// Validate using ESlint
//gulp.task('js:lint', 'Lint JS using ESlint', function () {
//  var src = config.js.src;
//  if (config.js.eslint.extraSrc) {
//    src = src.concat(config.js.eslint.extraSrc);
//  }
//  return gulp.src(src)
//    .pipe(cached('js'))
//    .pipe(eslint())
//    .pipe(eslint.format())
//    .pipe(gulpif(config.js.eslint.failAfterError, eslint.failAfterError()));
//});
//tasks.validate.push('validate:js');


// Watch for changes
//gulp.task('watch:js', function () {
//  var tasks = ['js'];
//  if (config.js.eslint.enabled) {
//    tasks.push('validate:js');
//  }
//  return gulp.watch(config.js.src, tasks);
//});
//tasks.watch.push('watch:js');



// LINT

// CONCAT

// UGLIFY
