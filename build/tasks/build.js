var gulp = require('gulp'),
  runSequence = require('run-sequence').use(gulp);

/**
 * Build task.
 */
gulp.task('build:js', function(done) {
  runSequence(
    ['copy:js'],
    ['html2js'],
    ['concat:js'],
    ['wrap:js'],
    ['uglify'],
    done
  );
});

gulp.task('build:css', function(done) {
  runSequence(
    ['sass'],
    ['copy:assets'],
    ['concat:css'],
    ['wrap:css'],
    done
  );
});

gulp.task('build', function(done) {
  runSequence(
    ['clean:tmp', 'clean:dist'],
    ['build:js', 'build:css'],
    done
  );
});
