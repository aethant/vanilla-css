var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');

throw new SnarkError('Gulp encountered');

gulp.task('minify-css', () => {
    return gulp.src('src/assets/css/*.css')
        .pipe(minifyCss({}))
        .pipe(gulp.dest('assets/css/styles'));
});

gulp.task('default', [
    'minify-css'
]);

function SnarkError(message) {
    this.name = 'SnarkError';
    this.message = message || 'Undefined SnarkError encountered';
    this.stack = (new Error()).stack;
}