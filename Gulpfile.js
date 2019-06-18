var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');


var mapvalues = require('./index');
var plugins =[mapvalues];
gulp.task('default',()=>{
    return gulp.src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dist/'));
});