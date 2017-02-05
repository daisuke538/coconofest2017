var gulp         = require( 'gulp' );
var sass         = require( 'gulp-sass' );
var scss         = require( 'node-sass' );
var cssnext      = require( 'gulp-cssnext' );
var postcss      = require( 'gulp-postcss' );
var cssnext      = require( 'postcss-cssnext' );
var ghPages      = require( 'gulp-gh-pages' );
var glob         = require( 'glob-all' );
var filelog      = require( 'gulp-filelog' );
var changed      = require( 'gulp-changed' );
var imageResize  = require( 'gulp-image-resize' );
var imagemin     = require( 'gulp-imagemin' );
var jpegoptim    = require( 'imagemin-jpegoptim' );
var pngquant     = require( 'imagemin-pngquant' );
//var jpegtran    = require( 'imagemin-jpegtran' );
//var optipng     = require( 'imagemin-optipng' );
var concat       = require( 'gulp-concat' );
var autoprefixer = require( 'gulp-autoprefixer' );
var pleeease     = require( 'gulp-pleeease' );
var rename       = require( 'gulp-rename' );
var plumber      = require( 'gulp-plumber' );
var uglify       = require( 'gulp-uglify' );
var browserSync  = require( 'browser-sync' ).create();



///////////
// ビルド //
///////////
var commonPath = 'source/';

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
  gulp.src( commonPath + 'javascripts/**/*.js' )
      .pipe( uglify() )
      .pipe( gulp.dest( 'build/javascripts' ) );
});

gulp.task( 'scss', function() {
  var processors = [
      cssnext()
  ];
  // scssファイルをcssファイルに変換して圧縮する
  // cssnextは、CSSの先行実装を現状のブラウザが解釈できるCSSに変換する
  gulp.src( paths.scss + '**/*.scss' )
      .pipe( plumber({
        errorHandler: function( err ) {
          console.log( err.messageFormatted );
          this.emit( 'end' );
        }
      }) )
      .pipe( sass({
        style: 'compact'
      }) )
      .pipe( pleeease({
        sass: true,
        autoprefixer: true,
        minifier: true
      }) )
      .pipe( postcss( processors ) )
      .pipe( autoprefixer() )
      .pipe( rename( 'style.css' ) )
      .pipe( gulp.dest( paths.css ) );
});

gulp.task( 'css', function() {
  gulp.src( paths.scss + '**/*.css' )
      .pipe( gulp.dest( paths.css ) );

});

gulp.task( 'images', function() {
  gulp.src( commonPath + 'images/**/*' ).pipe( gulp.dest( 'build/images' ) );
});

// buildタスクを実行すると、jsタスク、scssタスクが実行される
gulp.task( 'build', ['js', 'scss', 'css', 'images'], function() {
});

gulp.task( 'watch', function() {
  // jsファイルの変更を監視し、変更されたときにjsタスクが実行される
  gulp.watch( commonPath + 'javascripts/**/*.js', ['js'] );
  // scssファイルの変更を監視し、変更されたときにscssタスクが実行される
  gulp.watch( commonPath + 'stylesheets/**/*.scss', ['scss'] );
  gulp.watch( commonPath + 'images/**/*', ['images'] );
});



/////////////
// デプロイ //
/////////////
gulp.task( 'deploy', function() {
  return gulp.src( './build/**/*' ).pipe( ghPages() );
});



/////////////
// 画像圧縮 //
/////////////
var imageminPaths = {
  'inputDir' : 'build/images/',
  'outputDir': 'build/images/'
}

gulp.task( 'imagemin', function() {
  gulp.src( imageminPaths.inputDir + '*.jpg' )
      .pipe( imagemin({
            use: [jpegoptim({
              progressive: true,
              size: 70
            })]
        }) )
      .pipe( gulp.dest( imageminPaths.outputDir ) );
  gulp.src( imageminPaths.inputDir + '*.jpeg' )
      .pipe( imagemin({
            use: [jpegoptim({
              progressive: true
            })]
        }) )
      .pipe( gulp.dest( imageminPaths.outputDir ) );
  gulp.src( imageminPaths.inputDir + '*.png' )
      .pipe( imagemin({
            use: [pngquant({
              speed: 8,
              quality: 70
            })]
        }) )
      .pipe( gulp.dest( imageminPaths.outputDir ) );
  gulp.src( imageminPaths.inputDir + '*.gif' )
      .pipe( imagemin() )
      .pipe( gulp.dest( imageminPaths.outputDir ) );
  gulp.src( imageminPaths.inputDir + '*.svg' )
      .pipe( imagemin() )
      .pipe( gulp.dest( imageminPaths.outputDir ) );
});


//////////////////////////////////
// サムネイル（アイキャッチ）画像生成 //
//////////////////////////////////
var imgPaths = {
  srcDir : 'source',
  prvDir : 'prv',
  dstDir : 'prd',
  uploadsDir: '/posts'
}

gulp.task( 'image-resize:eyecatch', function() {
  var srcGlobs   = glob.sync( 'source/posts/**/images/' );
  var srcDir     = 'origin';
  var dstDir     = 'eyecatch';
  var targetFile = '/*.+(jpg|jpeg|png|gif)';

  var resizeOptions = {
    // 記事のサムネイル画像サイズを設定
    width       : 510,
    height      : 340,
    gravity     : 'Center',
    crop        : true,
    upscale     : false,
    imageMagick : true
  };

  var imageminOptions = {
    optimizationLevel: 7
  };

  for( var item in srcGlobs ) {
    var srcGlob = srcGlobs[item] + srcDir + targetFile;
    var dstGlob = srcGlobs[item] + dstDir;

    gulp.src( srcGlob )
      .pipe( changed( dstGlob ) )
      .pipe( imageResize( resizeOptions ) )
      .pipe( rename( 'eyecatch.jpg' ) )
      .pipe( gulp.dest( dstGlob ) )
      .pipe( filelog() );
  }
});

gulp.task( 'image-resize', ['image-resize:eyecatch'] );



//////////////////
// browser sync //
//////////////////
gulp.task( 'server', function() {
  browserSync.init({
    server: {
      baseDir: './source'
    }
  })
});

gulp.task( 'reload', function() {
  browserSync.reload();
});
