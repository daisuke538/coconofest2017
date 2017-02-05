$( function() {
  var windowWidth = 0;
  var scrollCount = 0;
  var offsetLeft = 0;
  var navWidth = 0;
  var fadeTime = 700;
  var resizeTimer = null;
  var scrollTimer = null;

  var navMask = $( '#nav-mask' );
  var arrowLeft = $( '#arrow-left' );
  var arrowRight = $( '#arrow-right' );

  //////////////////////////
  // メニューの両端に矢印表示 //
  //////////////////////////

  ///// 初期状態 /////

  // ウィンドウ横幅を取得
  windowWidth = $( window ).width();
  $( '#windowWidth' ).text( 'windowWidth: ' + windowWidth );

  // navのスクロール分含む横幅を取得
  navWidth = document.getElementById( 'nav-mask' ).scrollWidth;
  $( '#navWidth' ).text( 'navWidth: ' + navWidth );

  // 横スクロールが起きない場合
  if( navWidth == windowWidth ) {
    arrowRight.css( 'display', 'none' );
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
        arrowLeft.css( 'display', 'none' );
        arrowRight.css( 'display', 'none' );
      } else if( navWidth > windowWidth ) {
        arrowRight.css( 'display', 'block' );
      }
    }, 250 );
  });

  ///// 横スクロール時 /////

  navMask.scroll( function() {
    clearTimeout( scrollTimer );

    scrollCount = $( this ).scrollLeft();
    offsetLeft = $( this ).offset().left;
    navWidth = this.scrollWidth;

    scrollTimer = setTimeout( function() {
      // 右にスクロールした場合
      if( scrollCount > 0 ) {
        // 左の矢印を表示する
        arrowLeft.fadeIn( fadeTime );
      }

      // 左端に到達した場合
      if( scrollCount == 0 ) {
        // 左の矢印を非表示にする
        arrowLeft.fadeOut( fadeTime );
      }

      // 右端に到達した場合
      if( navWidth == windowWidth + scrollCount ) {
        arrowRight.fadeOut( fadeTime );
      } else {
        arrowRight.fadeIn( fadeTime );
      }

      $( '#pixcel' ).text( 'scrollCount: ' + scrollCount );
      $( '#offset' ).text( 'offsetLeft: ' + offsetLeft );
    }, 250 );
  });

  ////////////////////////////////////
  // メニュー両端の矢印タップでスクロール //
  ////////////////////////////////////
  arrowLeft.click( function() {
    navMask.animate( { scrollLeft: 0 }, 350, 'swing' );
    return false;
  });

  arrowRight.click( function() {
    navMask.animate( { scrollLeft: navWidth }, 1000, 'swing' );
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

  //////////////////////////////////
  // メニューにアニメーションで下線付加 //
  //////////////////////////////////

  var swiper = new Swiper( '.swiper-container', {
        //pagination: '.swiper-pagination',
        //nextButton: '.swiper-button-next',
        //prevButton: '.swiper-button-prev',
        //paginationClickable: true,
        //spaceBetween: 30,
        mode: 'horizontal',
        centeredSlides: true,
        speed: 1000, /* スライドが流れる時間 */
        autoplay: 2500, /* スライドを表示する時間 */
        autoplayDisableOnInteraction: false,
        loop: true
  });

  //////////////////////
  // LATEST LOAD MORE //
  //////////////////////
  var loadMore = $( '.load-more' );
  var articleCard = $( '#latest-article-inner .article-card' );
  var nowViewNum = 3;
  var maxViewNum = articleCard.length;
  var addViewNum = 3;
  var i = 0;

  var screenWidth = window.innerWidth;
  
  if ( screenWidth < 760 ) {
    nowViewNum = 4;
    addViewNum = 4;
  }
  
  // 初回の記事表示数を設定
  articleCard.each( function() {
    if ( i < nowViewNum ) {
      $( this ).css( 'display', 'inline' );
    } else {
      $( this ).css( 'display', 'none' );
    }

    i++;
  });
  
  // ボタンをクリックしたときの挙動
  loadMore.click( function() {
    nowViewNum += addViewNum;

    if ( nowViewNum >= maxViewNum ) {
      nowViewNum = maxViewNum;
      loadMore.fadeOut( 500 );
    }

    $( '#latest-article-inner .article-card:lt(' + nowViewNum + ')' ).slideDown( 'slow' ).show();
  });

  //////////////
  // PAGE TOP //
  //////////////
  var topBtn = $( '#page-top' );
  //topBtn.hide();
    
  // ◇ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click( function(){
    $( 'body,html' ).animate( { scrollTop: 0 },500 );
    return false;
  });
});
