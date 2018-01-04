var gulp = require('gulp');
var cucumber = require('gulp-cucumber');
const shell = require('gulp-shell')
var runSequence = require('run-sequence');

gulp.task('test', function(cb) {
    return gulp.src('test/features/*')
        .pipe(cucumber({
            'steps': 'features/step_definitions/*.js',
            'format': '',
            cb
        }));

});


gulp.task('report', () => {
    return gulp.src('test/outputReport.js', { read: false })
        .pipe(shell([
            'node ./test/outputReport.js'
        ]))
})

gulp.task('finalreport', function(cb) {
    runSequence('test',
        'report',
        cb);
});