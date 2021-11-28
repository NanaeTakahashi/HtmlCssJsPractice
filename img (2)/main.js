$(function(){
  
    // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function(){
      
      let href= $(this).attr("href");
      
      let target = $(href == "#" || href == "" ? 'html' : href);
      // トップからジャンプ先の要素までの距離を取得
      let position = target.offset().top;
      // animateでスムーススクロールを行う
      // 600はスクロール速度で単位はミリ秒
      $("html, body").animate({scrollTop:position}, 600, "swing");
      return false;
    });
  })