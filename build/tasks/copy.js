var gulp = require('gulp'),
  config = require('../config/build.conf');

/**
 * Copy files to temporary directory.
 */
gulp.task('copy:js', function() {
  return gulp.src([
    config.source.app + '/**/*.js'
  ])
  .pipe(gulp.dest(config.source.tmp));
});

gulp.task('copy:assets', function() {
  return gulp.src([
    config.source.app + '/assets/**/*'
  ])
  .pipe(gulp.dest(config.source.dist + '/assets'));
});

gulp.task('copy', [
  'copy:js',
  'copy:assets'
]);
