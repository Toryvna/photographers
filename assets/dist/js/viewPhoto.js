$(document).ready(function(){

    // просмотр фото
    $('.open-viewPhoto').on("click",function(){
        $('.overlay-viewPhoto').addClass('active');
    });
    $('.overlay-viewPhoto .closeBtn, .overlay-viewPhoto .close').on("click",function(){
        $('.overlay-viewPhoto').removeClass('active');
    }); 

    //проверка на IOS Safari
    function iOSversion() {
        
        var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
        var iOS = /iPhone/.test(navigator.userAgent) && !window.MSStream;
    
        if (isSafari && iOS) {
            $('.viewPhoto__popup').addClass('ios');
        } 
    }
    iOSversion();



    //проверка на пустой инпут при добавлении комментария
    $( ".viewPhoto__popup .addComment textarea" ).keyup(function() {
        if ($(this).val() != ''){
            $('.viewPhoto__popup .form__button button').removeClass('disable');
        } else{
            $('.viewPhoto__popup .form__button button').addClass('disable');
        }
    });

});