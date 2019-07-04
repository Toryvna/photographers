$(document).ready(function () {

    jcf.replaceAll();

    // Резиновый textarea
    $('.checkTextarea').keyup(function () {
        $(this).css('height', '1px');
        $(this).css('height', '' + $(this).prop('scrollHeight') + "px");
    });

    // Скрыть при клике меню с опциями на публицакии

    if ($(window).width() < 1025) {
        $(document).mouseup(function (e) {
            $('.publication_heading-options .arrowBtn').on('click', function () {
                $(this).parent().addClass('show');
            });
            var item = $('.publication_heading-options.show');
            if (!item.is(e.target) && item.has(e.target).length === 0) {
                item.removeClass('show');
            }
        });
    }

    $('.publication_heading-options a').on('click', function () {
        $('.publication_heading-options.show').removeClass('show');
        $(this).parent().toggleClass('show');
    });
    

    $('.likeBtn').on('click', function () {
        $(this).toggleClass('color');
    });
    $('.commentBtn').on('click', function () {
        $(this).toggleClass('color');
        $('.comment').toggleClass('active');

    });
    $('.shareBtn').on('click', function () {
        $(this).toggleClass('color');
    });

    // Комментарии

    $('.writeComment').on('click', function () {
        $('.messages-item').css('display', 'block');
        $('.comment').removeClass('active');
    });
    $('.addcomment').on('click', function () {
        $('.comment2').addClass('active');
    })


    //Редактирование публикации
    $('.edit').on('click', function () { // При нажатии на пункт редактировать появляются иконки для редактирования
        $('.pencil-edit').css('display', 'inline').on('click', function () {
            $('.publication_content-text').find('.text-edit').attr("contentEditable", "true"); // При нажатии на карандаш можно редактировать текст
        });
        $('.editing').css('display', 'flex');
        $('.close').css('display', 'block');
        $('.close').on('click', function () {
            $(this).parent(".gallery__image").css("display", "none"); // При нажатии на крестик удаляется фото
        })
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
    //adding videos slider
    $('.addingVideos__slider').slick({
        infinite: true,
        variableWidth: true,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
    });

    //open "adding photo"
    $('.select-photo').on('click', function(){
        $('.profile__adding-photos').toggleClass('open');
    });
    $('.select-video').on('click', function(){
        $('.profile__adding-videos').toggleClass('open');
    });
    

});
