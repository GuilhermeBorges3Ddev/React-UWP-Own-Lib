var gulp = require ('gulp');
var sass = require ('gulp-sass');

gulp.task('sass', gulp.series(function(){
    return gulp.src(['node_modules/bootstrap/scss/*.scss','src/assets/scss/*.scss'])
    .pipe(sass()) //convert .sass in .css
    .pipe(gulp.dest('src/assets/css'));
}));

gulp.task('watch', gulp.series(function(){
    gulp.watch(['node_modules/bootstrap/scss/*.scss','src/assets/scss/*.scss'], gulp.parallel(['sass']));
}));

gulp.task('default',gulp.series(['sass','watch']));