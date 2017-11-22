var gulp = require('gulp'),
    gutil = require('gulp-util');
jshint = require('gulp-jshint');
sass = require('gulp-sass');
concat = require('gulp-concat');
sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');
var CleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var combineMq = require('gulp-combine-mq');
var devip = require('dev-ip');
var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});
gulp.task('build-css-minify', function() {
    return (gulp
            .src(srcs.scss)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on('error', handleError)
            .pipe(autoprefixer(autoprefixerOptions))
            .pipe(
                combineMq({
                    beautify: false
                })
            )
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(dests.css))
            //minify and create .min.css file
            .pipe(
                gutil.env.production
                    ? CleanCSS({ debug: true }, function(details) {
                          console.log('Original size:');
                          console.log(
                              '    -' +
                                  details.stats.originalSize.toFixed(1) / 1024 +
                                  ' KB'
                          );
                          console.log('Minified size:');
                          console.log(
                              '    -' +
                                  details.stats.minifiedSize.toFixed(1) / 1024 +
                                  ' KB'
                          );
                      })
                    : gutil.noop()
            )
            .pipe(rename({ extname: '.min.css' }))
            .pipe(gulp.dest(dests.css))
            .pipe(connect.reload().on('error', gutil.log)) );
});
// Build CSS
gulp.task('build-css', function() {
    return (gulp
            .src(srcs.scss)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on('error', handleError)
            .pipe(autoprefixer(autoprefixerOptions))
            .pipe(
                combineMq({
                    beautify: true
                })
            )
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(dests.css))
            //minify and create .min.css file
            .pipe(
                gutil.env.production
                    ? CleanCSS({ debug: true }, function(details) {
                          console.log('Original size:');
                          console.log(
                              '    -' +
                                  details.stats.originalSize.toFixed(1) / 1024 +
                                  ' KB'
                          );
                          console.log('Minified size:');
                          console.log(
                              '    -' +
                                  details.stats.minifiedSize.toFixed(1) / 1024 +
                                  ' KB'
                          );
                      })
                    : gutil.noop()
            )
            .pipe(rename({ extname: '.min.css' }))
            .pipe(gulp.dest(dests.css))
            .pipe(connect.reload().on('error', gutil.log)) );
});
gulp.task('reload-img', function() {
    return gulp
        .src(watchs.images)
        .pipe(connect.reload().on('error', gutil.log));
});

// Build JS
gulp.task('build-js', function() {
    return gulp
        .src(srcs.js)
        .pipe(sourcemaps.init())
        .pipe(concat(filenames.js))
        .pipe(gulp.dest(dests.js))
        .pipe(connect.reload().on('error', gutil.log));
});
// Handle errors
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

var srcs = {
        scss: 'resources/assets/sass/app.scss',
        js: 'resources/assets/js/*.js'
    },
    dests = {
        css: 'public/css/',
        js: 'public/js/'
    },
    buildwatch = {
        scss: 'resources/assets/sass/**/*.scss',
        js: 'resources/assets/js/*.js'
    },
    watchs = {
        scss: 'public/css/**/*.css',
        js: 'public/js/**/*.js',
        php: [
            'resources/views/**/*.php',
            'routes/web.php',
            'App/Http/Controllers/**/*.php'
        ],
        images: [
            'public/img/**/*.png',
            'public/img/**/*.gif',
            'public/img/**/*.jpg',
            'public/img/**/*.svg'
        ]
    },
    filenames = {
        js: 'main.js'
    };

gulp.task('watch', function() {
    browserSync.init({
        proxy: 'http://localhost/webuycars/public',
        online: true,
        notify: false,
        host: devip()
    });
    gulp.watch(buildwatch.scss, ['build-css']);
    gulp.watch(buildwatch.js, ['build-js']);
    gulp.watch(watchs.images, ['reload-img']);
    gulp.watch(watchs.php).on('change', browserSync.reload);
});

gulp.task('default', ['watch', 'connect'], browserSync.reload);
