var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var server = require('gulp-server-livereload');
var imagemin = require('gulp-imagemin');



gulp.task('go', ['minimg', 'autocss']);

gulp.task('watch', ['live'], function() {
        gulp.watch('css/*.css', ['autocss']); 

        
    });




gulp.task('live', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      directoryListing: false,
      open: false
    }));
});


 
gulp.task('minimg', () =>
    gulp.src('img/*')

);


gulp.task('autocss', () =>
    gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
                .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

