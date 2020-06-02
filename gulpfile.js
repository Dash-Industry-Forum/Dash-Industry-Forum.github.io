var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-csso');
var minify = require('gulp-minify');

gulp.task('js', function(){
  return gulp.src([
	  'src/js/default.js',
	  'node_modules/jquery/dist/jquery.slim.min.js',
	  'node_modules/popper.js/dist/umd/popper.min.js',
	  'node_modules/bootstrap/dist/js/bootstrap.min.js'
     ])
    .pipe(concat('dashif.js'))
    .pipe(minify())
    .pipe(gulp.dest('static/js'));
});

gulp.task('css', function(){
  return gulp.src([
	  'node_modules/bootstrap/dist/css/bootstrap.min.css',
	  'node_modules/font-awesome/css/font-awesome.min.css',
	  'src/css/default.css'
    ])
    .pipe(minifyCSS())
    .pipe(concat('dashif.css'))
    .pipe(gulp.dest('static/css'));
});

gulp.task('fonts', function(){
  return gulp.src([
	  'node_modules/font-awesome/fonts/*'
    ])
    .pipe(gulp.dest('static/fonts'));
});

gulp.task('default', gulp.parallel([ 'js', 'css', 'fonts' ]));
