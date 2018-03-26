var gulp = require('gulp');

gulp.task('html', function(){
  console.log("Changes have been made to the html file!");
});

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css').pipe(gulp.dest('./app/assets/temp/styles'));
});


gulp.task('watch', function() {

  gulp.watch('./app/index.html', function(){
    gulp.start('html');
  });

  gulp.watch('app/assets/styles/**/*.css'), function(){
    gulp.start('styles');
  };

});
