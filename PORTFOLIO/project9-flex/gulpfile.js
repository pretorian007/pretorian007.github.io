const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('min', () =>
    gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);


var server = require('gulp-server-livereload');
 
gulp.task('default', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      directoryListing: false,
      open: false
    }));
});