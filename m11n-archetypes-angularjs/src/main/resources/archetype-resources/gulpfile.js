#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var gettext = require('gulp-angular-gettext');

// load plugins
var ${symbol_dollar} = require('gulp-load-plugins')();

process.NODE_ENV = 'test';

// error handler
// NOTE: see here explanation http://cameronspear.com/blog/how-to-handle-gulp-watch-errors-with-plumber/
var onError = function (err) {
    //gutil.beep();
    console.error(err);
    throw err;
};

gulp.task('pot', function () {
    return gulp.src(['.tmp/**/*.html', '.tmp/scripts/**/*.js', 'app/scripts/**/*.js'])
        .pipe(gettext.extract('template.pot', {
            // options to pass to angular-gettext-tools...
        }))
        .pipe(gulp.dest('app/po/'));
});

gulp.task('translations', function () {
    return gulp.src('app/po/**/*.po')
        .pipe(gettext.compile({
            // options to pass to angular-gettext-tools...
            format: 'json'
        }))
        .pipe(gulp.dest('app/data/translations/'));
});

// converts templates to Javascript
gulp.task('html2js', function () {
    return gulp.src(".tmp/parts/*.tpl.html")
        .pipe(${symbol_dollar}.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(${symbol_dollar}.ngHtml2js({
            moduleName: "hlu.ui.parts",
            prefix: "parts/"
        }))
        .pipe(${symbol_dollar}.concat("parts.tpl.js"))
        .pipe(gulp.dest(".tmp/scripts"))
        .pipe(${symbol_dollar}.size());

    gulp.src(".tmp/views/*.html")
        .pipe(${symbol_dollar}.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(${symbol_dollar}.ngHtml2js({
            moduleName: "${artifactId}.views",
            prefix: "views/"
        }))
        .pipe(${symbol_dollar}.concat("views.tpl.js"))
        .pipe(gulp.dest(".tmp/scripts"))
        .pipe(${symbol_dollar}.size());
});

// converts markdown to HTML
gulp.task('markdown', function () {
    return gulp.src(['app/content/**/*.md'])
        .pipe(${symbol_dollar}.markdown())
        .pipe(${symbol_dollar}.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(gulp.dest('.tmp/content'))
        .pipe(${symbol_dollar}.size());
});

gulp.task('jade', ['markdown'], function () {
    // NOTE: pretty option is extremely important; otherwise the html pipeline breaks
    return gulp.src(['app/**/*.jade', '!app/layouts/**/*.jade', '!app/bower_components/**/*.jade'])
        .pipe(${symbol_dollar}.jade({
            basedir: 'app',
            pretty: true,
            data: {
                debug: false
            }
        }))
        .pipe(${symbol_dollar}.replace('@@iTunesId', 'TODO_ITUNES_ID'))
        .pipe(${symbol_dollar}.replace('@@googleSiteVerification', 'TODO_GOOGLE_SITE_VERIFICATION'))
        .pipe(gulp.dest('.tmp'));
});

gulp.task('styles-embed', function () {
    return gulp.src('app/bower_components/flags-sprite/dist/flags.css')
        .pipe(${symbol_dollar}.cssBase64({
            verbose: true,
            baseDir: './',
            maxWeightResource: 100000,
            extensionsAllowed: ['.png']
        }))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(${symbol_dollar}.size());
});

gulp.task('styles', function () {
    return gulp.src('app/styles/main.less')
        .pipe(${symbol_dollar}.less())
        .pipe(${symbol_dollar}.autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(${symbol_dollar}.size());
});

// Scripts
gulp.task('scripts', function () {
    return gulp.src('app/scripts/**/*.js')
        .pipe(${symbol_dollar}.jshint())
        .pipe(${symbol_dollar}.jshint.reporter(require('jshint-stylish')))
        .pipe(${symbol_dollar}.uglify())
        .pipe(${symbol_dollar}.size());
});

gulp.task('html', function () {
    var jsFilter = ${symbol_dollar}.filter('**/*.js');
    var cssFilter = ${symbol_dollar}.filter('**/*.css');

    //return gulp.src(['.tmp/**/*.html', '!.tmp/parts/*.html', '!.tmp/views/*.html'])
    return gulp.src(['.tmp/**/*.html'])
        .pipe(${symbol_dollar}.plumber({
            errorHandler: onError
        }))
        .pipe(${symbol_dollar}.useref.assets({searchPath: '{.tmp,app}'}))
        .pipe(jsFilter)
        //.pipe(${symbol_dollar}.sourcemaps.init())
        .pipe(${symbol_dollar}.ngAnnotate())
        .pipe(${symbol_dollar}.uglify())
        //.pipe(${symbol_dollar}.sourcemaps.write('.'))
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe(${symbol_dollar}.csso())
        .pipe(cssFilter.restore())
        .pipe(${symbol_dollar}.rev())
        .pipe(${symbol_dollar}.useref.restore())
        .pipe(${symbol_dollar}.useref())
        .pipe(${symbol_dollar}.revReplace())
        .pipe(gulp.dest('dist'))
        .pipe(${symbol_dollar}.size());
});

gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe(${symbol_dollar}.cache(${symbol_dollar}.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe(${symbol_dollar}.size());
});

// fonts
gulp.task('fonts', function () {
    return gulp.src(['app/bower_components/**/fonts/*.{eot,otf,svg,ttf,woff}', 'app/bower_components/**/font/*.{eot,otf,svg,ttf,woff}'])
        .pipe(${symbol_dollar}.flatten())
        .pipe(gulp.dest('dist/fonts'))
        .pipe(${symbol_dollar}.size());
});

// extras
gulp.task('extras', function () {
    return gulp.src(['app/*.*', 'app/**/*.json', 'app/**/*.mp3', 'app/**/*.webm', '!app/bower_components/**/*.json', '!app/*.html', '!app/**/*.jade'], { dot: true })
        .pipe(gulp.dest('dist'));
});

// clean
gulp.task('clean', function () {
    return gulp.src(['.tmp', 'dist'], { read: false })
        .pipe(${symbol_dollar}.clean());
});

// build
gulp.task('build', function(callback) {
    runSequence('styles', 'styles-embed', 'scripts', 'jade', 'html2js', 'html', 'pot', 'translations', 'images', 'fonts', 'extras', callback);
});

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

// connect
gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('app'))
        .use(connect.static('.tmp'))
        .use(connect.directory('app'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

// serve
gulp.task('serve', ['connect'], function () {
    require('opn')('http://localhost:9000');
});

// inject bower components
gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;

    // TODO: only change this in layout
    gulp.src('app/*.jade')
        .pipe(wiredep({
            directory: 'app/bower_components'
        }))
        .pipe(gulp.dest('app'));
});

// watch
gulp.task('watch', ['connect', 'serve'], function () {
    var server = ${symbol_dollar}.livereload();

    // watch for changes

    gulp.watch([
        '.tmp/**/*.html',
        '.tmp/styles/**/*.css',
        '.tmp/scripts/**/*.js',
        'app/scripts/**/*.js',
        'app/images/**/*'
    ]).on('change', function (file) {
        server.changed(file.path);
    });

    gulp.watch('app/styles/**/*.less', ['styles']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('app/content/**/*.md', ['jade']);
    gulp.watch('app/**/*.jade', ['jade']);
    gulp.watch('app/po/*.po', ['translations']);
    gulp.watch('bower.json', ['wiredep']);
    gulp.watch('gulpfile.js', ['build']);
});
