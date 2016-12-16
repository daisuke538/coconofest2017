$( function() {
  //////////////////////////
  // メニューの両端に矢印表示 //
  //////////////////////////

  var windowWidth = 0;
  var scrollCount = 0;
  var offsetLeft = 0;
  var navWidth = 0;
  var fadeTime = 700;
  var resizeTimer = null;
  var scrollTimer = null;

  ///// 初期状態 /////

  // ウィンドウ横幅を取得
  windowWidth = $( window ).width();
  $( '#windowWidth' ).text( 'windowWidth: ' + windowWidth );

  // navのスクロール分含む横幅を取得
  navWidth = document.getElementById( 'nav-mask' ).scrollWidth;
  $( '#navWidth' ).text( 'navWidth: ' + navWidth );

  // 横スクロールが起きない場合
  if( navWidth == windowWidth ) {
    $( '#arrow-right' ).css( 'display', 'none' );
  }

  ///// ウィンドウリサイズ時 /////

  $( window ).resize( function() {
    clearTimeout( resizeTimer );

    resizeTimer = setTimeout( function() {
      // ウィンドウ横幅を取得
      windowWidth = $( window ).width();
      $( '#windowWidth' ).text( 'windowWidth: ' + windowWidth );

      // navのスクロール分含む横幅を取得
      navWidth = document.getElementById( 'nav-mask' ).scrollWidth;
      $( '#navWidth' ).text( 'navWidth: ' + navWidth );

      // 横スクロールが起きない場合
      if( navWidth == windowWidth ) {
        $( '#arrow-left' ).css( 'display', 'none' );
        $( '#arrow-right' ).css( 'display', 'none' );
      } else if( navWidth > windowWidth ) {
        $( '#arrow-right' ).css( 'display', 'block' );
      }
    }, 250 );
  });

  ///// 横スクロール時 /////

  $( '#nav-mask' ).scroll( function() {
    clearTimeout( scrollTimer );

    scrollCount = $( this ).scrollLeft();
    offsetLeft = $( this ).offset().left;
    navWidth = this.scrollWidth;

    scrollTimer = setTimeout( function() {
      // 右にスクロールした場合
      if( scrollCount > 0 ) {
        // 左の矢印を表示する
        $( '#arrow-left' ).fadeIn( fadeTime );
      }

      // 左端に到達した場合
      if( scrollCount == 0 ) {
        // 左の矢印を非表示にする
        $( '#arrow-left' ).fadeOut( fadeTime );
      }

      // 右端に到達した場合
      if( navWidth == windowWidth + scrollCount ) {
        $( '#arrow-right' ).fadeOut( fadeTime );
      } else {
        $( '#arrow-right' ).fadeIn( fadeTime );
      }

      $( '#pixcel' ).text( 'scrollCount: ' + scrollCount );
      $( '#offset' ).text( 'offsetLeft: ' + offsetLeft );
    }, 250 );
  });

  ////////////////////////////////////
  // メニュー両端の矢印タップでスクロール //
  ////////////////////////////////////

  $( '#arrow-left' ).click( function() {
    $( '#nav-mask' ).animate( { scrollLeft: 0 }, 350, 'swing' );
    return false;
  });

  $( '#arrow-right' ).click( function() {
    $( '#nav-mask' ).animate( { scrollLeft: navWidth }, 1000, 'swing' );
    return false;
  });

  //////////////////////////////////
  // メニューにアニメーションで下線付加 //
  //////////////////////////////////
  var current        = $( '.current' );
  var nav_list       = $( '#nav-mask li' );
  var menu_under_bar = $( '#menu-under-bar' );

  // currentクラスの付け替え（表示中ページとメニューを紐付ける）
  nav_list.each(
    function( i ) {
      var link = $( location ).attr( 'href' ).split( '/' )[3];
      var url = $( this ).children( 'a' ).attr( 'href' ).split( '/' )[1];

      if( link == url ) {
        $( this ).addClass( 'current' );

        menu_under_bar.css({
          'width': $( this ).width(),
          'left' : $( this ).position().left
        });
      } else {
        $( this ).removeClass( 'current' );
      }
    }
  );

  // ホバー/非ホバー時のアンダーバーの動き
  nav_list.hover(
    // ホバー時
    function() {
      menu_under_bar.css({
        'width': $( this ).width(),
        'left' : $( this ).position().left
      });
    },
    // ホバー解除時
    function() {
      var elements = $( '.current' );

      menu_under_bar.css({
        'width': $( elements[0] ).width(),
        'left' : $( elements[0] ).position().left
      });
    }
  );
});
