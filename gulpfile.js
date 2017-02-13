var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('views', function() {
  return gulp.src('src/templates/views/*.pug')
  .pipe(pug())
  .on('error', function(err) {
    console.log(err.name + ': ' + err.message);
    this.emit('end');
  })
  .pipe(gulp.dest('build/views/'));
});

gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('build/css/'))
});

gulp.task('run', ['views', 'sass']);

gulp.task('watch', function() {
  gulp.watch('src/templates/**/*', ['views']);
  gulp.watch('src/sass/**/*', ['sass']);
});

gulp.task('default', ['run', 'watch']);