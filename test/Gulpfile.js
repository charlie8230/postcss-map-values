var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
 var rename = require("gulp-rename");
sass.compiler = require('node-sass');
var vals = require('./values.json');

var mapvalues = require('../index');
var plugins =[mapvalues({valueMap: vals, log: true})];
gulp.task('default',()=>{
    return gulp.src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(rename({extname:'.scss'}))
    .pipe(gulp.dest('./dist/'));
});