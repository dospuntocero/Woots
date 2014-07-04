var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat');
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint'),
    filter = require('gulp-filter'),
    changed = require('gulp-changed'),
    stylish = require('jshint-stylish');

var reload = browserSync.reload;

//name of the proxy for the server, useful if using something like MAMP or WAMP add port if necessary
proxyName = "http://yourProxyServer.site";

jsWatchSources = [
  'assets/js/*.js'
];

jsSources = [
  'assets/components/jquery/dist/jquery.js',

  //Bootstrap if you want to comment out, please do.
  'assets/components/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js',
  'assets/components/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js',
  'assets/components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js',
  'assets/components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js',
  'assets/components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
  'assets/components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js',
  'assets/components/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js',
  'assets/components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js',
  'assets/components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js',
  'assets/components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js',
  'assets/components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js',
  'assets/components/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js',

  'assets/js/*.js'
];

sassSources = ['assets/sass/app.scss'];

//Include paths for sass @import statements.
sassIncludePaths = [
  'assets/components/bootstrap-sass-official/assets/stylesheets/'
];



//Development Tasks
gulp.task('jsHint', function() {
  return gulp.src(jsWatchSources)
    .pipe(jshint())
    .pipe(changed('assets/compiled/js/'))
    .pipe(jshint.reporter(stylish));
});

gulp.task('jsDev', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('assets/compiled/js/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('sassDev', function() {
  gulp.src(sassSources)
    .pipe(sass({
      outputStyle: 'nested',
      imagePath: 'assets/img',
      includePaths: sassIncludePaths,
      sourceMap: true
    }).on('error', gutil.log))
    .pipe(prefix("last 1 version", "> 1%", "ie 9", {map: false }).on('error', gutil.log))
    .pipe(gulp.dest('assets/compiled/css/'))
    .pipe(filter('**/*.css'))
    .pipe(browserSync.reload({stream:true}));
});


gulp.task('browser-sync', function() {
    browserSync.init(null, {
        proxy: proxyName
    });
});

gulp.task('watch', function() {
  gulp.watch(jsWatchSources, ['jsHint','jsDev']);
  gulp.watch('assets/sass/**/*.scss', ['sassDev']);
  gulp.watch('**/*.php', reload);
});



//Production Tasks
gulp.task('jsProd', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/compiled/js/'));
});

gulp.task('sassProd', function() {
  gulp.src(sassSources)
    .pipe(sass({
      outputStyle: 'compressed',
      imagePath: 'assets/img',
      includePaths: sassIncludePaths
    }).on('error', gutil.log))
    .pipe(prefix("last 1 version", "> 1%", "ie 9", {map: false }).on('error', gutil.log))
    .pipe(gulp.dest('assets/compiled/css/style.css'))
});



//Default Task
gulp.task('default', ['jsHint', 'jsDev', 'sassDev', 'watch']);

//Gulp ProxyServe
gulp.task('proxy', ['jsHint', 'jsDev', 'sassDev', 'browser-sync', 'watch']);

//Production Task
gulp.task('prod', ['jsProd','sassProd']);