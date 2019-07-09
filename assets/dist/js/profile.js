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

    //создание беседы
    $('.creationChat_popup .closeBtn').on('click', function () {
        $(this).parent().removeClass('open');
    });

    $('.creationChat').on('click', function (ev) {
        $(".creationChat_popup").toggleClass('open');
        console.log('click');
        if (screen.width > 1024) {
            var x = ev.clientX;
            var y = ev.clientY;
            $(".creationChat_popup").css({
                "top": y + 20,
                // "right": 'inherit',
                "left": x - 396,
            });
        } else {
            var y = ev.clientY;
            $(".creationChat_popup").css({
                "top": y + 20,
            });
        }
    });

    //Выбавть файлы
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
    $('.overlayPopupThanks .close').on("click", function () {
        $('.overlayPopupThanks').removeClass('active');
    });
});
