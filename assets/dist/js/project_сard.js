$(document).ready(function(){

  jcf.replaceAll();

    //Слайдер документов
    $('.projectsCard__documents-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
        responsive: [
            {
              breakpoint: 1360,
              settings: {
                slidesToShow: 5,
                infinite: false,
              }
            },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              infinite: false,
            }
          },
          {
            breakpoint: 768,
            infinite: false,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            infinite: false,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });
      
    //likeBtn
    $('.likeBtn').on('click', function(){
        $(this).toggleClass('active');
    });

    $("#file-1").fileinput({
        uploadUrl: "/ file-upload-batch / 1",
    });
   
    $('.add-image#files2, .add-video#files3, .add-files#files4').on('click', function(){
        $('#file-1').trigger('click');
    })

    $('.offer-btn').on('click', function(){
      $('.projectsCard__offerService').show();
      $(window).scrollTop($('.projectsCard').height() - $('.projectsCard__offerService').height());
    })


});

