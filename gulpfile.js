var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass111', function(){
  return gulp.src('src/assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/assets/css'))
});
gulp.watch('src/assets/scss/**/*.scss', ['sass111']);
