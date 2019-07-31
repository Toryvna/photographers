$(document).ready(function () {

    jcf.replaceAll();

    $('.nav ul').slick({
        responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
            }
        }, {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 2,
                variableWidth: true,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
            }
        }, ]
    });
    $('.financial-top ul').slick({
        responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                variableWidth: true,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
            }
        }, {
            breakpoint: 768,
            settings: {
                infinite: true,
                adaptiveHeight: true,
                variableWidth: true,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
            }
        }, ]
    });

    if ($(window).width() >= 768) {

        $('.video-text p').matchHeight({
            byRow: false
        });

    }

    //Tabs
    $('.filter-items').on('click', function () {
        var dataTab = $(this).data('tab');
        $('.filter-items').removeClass('active');
        $('.tab-item').removeClass('active');
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
    });

    //По клику перекрашивает 
    $('.heart').on('click', function () {
        $(this).find('.icon-icon3').toggleClass('color');
    });
    $('.message').on('click', function () {
        $(this).find('.icon-icon10').toggleClass('color');
    });
    $('.arrow').on('click', function () {
        $(this).find('.icon-icon9').toggleClass('color');
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
    $('.overlayPopupThanks .close').on("click", function () {
        $('.overlayPopupThanks').removeClass('active');
    });

    //добавить опции
    $('.add-options').on('click', function(){
        $(this).closest('.projects-item').find('.create-promotion').show();
    })
    $('.existing-promotion .extend-option, .adding-options').on('click', function(){
        $(this).closest('.projects-item').find('.existing-promotion').hide();
        $(this).closest('.projects-item').find('.create-promotion').show();
    })

    //продлить опцию
    $('.create-promotion .extend-option').on('click', function(){
        $(this).closest('.item').find('.hidden-blk').show();
    });

    //попапы добавления отзыва
    $('.open-leaveFeedback').on("click", function () {
        $('.overlay-leaveFeedback').addClass('active');
    });
    $('.overlay-leaveFeedback .closeBtn, .overlay-leaveFeedback .close').on("click", function () {
        $('.overlay-leaveFeedback').removeClass('active');
    });
    $('.open-publishedPopup').on("click", function () {
        $('.overlay-publishedPopup').addClass('active');
    });
    $('.overlay-publishedPopup .closeBtn, .overlay-publishedPopup .close').on("click", function () {
        $('.overlay-publishedPopup').removeClass('active');
    });

    //рейтинг в отзыве
    $('.leaveFeedback__popup input[name=stars]').on('change', function() {
        if($('input[name=stars]:checked').val() == 1){
            console.log('1');
        }
        var a = Number($('input[name=stars]:checked').val());
        $('.rating-label span').hide();
        switch (a) {
            case 1:
                $('.rating-label span.value1').show();
                break;
            case 2:
                $('.rating-label span.value2').show();
                break;
            case 3:
                $('.rating-label span.value3').show();
                break;
            case 4:
                $('.rating-label span.value4').show();
                break;
            case 5:
                $('.rating-label span.value5').show();
                break;
        }
     });

     //ошибка, если нельзя оставить отзыв
     $('.leaveFeedback-btn .disable').on('click', function(){
         $(this).parent().find('.error-msg').show();
     });


     $('.notification .cancel').on('click', function(){
        $(this).parent().find('a').hide();
        $(this).parent().find('.text-notification').show();
     });
     
});
