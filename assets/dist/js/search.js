$(document).ready(function(){

    jcf.replaceAll();

    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 10000,
        values: [ 575, 7000 ],
        slide: function( event, ui ) {
          $( "#amount" ).val(ui.values[ 0 ]);
          $( "#amount2" ).val(ui.values[ 1 ]);
        }
    });
    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount2" ).val($( "#slider-range" ).slider( "values", 1 ) );

    //tabs slider
    $('.filter-slider').slick({
        responsive: [{
            breakpoint: 99999,
            settings: "unslick"
        },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                infinite: false,
                variableWidth: false,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
            }
        },{
            breakpoint: 768,
            settings: {
                infinite: false,
                slidesToShow: 3,
                adaptiveHeight: true,
                variableWidth: true,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
            }
        },]
    });

    //gallery slider
    function AddSlider(){
        $('.performer__gallery-slider').slick({
            infinite: false,
            slidesToShow: 3,
            adaptiveHeight: true,
            nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
            prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
        });
    }
    AddSlider();
    //Tabs
    $('.filter-items').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.filter-items').removeClass('active');
        $('.tab-item').removeClass('active');
        
        window.scrollTo(0, 0);
        $(this).addClass('active');
        $('#' + dataTab).addClass('active');
        $('.' + dataTab).addClass('active');

        $('.performer__gallery-slider').slick('unslick');
        AddSlider();
    });

    //Актив при клике на кнопки like, сообщения и share
    $('.likeBtn, .commentBtn, .shareBtn').on('click', function(){
        $(this).toggleClass('active');
    });

    //Открытие внутреннего меню
    $('#leftToggle-menu').on('click', function(){
        $('.search_page-menu').toggleClass('open');
    });

    //js для сайдбара с фильтрами
    $('.openBtn').on('click', function(){
        $(this).parent().addClass('active');
    });
    $('.open-close').on('click', function(){
        $(this).parent().removeClass('active');
    });

    //Отурытие/Закрытие категории фильтра при клике
    $('.drop-item_heading').on('click', function(){
        $(this).parent().toggleClass('active');
    });

    //autocomplete
    $( function() {
        var setInfo = [
            "Анапа",
            "Ангарск",
            "Анжеро-Судженск",
            "Апатиты",
            "Арзамас",
            "Балаково",
            "Балахна",
            "Балашиха",
            "Владивосток",
            "Владикавказ",
            "Владимир",
            "Кемерово",
            "Керчь",
            "Кинешма",
            "Краснодар",
            "Краснокаменск",
            "Краснокамск",
            "Москва",
            "Мурманск",
            "Муром",
            "Сальск",
            "Самара",
            "Санкт-Петербург",
            "Саранск"
        ];

        $( "#setCountry" ).autocomplete({
          source: setInfo
        });

        $( "#setCity" ).autocomplete({
            source: setInfo
        });

        $( "#setMetro" ).autocomplete({
            source: setInfo
        });
    } );

});

//js для выбора даты съемки
window.onload = function () {

    var day = new Date,
        md = (new Date(day.getFullYear(), day.getMonth() + 1, 0, 0, 0, 0, 0)).getDate(),
        $month_name = "01 02 03 04 05 06 07 08 09 10 11 12".split(" ");

    function set_select(a, c, d, e) {  
        var el = document.getElementsByName(a)[0];
        for (var b = el.options.length = 0; b < c; b++) {
            el.options[b] = new Option(a == 'month' ? $month_name[b] : b + d, b + d);
         }
        el.options[e] && (el.options[e].selected = !0);
    }
    set_select("day", md, 1, day.getDate() - 1);
    set_select("month", 12, 1, day.getMonth());
    set_select("year", 5, day.getFullYear());


    var year = document.getElementById('year');
    var month = document.getElementById("month");

    function check_date() {
        var a = year.value | 0,
            c = month.value | 0;
        md = (new Date(a, c, 0, 0, 0, 0, 0)).getDate();
        a = document.getElementById("day").selectedIndex;
        set_select("day", md, 1, a)
    };

    if (document.addEventListener) {
        year.addEventListener('change', check_date, false);
        month.addEventListener('change', check_date, false);

    } else {
        year.detachEvent('onchange', check_date);
        month.detachEvent('onchange', check_date);
    }

    $('#day').prepend($("<option value='' selected='selected'>дата</option>"));
    $('#month').prepend($("<option value='' selected='selected'>мес</option>"));
    $('#year').prepend($("<option value='' selected='selected'>год</option>"));

}

