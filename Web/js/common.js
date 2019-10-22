$(document).ready(function () {
    // 次選單
    const $subNav = $('.subNav');
    $subNav.on('click', function () {
        $(this).toggleClass('active');
    });
    $subNav.hover(function () {
        $(this).toggleClass('active');
    });




    // 控制手機選單的開關
    $('#lnk-mb').on('click tap', function () {
        $('#lnk-mb').toggleClass("on");
        if (window.navHide) {
            clearTimeout(window.navHide);
            window.navHide = undefined;
        }

        window.navHide = setTimeout(function () {
            $('#lnk-mb').removeClass("on");
        }, 30000);
    });
});