$(document).ready(function () {

    jcf.replaceAll();

    // Резиновый textarea
    $('.checkTextarea').keyup(function () {
        $(this).css('height', '1px');
        $(this).css('height', '' + $(this).prop('scrollHeight') + "px");
    });

    // Скрыть при клике меню с опциями на публицакии
    // $('.publication_heading-options').hover(
    //     function(){
    //         $(this).addClass('show');
    //     },
    //     function(){
    //         $(this).removeClass('show');
    //     }
    // );

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
        $('.publication_heading-options').toggleClass('show');
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

});