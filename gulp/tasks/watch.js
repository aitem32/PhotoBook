'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js.process'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.jade', $.gulp.series('jade'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy.image'));
    $.gulp.watch('./source/svg_try/*.svg', $.gulp.series('sprites'));
    $.gulp.watch('./source/fonts/*.*', $.gulp.series('fonts'));
    $.gulp.watch('.source/images/**/*.ico', $.gulp.series('favicon'));
    // $.gulp.watch('./source/style/**/*.*', $.gulp.series('concatCSS'));
  });
};
