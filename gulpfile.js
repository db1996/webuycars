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
//minify css
gulp.task('uglify-js', function() {
  gulp.src('public/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js/min'))
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
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'))
        .pipe(connect.reload().on( 'error', gutil.log ));
});
// Build JS
gulp.task('build-js', function() {
    return gulp.src('resources/assets/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/js'))
    .pipe(connect.reload().on( 'error', gutil.log ));
});
// Handle errors
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

var srcs = {
    scss: 'resources/assets/sass/**/*.scss',
    js: 'resources/assets/js/*.js',
    images: ['public/img/**/*.png', 'public/img/**/*.gif', 'public/img/**/*.jpg', 'public/img/**/*.svg'],
},
dests = {
    scss: 'public/css/',
    js: 'public/js/',
},
watchs = {
    scss: 'public/css/**/*.css',
    js: 'public/js/**/*.js',
    php: ['resources/views/**/*.php', 'routes/web.php', 'App/Http/Controllers/**/*.php'],
};

gulp.task('watch', function() {
    browserSync.init({
        proxy: "http://localhost/webuycars/public",
        online: true,
        notify: false,
        host:"192.168.56.1"
    });
    gulp.watch(srcs.scss, ['build-css']);
    gulp.watch(srcs.images).on('change', browserSync.reload);
    gulp.watch(srcs.js, ['build-js']);
    //gulp.watch(watchs.js).on('change', browserSync.reload);
    gulp.watch(watchs.php).on('change', browserSync.reload);
})

gulp.task('default', ['watch', 'connect'], browserSync.reload);
