'use strict';

var gulp = require('gulp'),
    compass = require('gulp-compass'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint');


// Define file sources
var sassSrc = ['app/css/sass/styles.scss'];
var jsSrc = ['app/js/*.js'];
var indexHTML = ['app/index.html'];
var bowerJsFiles = ['app/bower_components/ractive/ractive.min.js'];
var bowerCssFiles = ['app/bower_components/bootstrap/dist/css/bootstrap.min.css'];


// Task to compile Compass Sass files
gulp.task('compass', function() {
    gulp.src(sassSrc)
        .pipe(compass({
            css: 'dist/app/css',
            sass: 'app/css/sass'
        })).on('error', gutil.log)
        .pipe(sourcemaps.init())
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/app/css'));
});

// Task to concatenate and uglify js files
gulp.task('concat', function() {
    gulp.src(jsSrc)
        .pipe(sourcemaps.init())
            .pipe(concat('app.js'))
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/app/js'));
});

gulp.task('copy', function() {
    gulp.src(bowerJsFiles)
        .pipe(gulp.dest('dist/app/js/vendors'));

    gulp.src(bowerCssFiles)
        .pipe(gulp.dest('dist/app/css/vendors'));

    gulp.src(indexHTML)
        .pipe(gulp.dest('dist/app'));
});

gulp.task('jshint', function() {
    gulp.src(jsSrc)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

// Task to watch for changes in our file sources
gulp.task('watch', function() {
    gulp.watch(sassSrc,['compass']);
    gulp.watch(jsSrc,['concat']);
    gulp.watch(indexHTML,['copy']);
});


// Default gulp task
gulp.task('default', ['jshint', 'compass', 'concat', 'copy']);

gulp.task('watchall', ['jshint', 'compass', 'concat', 'copy', 'watch']);