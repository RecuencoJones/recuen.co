var gulp = require('gulp'),
  sass = require('gulp-sass'),
  config = require('../config/build.conf');

/**
 * Tasks to preprocess sass files.
 */
gulp.task('sass', function() {
  return gulp.src([
    config.source.app + '/styles/styles.scss'
  ])
  .pipe(sass())
  .pipe(gulp.dest(config.source.tmp + '/styles'));
});
