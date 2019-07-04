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

});

$(window).resize(function(){

    var footerHeight = $('footer').height();
    var headerHeight = $('header').height();

    $('body').css({
        'padding-top': headerHeight,
        'padding-bottom': footerHeight
    });

});


