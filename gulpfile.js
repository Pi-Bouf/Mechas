var gulp = require('gulp');
var merge = require('merge-stream');

gulp.task('materialize', function() {
    return gulp.src(['node_modules/materialize-css/dist/**/*'])
        .pipe(gulp.dest('public'));
});

gulp.task('jquery', function() {
    return gulp.src(['node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('public/js/'));
});

gulp.task('mdi', function() {
    var css = gulp.src(['node_modules/mdi/css/materialdesignicons.min.css'])
        .pipe(gulp.dest('public/css/'));

    var font = gulp.src(['node_modules/mdi/fonts/*'])
        .pipe(gulp.dest('public/fonts/'));

    return merge(css, font);
});

gulp.task('move', ['materialize', 'jquery', 'mdi']);