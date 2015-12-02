var gulp = require('gulp');
var webpack = require('webpack');
var minifyCss = require('gulp-minify-css');
var util = require('gulp-util');


gulp.task('minify-css', () => {
    return gulp.src('src/assets/css/*.css')
        .pipe(minifyCss({}))
        .pipe(gulp.dest('assets/css/styles'));
});

gulp.task('default', [
    'webpack',
    'minify-css',
    'snarkError'
]);

gulp.task('webpack', cb => {
    var webpackConfig = {
        context: process.cwd(),
        entry: `./src/assets/js/index.js`,
        output: {
            path: `${__dirname}/assets/js`,
            filename: 'app.js'
        }
    }
    webpack(webpackConfig, (error, stats) => {
        if (error) throw new Error('Failed to bundle: ' + error);
        util.log('[webpack] successfully bundled')
    });
    
    cb();
});

gulp.task('snarkError', () => {
    throw new SnarkError('Gulp encountered');
});

function SnarkError(message) {
    this.name = 'SnarkError';
    this.message = message || 'Undefined SnarkError encountered';
    this.stack = (new Error()).stack;
}

