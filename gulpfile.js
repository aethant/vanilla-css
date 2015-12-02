var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');

gulp.task('minify-css', () => {
    return gulp.src('src/assets/css/*.css')
        .pipe(minifyCss({}))
        .pipe(gulp.dest('assets/css/styles'));
});

gulp.task('default', [
    'minify-css'
]);