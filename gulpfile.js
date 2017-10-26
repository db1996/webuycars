var gulp  = require('gulp'),
 gutil = require('gulp-util');
 jshint = require('gulp-jshint');
 sass   = require('gulp-sass');
 concat = require('gulp-concat');
 uglify = require('gulp-uglifyjs');
 sourcemaps = require('gulp-sourcemaps');
 imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();
 cleanCSS = require('gulp-clean-css');
 connect = require('gulp-connect');



gulp.task('jshint', function() {
    return gulp.src('public/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

//minify CSS
gulp.task('minify-css', () => {
    return gulp.src('public/css/*.css')
    .pipe(cleanCSS({debug: true}, function(details) {
        var savedsize = details.stats.originalSize - details.stats.minifiedSize;
        console.log(details.name + ':');
        console.log('  - new size: ' + details.stats.minifiedSize );
        console.log('  - saved size: ' + savedsize);
    }))
    .pipe(gulp.dest('public/css/min'));
});
gulp.task('uglify-js', function() {
  gulp.src('public/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js/min'))
});

// Build JS
gulp.task('build-js', function() {
    return gulp.src('resources/assets/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    //only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/js'));
});
gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});
// Build CSS
gulp.task('build-css', function() {
    return gulp.src('resources/assets/sass/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass()).on('error', handleError)
        .pipe(sourcemaps.write()) // Add the map to modified source.
        .pipe(gulp.dest('public/css'))
        .pipe(connect.reload().on( 'error', gutil.log ));
        // .pipe(browserSync.stream({match: '**/*.css'}));
});

// ImageMin
gulp.task('imagemin', function () {
    return gulp.src('src/img/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('public/www/img'));
});

// Handle errors
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}
gulp.task('default', ['watch', 'connect'], browserSync.reload);
gulp.task('watch', function() {
    browserSync.init({
        proxy: "http://localhost/webuycars/public",
        online: true,
        notify: false,
        host:"192.168.56.1"
    });
    gulp.watch('resources/assets/sass/**/*.{sass,scss}', ['build-css']);
    gulp.watch('resources/assets/js/*.js', ['build-js']);
    gulp.watch("public/js/**/*.js").on('change', browserSync.reload);
    // gulp.watch("public/css/**/*.css").on('change', browserSync.reload);
    gulp.watch("resources/views/**/*.php").on('change', browserSync.reload);
    gulp.watch("routes/*.php").on('change', browserSync.reload);
    gulp.watch("App/Http/Controllers/**/*.php").on('change', browserSync.reload);
})
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "yourlocal.dev"
    });
});
