$(document).ready(function(){


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


    //изменение поста
    $('.edit').on('click', function(){
        var parent = $(this).closest('.postItem');
        parent.find('.editBtn').css('display', 'inline');
        parent.find('.saveBtn').css('display', 'inline-block');
        parent.find('.close').css('display', 'block');
        parent.find('.editing').css('display', 'flex');
      });
  
      $(".editBtn").on('click',function(){
        var parent = $(this).closest('.postItem');
        var height = parent.find('.text').height(); //узнаем высоту блока с текстом
        $(this).hide(); //скрываем кнопку редактировать
        var divHtml = parent.find('.text').html(); //выбираем содержимое текстового блока
        var editableText = $("<textarea class='textarea-change' />"); 
        $(editableText).css('height', height + 60); //устанавливаем высоту textarea
        editableText.val(divHtml); //записываем содержимое текстового блока в textarea
        parent.find('.text').replaceWith(editableText);  //заменяем текстовый блок textarea
        editableText.focus(); 
      });
      $('.saveBtn').on('click',function(){
        var parent = $(this).closest('.postItem');
        $(this).hide();
        parent.find('.editBtn').css('display', 'none');
        parent.find('.close').css('display', 'none');
        parent.find('.editing').css('display', 'none');
        var html = parent.find('.textarea-change').val(); 
        var viewableText = $("<div class='text'>");
        viewableText.html(html); //записываем содержимое textarea в текстовый блок
        parent.find('.textarea-change').replaceWith(viewableText); //заменяем textarea текстовым блоком
      });

});