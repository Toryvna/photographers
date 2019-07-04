$(document).ready(function(){

    //open mobile menu
    $('.open-menu').on('click', function(){
        $('#mobile-mainMenu').addClass('show');
    });
    $('#mobile-mainMenu .closeBtn').on('click', function(){
        $('#mobile-mainMenu').removeClass('show');
    });

    //header search
    $('header form input').on('click', function(){
        $('#mobile-mainMenu').removeClass('show');
    });

    //full width search
    $('header form input').focus(function(){
        $(this).parent().addClass('full');
    });
    $('header form input').focusout(function(){
        $(this).parent().removeClass('full');
    });


    var footerHeight = $('footer').height();
    var headerHeight = $('header').height();

    $('body').css({
        'padding-top': headerHeight,
        'padding-bottom': footerHeight
    });

    //close notifications
    $('.notification .closeBtn').on('click', function(){
        $(this).parent().removeClass('show');
    });

    //close/open header notifications
    $('.notifications_popup-open').on('click', function(){
        $(".notifications_popup").toggleClass('open');
    });
    $('.notifications_popup .closeBtn').on('click', function(){
        $(this).parent().removeClass('open');
    });

    $('.notifications_popup-open').bind('click', function (ev) {
        if (screen.width > 1023 ) {
            var x = ev.clientX ;
            $(".notifications_popup").css('left', x - 177);
        }
    });

});

$(window).resize(function(){

    var footerHeight = $('footer').height();
    var headerHeight = $('header').height();

    $('body').css({
        'padding-top': headerHeight,
        'padding-bottom': footerHeight
    });

});


