'use strict';

var gulp = require('gulp'),
    gp = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
      server: {
        baseDir: "./build"
          }
      });
    browserSync.watch('build', browserSync.reload)
});


gulp.task('pug', function() {
  return gulp.src('src/pug/pages/*.pug')
    .pipe(gp.pug({
      pretty: true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('sass', function() {
  return gulp.src('src/static/sass/main.sass')
    .pipe(gp.sass({}))
    .pipe(gp.autoprefixer({
      browsers: ['Last 10 versions']
    }))
    .on("error", gp.notify.onError({
      title: "style"
    }))
    .pipe(gulp.dest('build/static/css/'));
});

gulp.task('watch', function() {
  gulp.watch('src/pug/**/*.pug',gulp.series('pug'));
  gulp.watch('src/static/sass/**/*.sass',gulp.series('sass'))
});

gulp.task('default', gulp.series(
  gulp.parallel('pug', 'sass'),
  gulp.parallel('watch', 'serve')
));