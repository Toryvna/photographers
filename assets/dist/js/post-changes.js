// Скрыть при клике меню с опциями на публицакии

if ($(window).width() < 1025) {
    $(document).mouseup(function (e) {
        $('.postItem_heading-options .arrowBtn').on('click', function () {
            $(this).parent().addClass('show');
        });
        var item = $('.postItem_heading-options.show');
        if (!item.is(e.target) && item.has(e.target).length === 0) {
            item.removeClass('show');
        }
    });
}

$('.postItem_heading-options a').on('click', function () {
    $('.postItem_heading-options.show').removeClass('show');
    $(this).parent().toggleClass('show');
});


$('.likeBtn').on('click', function () {
    $(this).toggleClass('color');
});
$('.commentBtn').on('click', function () {
    $(this).toggleClass('color');
    $(this).parents('.postItem').toggleClass('show-form').find('.comment').toggleClass('active');
});

$('.shareBtn').on('click', function () {
    $(this).toggleClass('color');
});

// Комментарии

$('.writeComment').on('click', function () {
    $('.comment').removeClass('active');

    var otherInput = $(this).closest('.postItem_content').find('.messages-item');
    $(otherInput).css('display', 'block');
});

$('.addcomment').on('click', function () {
    $('.comment2').addClass('active');
})


//Редактирование публикации
$('.edit').on('click', function () { // При нажатии на пункт редактировать появляются иконки для редактирования
    $('.pencil-edit').css('display', 'inline').on('click', function () {
        $('.postItem_content-text').find('.text-edit').attr("contentEditable", "true"); // При нажатии на карандаш можно редактировать текст
    });
    $('.editing').css('display', 'flex');
    $('.close').css('display', 'block');
    $('.close').on('click', function () {
        $(this).parent(".gallery__image").css("display", "none"); // При нажатии на крестик удаляется фото
    })
});