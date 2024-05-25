$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,            // 啟用自動播放
        autoplaySpeed: 1000,       // 自動播放間隔2000毫秒
        speed: 800,                // 轉場速度500毫秒
        fade: true,                // 使用淡入淡出效果
        dots: false,                // 顯示導航點
        infinite: true,            // 無限循環輪播
        slidesToShow: 1,           // 一次顯示一張圖片
        slidesToScroll: 1          // 每次滾動1張圖片
    });
});
