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


    //Попап поделиться 
    $('.shareBtn').on("click", function () {
        $('.overlayPopup').addClass('active');
        $(document).mouseup(function (e) {
            $('.write-file').on('click', function () {
                $(this).find('.dropdown-list').toggleClass('active');
            });
            var item = $('.dropdown-list.active');
            if (!item.is(e.target) && item.has(e.target).length === 0) {
                item.removeClass('active');
            }
        });

        //Выбор отправителя
        $('.recipient').on("click", function () {
            $(this).find('.content').toggleClass('active');
            $(".recipient").find('.checkbox-item').click(function (event) {
                event.stopPropagation();
            });
        })

        //Добавление кнопки с именем пользователя
        $('.add-name').on("click", function () {
            $('.name').addClass('active');
            $('.remove').on("click", function () {
                $('.name').removeClass('active');
            })
        })

        //если выбран другой чек отключить поле выбора пользователя
        $(function () {
            $('#message').on('change', function () {
                if ($('#message').prop('checked')) {
                    $('#dropdown').css('display', 'block');
                } else {
                    $('#dropdown').css('display', 'none');
                    $('.content').removeClass('active');
                }
            });
        });


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

    //Конец


    $(document).mouseup(function (e) {
        $('.paperclip').on('click', function () {
            $('.dropdown-list').toggleClass('active');
        });
        var item = $('.dropdown-list.active');
        if (!item.is(e.target) && item.has(e.target).length === 0) {
            item.removeClass('active');
        }
    });

});
