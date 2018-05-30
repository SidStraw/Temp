$(document).ready(function () {
    $('img[alt*="載入中"]').hide();//隱藏讀取轉圈
    $('img[src*="_card_"]').addClass("addBorderRadius");//古法圖片動態


    $('a[href*=#]:not([href=#])').click(function () {
        var target = $(this.hash);
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    });// 錨點滑動

})