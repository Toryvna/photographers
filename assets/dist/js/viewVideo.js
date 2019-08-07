$(document).ready(function(){

    // просмотр video
    $('.open-viewVideo').on("click",function(){
        $('.overlay-viewVideo').addClass('active');
        $.lockBody();
    });
    $('.overlay-viewVideo .closeBtn, .overlay-viewVideo .close').on("click",function(){
        $('.overlay-viewVideo').removeClass('active');
        $(".video-js")[0].player.pause();
        $.unlockBody();
    });

    //проверка на IOS Safari
    function iOSversion() {
        
        var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
        var iOS = /iPhone/.test(navigator.userAgent) && !window.MSStream;
    
        if (isSafari && iOS) {
            $('.viewVideo__popup').addClass('ios');
        } 
    }
    iOSversion();

    //проверка на пустой инпут при добавлении комментария
    $( ".viewVideo__popup .addComment textarea" ).keyup(function() {
        if ($(this).val() != ''){
            $('.viewVideo__popup .form__button button').removeClass('disable');
        } else{
            $('.viewVideo__popup .form__button button').addClass('disable');
        }
    });//lock,unlock body на телефоне
    var $docEl = $('html, body'),
    $wrap = $('body'),
    scrollTop;

    $.lockBody = function() {
        if(window.pageYOffset) {
        scrollTop = window.pageYOffset;
        
        $wrap.css({
            top: - (scrollTop)
        });
        }

        $docEl.css({
            height: "100%",
            overflow: "hidden"
        });
    }

    $.unlockBody = function() {
        $docEl.css({
            height: "",
            overflow: ""
        });

        $wrap.css({
            top: ''
        });

        window.scrollTo(0, scrollTop);
        window.setTimeout(function () {
            scrollTop = null;
        }, 0);

    }

});