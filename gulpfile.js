var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var cssnext = require( 'gulp-cssnext' );
var ghPages = require( 'gulp-gh-pages' );

var commonPath = 'assets/';

var paths = {
  //'scss': 'assets/stylesheets/',
  //'css': 'build/stylesheets/'
  'scss': commonPath + 'stylesheets/',
  'css': 'build/stylesheets/'
}

gulp.task('default', function(){
  //
});

// jsタスクを定義する
gulp.task( 'js', function() {
  // タスクを実行するファイルを指定する
  // 実行する処理をpipeで繋いでいく（圧縮したファイルを build/javascripts に出力する）
  gulp.src( commonPath + 'javascripts/**/*.js' ).pipe( gulp.dest( 'build/javascripts' ) );
});

gulp.task( 'scss', function() {
  // scssファイルをcssファイルに変換して圧縮する
  // cssnextは、CSSの先行実装を現状のブラウザが解釈できるCSSに変換する
  gulp.src( paths.scss + '**/*.scss' ).pipe( sass() ).on( 'error', function( err ) {
      console.log( err.message );
    }).pipe( cssnext() ).pipe( gulp.dest( paths.css ) );
});

gulp.task( 'images', function() {
  gulp.src( commonPath + 'images/**/*' ).pipe( gulp.dest( 'build/images' ) );
});

// buildタスクを実行すると、jsタスク、scssタスクが実行される
gulp.task( 'build', ['js', 'scss', 'images'], function() {
});

gulp.task( 'watch', function() {
  // jsファイルの変更を監視し、変更されたときにjsタスクが実行される
  gulp.watch( commonPath + 'javascripts/**/*.js', ['js'] );
  // scssファイルの変更を監視し、変更されたときにscssタスクが実行される
  gulp.watch( commonPath + 'stylesheets/**/*.scss', ['scss'] );
  gulp.watch( commonPath + 'images/**/*', ['images'] );
});

gulp.task( 'deploy', function() {
  return gulp.src( './build/**/*' )
    .pipe( ghPages() );
});
