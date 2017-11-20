$(document).ready(function() {
    // 设置轮播图自动滚动时间
    $('.carousel').carousel({
        interval: 2000
    });
    // 轮播图左右控制隐藏&显示
    $(".carousel-control").hide();
    $("#index-carousel").mouseover(function() {
        $(".carousel-control").show();
    });
    $("#index-carousel").mouseout(function() {
        $(".carousel-control").hide();
    });

    //侧边栏设置
    $("#mobile-nav-taggle").click(function() {
        var mobileMenu = $("#mobile-menu");
        var close = $(".close-button");
        if (mobileMenu.hasClass("show-nav")) {
            mobileMenu.addClass("hide-nav").removeClass("show-nav");
            close.addClass("hide-nav").removeClass("show-nav");

        } else {
            mobileMenu.addClass("show-nav").removeClass("hide-nav");
            close.addClass("show-nav").removeClass("hide-nav");

        }
        close.click(function() {
            mobileMenu.addClass("hide-nav").removeClass("show-nav");
            close.addClass("hide-nav").removeClass("show-nav");


        })
    })
});