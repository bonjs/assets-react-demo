

var elixir = require('laravel-elixir');
elixir(function (mix) {
	
	//ext-require.js
    mix.scripts([
        './src/assets/ext/src/Ext.js',
        './src/assets/ext/src/lang/Object.js',
        './src/assets/ext/src/lang/Array.js',
        './src/assets/ext/src/lang/Function.js',
        './src/assets/ext/src/class/Base.js',
        './src/assets/ext/src/class/Class.js',
        './src/assets/ext/src/class/ClassManager.js',
        './src/assets/ext/src/class/Loader.js',
    ], 'public/ext-require.js');
    
    
    mix.scripts([
        './src/assets/core/Event.js',
        './src/assets/core/RoleMap.js',
        './src/assets/core/Observable.js',
        './src/assets/core/Component.js',
        './src/assets/core/DomHelper.js',
        './src/assets/core/Template.js',
        './src/assets/core/XTemplate.js',
        './src/assets/core/vdt.js',
        './src/assets/core/DataView.js',
        './src/assets/core/DataViewVdt.js',
    ], 'public/core.js');
    
});
 

var gulp = require("gulp"),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream');

var m = [
	'./src/js/User.js',
	'./src/js/Dog.js'
];
gulp.task('react', function() {
    browserify(m)
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('jsx', function(){
	gulp.watch(['./src/js/*.js'], ['react']);
});


/*
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');

gulp.task('react', function () {
    return gulp.src('./src/a.js')
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('jsx', function(){
	gulp.watch(['./src/*.js'], ['react']);
});
*/


/*
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var reactify = require('reactify');

gulp.task('javascript', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: ['./src/a.js','./src/b.js'],
    debug: true,
    // defining transforms here will avoid crashing your stream
    transform: [reactify]
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        //.pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));
});

*/

