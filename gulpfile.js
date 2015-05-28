var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');

gulp.task('less', function () {
  return gulp.src('stylesheets/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      compress: true
    }))
    .pipe(gulp.dest('stylesheets'));
});

gulp.task('default', function() {
	gulp.run('less');
});

gulp.watch('stylesheets/**/*.*', function() {
	gulp.run('less');
});