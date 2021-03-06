var gulp = require('gulp');
var compass = require('gulp-compass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('compass', function(){
    gulp.src('sass/*.sass').pipe(compass({
        config_file: 'config.rb',
        comments: false,
        css: './',
        sass: 'sass/'
    }));
});

gulp.task('cssmin', function () {
    gulp.src('grid.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
    gulp.watch('sass/*.sass', function(event) {
        gulp.run('compass');
    });
    gulp.watch('*.css', function(event) {
        gulp.run('cssmin');
    });
});

gulp.task('default', function(){
    gulp.run('watch');
});
