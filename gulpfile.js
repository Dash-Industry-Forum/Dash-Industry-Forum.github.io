var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-csso');

gulp.task('js', function(){
  return gulp.src([
	  'node_modules/jquery/dist/jquery.slim.min.js',
	  'node_modules/popper.js/dist/popper.min.js',
	  'node_modules/bootstrap/dist/bootstrap.min.js'
     ])
    .pipe(sourcemaps.init())
    .pipe(concat('dashif.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('static/js'));
});

gulp.task('css', function(){
  return gulp.src([
	  'node_modules/bootstrap/dist/css/bootstrap.min.css',
	  'src/css/default.css'
    ])
    .pipe(minifyCSS())
    .pipe(concat('dashif.css'))
    .pipe(gulp.dest('static/css'));
});


gulp.task('default', [ 'js', 'css' ]);
