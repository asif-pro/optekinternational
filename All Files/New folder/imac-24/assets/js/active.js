(function ($) {
    "use strict";

    // sticky menu
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 36) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });

    // mobile menu
    $(function () {
        $('.main_menu').prepend("<span class='close_menu'></span>");
        var getProBtn = $('.a_start > ul > li');
        $(".navbar-toggler").on('click', () => {
            $(".main_menu").addClass('open_menu')
            if ($(window).width() > 576) {
                $('.main_menu > #navBar').append(getProBtn);
            }
        })
        $(".close_menu").on('click', () => {
            $(".main_menu").removeClass('open_menu')
            if ($(window).width() > 576) {
                $('.a_start > ul').append(getProBtn);
            }
        })

        if ($(window).width() < 576) {
            $('.main_menu > .navBar').append(getProBtn);
            $(getProBtn).clone()
                .insertBefore('.banner-content > .btn')
                .children().text("get pro plugin");
        }

    });



})(jQuery);