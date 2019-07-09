$(document).ready(function () {

    jcf.replaceAll();

    // Резиновый textarea
    $('.checkTextarea').keyup(function () {
        $(this).css('height', '1px');
        $(this).css('height', '' + $(this).prop('scrollHeight') + "px");
    });

    //textarea
    $('.checkTextarea').keyup(function () {
        $(this).css('height', '1px');
        $(this).css('height', '' + $(this).prop('scrollHeight') + "px");
    });

    //adding photos slider
    $('.addingPhotos__slider').slick({
        infinite: true,
        variableWidth: true,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
    });

    //open "adding photo"
    $('.profile__addingPost textarea').focus(function () {
        $('.profile__adding-photos').addClass('open');
    });

    //Выбрать файлы
    $('.icon-paperclip').on("click", function () {
        $('.droprown-list').toggleClass('active');
    });

    //Попап поделиться 
    $('.shareBtn').on("click", function () {
        $('.overlayPopup').addClass('active');
    });
    $('.share_popup .closeBtn, .overlayPopup .close').on("click", function () {
        $('.overlayPopup').removeClass('active');
    });

    $('.button-send').on("click", function () {
        $('.overlayPopupThanks').addClass('active');
        $('.overlayPopup').removeClass('active');
    });
    $('.popup-thanks .closeBtn, .overlayPopupThanks .close').on("click", function () {
        $('.overlayPopupThanks').removeClass('active');
    });



});
