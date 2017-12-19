var gulp = require('gulp'),
    gutil = require('gulp-util');
sass = require('gulp-sass');
uglify = require('gulp-uglify-es').default;
concat = require('gulp-concat');
sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var devip = require('dev-ip');
var wait = require('gulp-wait');
var cleanCSS = require('gulp-clean-css');
var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

var production = !!gutil.env.production;
var jsmin = !!gutil.env.jsmin;

console.log(production ? 'yas' : 'nope');
gulp.task('build-css', function() {
    return gulp
        .src(srcs.scss)
        .pipe(production === true ? gutil.noop() : sourcemaps.init())
        .pipe(sass())
        .on('error', handleError)
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(production === true ? cleanCSS({ level: 2 }) : gutil.noop())
        .pipe(production === true ? gutil.noop() : sourcemaps.write())
        .pipe(gulp.dest(dests.css))
        .pipe(browserSync.reload({ stream: true }));
});
gulp.task('build-css-timeout', function() {
    return gulp
        .src(srcs.scss)
        .pipe(production === true ? gutil.noop() : sourcemaps.init())
        .pipe(sass())
        .on('error', handleError)
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(production === true ? cleanCSS({ level: 2 }) : gutil.noop())
        .pipe(production === true ? gutil.noop() : sourcemaps.write())
        .pipe(wait(2500))
        .pipe(gulp.dest(dests.css))
        .pipe(browserSync.reload({ stream: true }));
});
gulp.task('reload-img', function() {
    return gulp.src(watchs.images).pipe(browserSync.reload({ stream: true }));
});

// Build JS
gulp.task('build-js', function() {
    return gulp
        .src(srcs.js)
        .pipe(jsmin === true ? gutil.noop() : sourcemaps.init())
        .pipe(concat(filenames.js))
        .pipe(jsmin === true ? uglify().on('error', gutil.log) : gutil.noop())
        .pipe(jsmin === true ? gutil.noop() : sourcemaps.write())
        .pipe(gulp.dest(dests.js))
        .pipe(browserSync.reload({ stream: true }));
});
// Handle errors
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}
// json object to specify folders and files it watches
var srcs = {
        scss: 'resources/assets/sass/**/*.scss',
        js: 'resources/assets/js/*.js'
    },
    dests = {
        css: 'public/css/',
        cssmin: 'public/css/min',
        js: 'public/js/'
    },
    buildwatch = {
        scss: 'resources/assets/sass/**/*.scss',
        js: 'resources/assets/js/*.js'
    },
    watchs = {
        scss: 'public/css/**/*.css',
        js: 'public/js/**/*.js',
        php: ['resources/views/**/*.php', 'routes/web.php', 'App/Http/Controllers/**/*.php'],
        images: ['public/img/*.png', 'public/img/*.gif', 'public/img/*.jpg', 'public/img/*.svg']
    },
    filenames = {
        js: 'main.js'
    };

gulp.task('watch', function() {
    browserSync.init({
        // proxy: 'http://localhost/webuycars/public',
        proxy: 'webuycars.dev',
        // server: true,
        online: true,
        notify: false,
        host: devip()
    });
    gulp.watch(buildwatch.scss, ['build-css']);
    gulp.watch(buildwatch.js, ['build-js']);
    gulp.watch(watchs.images, ['reload-img']);
    gulp.watch(watchs.php).on('change', browserSync.reload);
    gulp.watch(watchs.php, ['build-css-timeout']);
});

gulp.task('default', ['watch'], browserSync.reload);
