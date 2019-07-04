$(document).ready(function(){

    //показать поле поиска в сообщениях
    $(document).mouseup(function(e){
        $('.show-search').on('click', function(){
            $(this).parent().addClass('show');
            $(this).parent().find('.search input').focus();
        });
        var item = $('.heading-top .form.show');
        if (!item.is(e.target) && item.has(e.target).length === 0) {
            item.removeClass('show');
        }
    });

    //показать параметры 
    $(document).mouseup(function(e){
        $('.options .openBtn').on('click', function(){
            $(this).parent().toggleClass('show');
        });
        var item = $('.options.show');
        if (!item.is(e.target) && item.has(e.target).length === 0) {
            item.removeClass('show');
        }
    });

    $('.options a').on('click', function(){
         $('.options').removeClass('show');
    });

    // Резиновый textarea
    $('.checkTextarea').keyup(function(){
        $(this).css('height', '1px');
        $(this).css('height', '' + $(this).prop('scrollHeight') + "px");
    });
});