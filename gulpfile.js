var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var reload = browserSync.reload;

gulp.task('babel', function () {
  return gulp.src('./js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public'));
});

gulp.task('coffee', function () {
  return gulp.src('./coffee/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./public/'));
});

gulp.task('sass', function() {
  return gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });
  gulp.watch("./public/*.css").on('change', browserSync.reload);
});



gulp.task('default', ['serve']);
