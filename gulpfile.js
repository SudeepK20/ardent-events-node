
var serverPort  = 3000,
	gulp        = require('gulp'),
	addsrc      = require('gulp-add-src'),
	browserSync = require('browser-sync').create(),
	concat      = require('gulp-concat'),
	cssnano     = require('gulp-cssnano'),
	gulpif      = require('gulp-if'),
	fallback    = require('connect-history-api-fallback'),
	filter      = require('gulp-filter'),
	jshint      = require('gulp-jshint'),
	plumber     = require('gulp-plumber'),
	reload      = browserSync.reload,
	rename      = require('gulp-rename'),
	rev         = require('gulp-rev'),
	revReplace  = require('gulp-rev-replace'),
	rimraf      = require('gulp-rimraf'),
	sass        = require('gulp-sass'),
	sassGlob    = require('gulp-css-globbing'),
	sourcemaps  = require('gulp-sourcemaps'),
	stylish     = require('jshint-stylish'),
	uglify      = require('gulp-uglify'),
	useref      = require('gulp-useref'),
	zip         = require('gulp-zip');

/*=============================
=            PATHS            =
=============================*/

var src = {

	fonts    : [
		'src/assets/fonts/**/*.*',
	],

	images   : 'src/assets/img/**/*.*',

	html	 : {
		index    : 'src/index.html',
		views    : 'src/components/**/views/*.html'
	},

	scripts  : [
		'src/app.js',
		'src/components/**/*-module.js',
		'src/components/**/*-routes.js',
		'src/components/**/*-filters.js',
		'src/components/**/*-service.js',
		'src/components/**/*-directive.js',
		'src/components/**/*-controller.js',

	],

	styles   : {

		src  : [
			'src/assets/css/bootstrap.css',
			'src/assets/css/bootstrap.min.css',
			'src/assets/css/business-casual.css'
		],

		// includes: [
		// 	'src/assets/css/'
		// ]
	},

	data   : 'src/assets/data/*.*',
}

var app = {

	all     : 'app/**/*.*',
	fonts   : 'app/fonts',
	images  : 'app/images',
	index   : 'app/index.html',
	views   : 'app/views',
	root    : 'app/',
	scripts : 'app/scripts',
	styles  : 'app/styles',
	data	: 'app/data',
}

// var release = {
// 	all     : 'release/**/*.*',
// 	fonts   : 'release/fonts',
// 	images  : 'release/images',
// 	index   : 'release/index.html',
// 	views   : 'release/views',
// 	root    : 'release/',
// 	scripts : 'release/scripts',
// 	styles  : 'release/styles',
// 	data	: 'release/data'
// }


/*=============================
=            TASKS            =
=============================*/


gulp.task('html-index', function () {

	var assets = useref.assets();

    return gulp.src(src.html.index)
    	.pipe(assets)
    	.pipe(plumber())
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest(app.root));
});


gulp.task('html-views', function () {

	return gulp.src(src.html.views)
	    .pipe(rename({dirname: ''}))
	    .pipe(gulp.dest(app.views));
});


gulp.task('scripts', function () {

	//Only handles local src js
	return gulp.src(src.scripts)
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(app.scripts))
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat('app.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(app.scripts));
});


gulp.task('styles', function () {

	return gulp.src(src.styles.src)
		.pipe(plumber())
		
		.pipe(sass({
			outputStyle: 'expanded',
			includePaths: src.styles.includes
		}))
		.pipe(concat('app.css'))
		.pipe(gulp.dest(app.styles))
		.pipe(cssnano())
		.pipe(sourcemaps.init())
		.pipe(rename('app.min.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(app.styles))
});


gulp.task("fonts", function() {
	return gulp.src(src.fonts)
		.pipe(gulp.dest(app.fonts))
});


gulp.task("images", function(){
	return gulp.src(src.images)
		.pipe(gulp.dest(app.images))
});

gulp.task("data", function(){
	return gulp.src(src.data)
		.pipe(gulp.dest(app.data))
});


gulp.task('watch', function () {

	gulp.watch(src.styles.src, ['styles']);
	gulp.watch(src.html.index, ['html-index']);
	gulp.watch(src.html.views, ['html-views']);
	gulp.watch(src.scripts, ['scripts']);
	gulp.watch(src.fonts, ['fonts']);
	gulp.watch(src.images, ['images']);
	gulp.watch(src.data, ['data']);
});


gulp.task('sync', function () {

    browserSync.init({
        port     : serverPort,
        files    : app.all,
        logLevel : 'silent', // info, debug, warn ,silent
		server   : {
			baseDir: app.root,
			middleware: [fallback()]
        }
	})
});


gulp.task('clean-rev', function () {

    return gulp.src([app.scripts+'/*-*.min.js', 
    				 app.styles+'/*-*.min.css'])
        .pipe(rimraf())
})


gulp.task('rev', ['clean-rev'], function () {

    var jsFilter = filter("**/*.js", {restore: true});
    var cssFilter = filter("**/*.css", {restore: true});
    var indexFilter = filter('index.html', {restore: true});

    return gulp.src([app.scripts+'/*.min.js', 
    		  		 app.styles+'/*.min.css'])
        .pipe(rev())
        .pipe(addsrc(app.index))
        .pipe(revReplace())
        // JS
        .pipe(jsFilter)
        .pipe(gulp.dest(app.scripts))
        .pipe(jsFilter.restore)
        // CSS
        .pipe(cssFilter)
        .pipe(gulp.dest(app.styles))
        .pipe(cssFilter.restore)
        // INDEX
        .pipe(indexFilter)
        .pipe(gulp.dest(app.root));
});

gulp.task('test', function() {
	
    // karma.start({
    //     configFile: __dirname + '/karma.conf.js',
    //     singleRun: true
    // }, 
    // function(karmaExitStatus)
    // {
    // });
})

gulp.task('build', ['html-index', 'html-views', 'scripts', 'styles', 'fonts', 'images', 'data']);
gulp.task('default', ['build']);
gulp.task('start', ['build', 'watch', 'sync']);

gulp.task('release', ['rev'], function () {
	
	return gulp.src(app.all)
        .pipe(zip('release.zip'))
        .pipe(gulp.dest('release/'));
});

gulp.task('dev-release', ['rev'], function () {
	
	return gulp.src(app.all)
        .pipe(zip('dev-release.zip'))
        .pipe(gulp.dest('release/'));
});