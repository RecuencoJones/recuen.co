var gulp = require('gulp'),
  concat = require('gulp-concat');

/**
 * Concat task for built JS files.
 */
gulp.task('concat:js', function() {
  return gulp.src([
    'tmp/app.js',
    'tmp/**/*.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('dist/'));
});

gulp.task('concat:css', function() {
  return gulp.src([
    'tmp/**/*.css'
  ])
  .pipe(concat('app.css'))
  .pipe(gulp.dest('dist/'));
});

gulp.task('concat', ['concat:js', 'concat:css']);
