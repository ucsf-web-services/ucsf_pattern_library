/******************************************************
 * CUSTOM PATTERN LAB NODE GULP TWIG
 *
 * The gulp wrapper around patternlab-node core, providing tasks to interact with the core library and move supporting frontend assets.
******************************************************/
var gulp = require('gulp'),
  path = require('path'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  argv = require('minimist')(process.argv.slice(2)),
  chalk = require('chalk');
  flatten = require('gulp-flatten');
  fs = require('fs');
  importer = require('node-sass-globbing');
  config = require('./gulp-config.json');
  shell = require('gulp-shell');


/**
 * Normalize all paths to be plain, paths with no leading './',
 * relative to the process root, and with backslashes converted to
 * forward slashes. Should work regardless of how the path was
 * written. Accepts any number of parameters, and passes them along to
 * path.resolve().
 *
 * This is intended to avoid all known limitations of gulp.watch().
 *
 * @param {...string} pathFragment - A directory, filename, or glob.
*/
function normalizePath() {
  return path
    .relative(
      process.cwd(),
      path.resolve.apply(this, arguments)
    )
    .replace(/\\/g, "/");
}



/******************************************************
 * COMPILATION TASKS - compile scss etc.
******************************************************/

// SASS Compilation

var sass_config = {
  importer: importer,
  includePaths: config.sass_config.includePaths
};

gulp.task('pl-sass', function(){
  return gulp.src(normalizePath(paths().source.css) + '**/*.scss')
    .pipe(sass(sass_config).on('error', sass.logError))
    .pipe(gulp.dest(normalizePath(paths().public.root)));
});

/******************************************************
 * COPY TASKS - stream assets from source to destination
******************************************************/
// JS copy
gulp.task('pl-copy:js', function () {
  return gulp.src('**/*.js', {cwd: normalizePath(paths().source.js)} )
    .pipe(gulp.dest(normalizePath(paths().public.js)));
});

// Images copy
gulp.task('pl-copy:img', function () {
  return gulp.src('**/*.*',{cwd: normalizePath(paths().source.images)} )
    .pipe(gulp.dest(normalizePath(paths().public.images)));
});

// Favicon copy
gulp.task('pl-copy:favicon', function () {
  return gulp.src('favicon.ico', {cwd: normalizePath(paths().source.root)} )
    .pipe(gulp.dest(normalizePath(paths().public.root)));
});

// Fonts copy
gulp.task('pl-copy:font', function () {
  return gulp.src('**/*.*', {cwd: normalizePath(paths().source.fonts)})
    .pipe(flatten())
    .pipe(gulp.dest(normalizePath(paths().public.fonts)));
});

// CSS Copy
gulp.task('pl-copy:css', function () {
  return gulp.src(normalizePath(paths().source.css) + '/*.css')
    .pipe(gulp.dest(normalizePath(paths().public.css)))
    .pipe(browserSync.stream());
});

// SASS Copy for development
gulp.task('pl-copy:sass', function () {
  return gulp.src(normalizePath(paths().source.css) + '/**/*.*')
    .pipe(gulp.dest(normalizePath(paths().public.sass)))
    .pipe(browserSync.stream());
});

// Styleguide Copy everything but css
gulp.task('pl-copy:styleguide', function () {
  return gulp.src(normalizePath(paths().source.styleguide) + '/**/!(*.css)')
    .pipe(gulp.dest(normalizePath(paths().public.root)))
    .pipe(browserSync.stream());
});

// Styleguide Copy and flatten css
gulp.task('pl-copy:styleguide-css', function () {
  return gulp.src(normalizePath(paths().source.styleguide) + '/**/*.css')
    .pipe(gulp.dest(function (file) {
      //flatten anything inside the styleguide into a single output dir per http://stackoverflow.com/a/34317320/1790362
      file.path = path.join(file.base, path.basename(file.path));
      return normalizePath(path.join(paths().public.styleguide, '/css'));
    }))
    .pipe(browserSync.stream());
});

/******************************************************
 * PATTERN LAB CONFIGURATION - API with core library
******************************************************/
//read all paths from our namespaced config file
function paths() {
  return config.patternlab.paths;
}

/**
 * Return gulp task location
 */
function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, config);
}

//Task kicked off from js.js for all js compliation tasks
gulp.task('js:compile', getTask('js'));


/**
 * Performs the actual build step. Accomodates both async and sync
 * versions of Pattern Lab.
 * @param {function} done - Gulp done callback
 */
// function build(done) {
//   const buildResult = patternlab.build(() => {}, getConfiguredCleanOption());
//
//   // handle async version of Pattern Lab
//   if (buildResult instanceof Promise) {
//     return buildResult.then(done);
//   }
//
//   // handle sync version of Pattern Lab
//   done();
//   return null;
// }

gulp.task('pl-assets', gulp.series(
  'js:compile',
  'pl-copy:sass',
  'pl-copy:img',
  'pl-copy:favicon',
  'pl-copy:font',
  gulp.series('pl-sass', 'pl-copy:css', function(done){done();}),
  'pl-copy:styleguide',
  'pl-copy:styleguide-css'
));

// gulp.task('patternlab:version', function (done) {
//   patternlab.version();
//   done();
// });

// gulp.task('patternlab:help', function (done) {
//   patternlab.help();
//   done();
// });

// gulp.task('patternlab:patternsonly', function (done) {
//   patternlab.patternsonly(done, getConfiguredCleanOption());
// });

// gulp.task('patternlab:liststarterkits', function (done) {
//   patternlab.liststarterkits();
//   done();
// });
//
// gulp.task('patternlab:loadstarterkit', function (done) {
//   patternlab.loadstarterkit(argv.kit, argv.clean);
//   done();
// });

// gulp.task('', function () {
//   return gulp.src('', {read: false, })
//     .pipe(shell([
//
//     ]));
// });


gulp.task('pl-build', shell.task([
  'php pattern-lab-source/core/console --generate'
]))

gulp.task('patternlab:build', gulp.series('pl-build', 'pl-assets'));

// gulp.task('patternlab:installplugin', function (done) {
//   patternlab.installplugin(argv.plugin);
//   done();
// });

/******************************************************
 * SERVER AND WATCH TASKS
******************************************************/
// watch task utility functions
// function getSupportedTemplateExtensions() {
//   var engines = require('./node_modules/patternlab-node/core/lib/pattern_engines');
//   return engines.getSupportedFileExtensions();
// }
// function getTemplateWatches() {
//   return getSupportedTemplateExtensions().map(function (dotExtension) {
//     return normalizePath(paths().source.patterns, '**', '*' + dotExtension);
//   });
// }

/**
 * Reloads BrowserSync.
 * Note: Exits more reliably when used with a done callback.
 */
function reload(done) {
  browserSync.reload();
  done();
}

/**
 * Reloads BrowserSync, with CSS injection.
 * Note: Exits more reliably when used with a done callback.
 */
function reloadCSS(done) {
  browserSync.reload('*.css');
  done();
}

function watch() {
  const watchers = [
    {
      name: 'CSS',
      paths: [normalizePath(paths().source.css, '**', '*.css')],
      config: { awaitWriteFinish: true },
      tasks: gulp.series('pl-copy:css', reloadCSS)
    },
    {
      name: 'SCSS',
      paths: [normalizePath(paths().source.css, '**', '*.scss')],
      config: { awaitWriteFinish: true },
      tasks: gulp.series('pl-sass', reloadCSS)
    },
    {
      name: 'Styleguide Files',
      paths: [normalizePath(paths().source.styleguide, '**', '*')],
      config: { awaitWriteFinish: true },
      tasks: gulp.series('pl-copy:styleguide', 'pl-copy:styleguide-css', reloadCSS)
    },
    {
      name: 'Source Files',
      paths: [
        normalizePath(paths().source.patterns, '**', '*.json'),
        normalizePath(paths().source.patterns, '**', '*.md'),
        normalizePath(paths().source.patterns, '**', '*.twig'),
        normalizePath(paths().source.data, '**', '*.json'),
        normalizePath(paths().source.fonts, '**', '*'),
        normalizePath(paths().source.images, '**', '*'),
        normalizePath(paths().source.js, '**', '*'),
        normalizePath(paths().source.meta, '**', '*'),
        normalizePath(paths().source.annotations, '**', '*'),
      ],
      config: { awaitWriteFinish: true },
      tasks: gulp.series('patternlab:build', reload)
    }
  ];

  watchers.forEach(watcher => {
    console.log('\n' + chalk.bold('Watching ' + watcher.name + ':'));
    watcher.paths.forEach(p => console.log('  ' + p));
    gulp.watch(watcher.paths, watcher.config, watcher.tasks);
  });
  console.log();
}

gulp.task('patternlab:connect', gulp.series(function (done) {
  browserSync.init({
    server: {
      baseDir: normalizePath(paths().public.root)
    },
    snippetOptions: {
      // Ignore all HTML files within the templates folder
      blacklist: ['/index.html', '/', '/?*']
    },
    notify: {
      styles: [
        'display: none',
        'padding: 15px',
        'font-family: sans-serif',
        'position: fixed',
        'font-size: 1em',
        'z-index: 9999',
        'bottom: 0px',
        'right: 0px',
        'border-top-left-radius: 5px',
        'background-color: #1B2032',
        'opacity: 0.4',
        'margin: 0',
        'color: white',
        'text-align: center'
      ]
    }
  }, function () {
    done();
  });
}));

/******************************************************
 * COMPOUND TASKS
******************************************************/
gulp.task('default', gulp.series('patternlab:build'));
gulp.task('patternlab:watch', gulp.series('patternlab:build', watch));
gulp.task('patternlab:serve', gulp.series('patternlab:build', 'patternlab:connect', watch));
