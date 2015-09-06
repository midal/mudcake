'use strict';

var autoprefixer       = require('gulp-autoprefixer');
var babel              = require('babel/register');
var babelify           = require('babelify');
var browserify         = require('browserify');
var browserSync        = require('browser-sync');
var buffer             = require('vinyl-buffer');
var changed            = require('gulp-changed');
var csso               = require('gulp-csso');
var del                = require('del');
var eslint             = require('gulp-eslint');
var gulp               = require('gulp');
var historyApiFallback = require('connect-history-api-fallback')
var mocha              = require('gulp-mocha');
var notify             = require('gulp-notify');
var reload             = browserSync.reload;
var sass               = require('gulp-sass');
var source             = require('vinyl-source-stream');
var sourcemaps         = require('gulp-sourcemaps');
var uglify             = require('gulp-uglify');
var watchify           = require('watchify');

var p = {
      assets: ['assets/**/*.jpg', 'assets/**/*.png'],
      jsx: './scripts/app.jsx',
      js: './scripts/**/*.js',
      scss: 'styles/main.scss',
      bundle: 'app.js',
      distJs: 'dist/js',
      distCss: 'dist/css',
      distAssets: 'dist/assets'
    };

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './',
      middleware: [ historyApiFallback() ]
    }
  });
});

gulp.task('watchify', function() {
  var bundler = watchify(browserify(p.jsx, watchify.args));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', notify.onError())
      .pipe(source(p.bundle))
      .pipe(gulp.dest(p.distJs))
      .pipe(reload({stream: true}));
  }

  bundler.transform(babelify)
  .on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', function() {
  browserify(p.jsx)
    .transform(babelify)
    .bundle()
    .pipe(source(p.bundle))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(p.distJs));
});

gulp.task('styles', function() {
  return gulp.src(p.scss)
    .pipe(changed(p.distCss))
    .pipe(sass({errLogToConsole: true}))
    .on('error', notify.onError())
    .pipe(autoprefixer('last 1 version'))
    .pipe(csso())
    .pipe(gulp.dest(p.distCss))
    .pipe(reload({stream: true}));
});

gulp.task('assets', function() {
  return gulp.src(p.assets)
    .pipe(changed(p.distAssets))
    .pipe(gulp.dest(p.distAssets))
    .pipe(reload({stream: true}));
});

gulp.task('lint', function() {
  return gulp.src(['scripts/**/*.jsx', 'scripts/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('test', function() {
  return gulp.src(['test/**/*.js', '!test/e2e/**/*.js'])
    .pipe(mocha({
      reporter: 'nyan',
      compilers: {
          js: babel
      }
    }));
});

gulp.task('watchTask', function() {
  gulp.watch(p.assets, ['assets']);
  gulp.watch(['styles/**/*.scss'], ['styles']);
  gulp.watch(['scripts/**/*.jsx', 'scripts/**/*.js'], ['lint', 'test']);
  gulp.watch(['test/**/*.js', '!test/e2e/**/*.js'], ['test']);
});

gulp.task('watch', ['clean'], function() {
  gulp.start(['browserSync', 'watchTask', 'watchify', 'styles', 'assets', 'lint', 'test']);
});

gulp.task('build', ['clean'], function() {
  process.env.NODE_ENV = 'production';
  gulp.start(['browserify', 'styles']);
});

gulp.task('default', function() {
  console.log('Run "gulp watch or gulp build"');
});
