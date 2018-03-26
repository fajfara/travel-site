var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('html', function(){
  console.log("Changes have been made to the html file!");
});

gulp.task('styles', function(){
  console.log("Changes have been made to the css file!");
});


gulp.task('watch', function(){

  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/*.css'), function(){
    gulp.start('styles');
  };

});
