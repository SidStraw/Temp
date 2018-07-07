jQuery(document).ready(function () {//不可以用＄
    jQuery('p.price-as-configured span.price-label').text('售價：');//更改「價格如設定」
    jQuery('img[alt*="載入中"]').hide();//隱藏讀取轉圈
    jQuery('img[src*="_card_"]').addClass("addBorderRadius");//古法圖片動態


    jQuery('a[href*=#]:not([href=#])').click(function () {
        var target = jQuery(this.hash);
        jQuery('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    });// 錨點滑動

})