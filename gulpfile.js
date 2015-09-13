var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
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
var bowerFiles = ['app/bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'app/bower_components/ractive/ractive.min.js'];


// Clean dist folder
gulp.task('clean', function() {
    gulp.src('dist')
        .pipe(clean());
});


// Task to compile SASS files
gulp.task('sass', function() {
    gulp.src(sassSrc)
        .pipe(sass())
        .pipe(gulp.dest('app/css'));

    gulp.src(sassSrc)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', gutil.log))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/app/css'));

});

// Task to compile Compass Sass files
gulp.task('compass', function() {
    gulp.src(sassSrc)
        .pipe(compass({
            css: 'app/css',
            sass: 'app/css/sass'
        }))
        .pipe(gulp.dest('app/css'));

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
    gulp.src(bowerFiles, {base: "."})
        .pipe(gulp.dest('dist'));

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
    gulp.watch(sassSrc,['sass']); // If any changes in 'sassSrc', perform 'sass' task
    gulp.watch(jsSrc,['concat']); 
});


// Default gulp task
gulp.task('default', ['clean', 'jshint', 'compass', 'concat', 'copy']);

gulp.task('watch', ['jshint', 'compass', 'concat', 'copy', 'watch']);