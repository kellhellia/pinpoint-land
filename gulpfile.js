var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');

var imageop = require('gulp-image-optimization');
 
gulp.task('images', function(cb) {
    gulp.src(['img/*.png','img/*.jpg','img/*.gif','img/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('img')).on('end', cb).on('error', cb);
});

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