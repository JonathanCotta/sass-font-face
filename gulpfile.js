var gulp = require('gulp');
var minify = require('gulp-csso');
var sass = require('gulp-sass');
var woff2 = require('gulp-ttf2woff2');
var eot = require('gulp-ttf2eot');
var rename = require('gulp-rename');


gulp.task("default", ['watcher']);

gulp.task("sass", function(){
  gulp.src("./assets/sass/*.scss")
  .pipe(sass())
  .pipe(rename("style.css"))
  .pipe(gulp.dest("./assets/css"))
  .pipe(minify())
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest("./assets/css"));
});

gulp.task("font", function(){
  fontConvert(["roboto","caviar-dreams"]);
});

gulp.task("watcher", function(){
  gulp.watch("./assets/sass/*.scss", ['sass']);
});

function fontConvert(folders) {
  folders.forEach(function(f, index){
    gulp.src("./assets/font/"+ f +"/*.ttf")
    .pipe(woff2())
    .pipe(gulp.dest("./assets/font/"+ f +"/"));

    gulp.src("./assets/font/"+ f +"/*.ttf")
    .pipe(eot())
    .pipe(gulp.dest("./assets/font/"+ f +"/"));
  });
}
