//function menu1(){
  //  document.getElementById("dropdown-menu-1").classList.toggle("show");
//}

var main = function(){

//main menu in header dropdown interactions

    //about dropdown
    $('#menu-element-1').click(function(){
        $('#dropdown-menu-1').fadeToggle(200);
        $('#dropdown-menu-2').hide(false);
        $('#dropdown-menu-3').hide(false);
        $('#dropdown-menu-4').hide(false);
    })

    //academics dropdown
    $('#menu-element-2').click(function(){
        $('#dropdown-menu-2').fadeToggle(200);
        $('#dropdown-menu-1').hide(false);
        $('#dropdown-menu-3').hide(false);
        $('#dropdown-menu-4').hide(false);
    })

    //admissions dropdown
    $('#menu-element-3').click(function(){
        $('#dropdown-menu-3').fadeToggle(200);
        $('#dropdown-menu-2').hide(false);
        $('#dropdown-menu-1').hide(false);
        $('#dropdown-menu-4').hide(false);
    })

    //student life dropdown
    $('#menu-element-4').click(function(){
        $('#dropdown-menu-4').fadeToggle(200);
        $('#dropdown-menu-2').hide(false);
        $('#dropdown-menu-3').hide(false);
        $('#dropdown-menu-1').hide(false);
    })

//change tab info interactions
    $('#row1').click(function(){
        $('#tabs-img').show();
        $('#tabs-img2').hide(false);
        $('#tabs-img3').hide(false);
        $('#tabs-img4').hide(false);

        $('#row1').css("background-color", "#f23522");
        $('#row2').css("background-color", "#999ba1");
        $('#row3').css("background-color", "#bbbbbf");
        $('#row4').css("background-color", "#cfcfd2");
    })

    $('#row2').click(function(){
        $('#tabs-img2').show();
        $('#tabs-img').hide(false);
        $('#tabs-img3').hide(false);
        $('#tabs-img4').hide(false);

        $('#row2').css("background-color", "#f23522");
        $('#row1').css("background-color", "#87888e");
        $('#row3').css("background-color", "#bbbbbf");
        $('#row4').css("background-color", "#cfcfd2");
    })

    $('#row3').click(function(){
        $('#tabs-img3').show();
        $('#tabs-img').hide(false);
        $('#tabs-img2').hide(false);
        $('#tabs-img4').hide(false);

        $('#row3').css("background-color", "#f23522");
        $('#row1').css("background-color", "#87888e");
        $('#row2').css("background-color", "#999ba1");
        $('#row4').css("background-color", "#cfcfd2");
    })

    $('#row4').click(function(){
        $('#tabs-img4').show();
        $('#tabs-img').hide(false);
        $('#tabs-img2').hide(false);
        $('#tabs-img3').hide(false);

        $('#row4').css("background-color", "#f23522");
        $('#row1').css("background-color", "#87888e");
        $('#row2').css("background-color", "#999ba1");
        $('#row3').css("background-color", "#bbbbbf");
    })


//red filter on tabs images
    if ($('#row1').css('backgroun-color') == "#f23522") {
        $('#row1').hover(function(){
            $('#filter').show();
        })
    }

//social interactions
    //get connected
    $('#get-connected').mouseover(function(){
        $(this).css("width", '24%', "height", 'auto', "margin", '0.5%')
    })

    $('#get-connected').mouseleave(function(){
        $(this).css("width", '25%', "height", 'auto', "margin", '0')
        //$(this).animate({width: '25%', height: 'auto', margin: 0}, 1000)
    })

    //insta-block
    $('#insta-block1').mouseover(function(){
        //$(this).animate({width: '24%', height: 'auto', margin : '0.5%'}, 1000)
        $(this).css("width", '24%', "height", 'auto', "margin", '0.5%')
    })

    $('#insta-block1').mouseleave(function(){
        //$(this).animate({width: '25%', height: 'auto', margin: 0}, 1000)
        $(this).css("width", '25%', "height", 'auto', "margin", '0')
    })

    $('#insta-block2').mouseover(function(){
        //$(this).animate({width: '24%', height: 'auto', margin : '0.5%'}, 1000)
       // $(this).css("width", '24%', "height", 'auto', "margin", '0.5%')
    })

    $('#insta-block2').mouseleave(function(){
        //$(this).animate({width: '25%', height: 'auto', margin: 0}, 1000)
       // $(this).css("width", '25%', "height", 'auto', "margin", '0')
    })

    $('#insta-block3').mouseover(function(){
        //$(this).animate({width: '24%', height: 'auto', margin : '0.5%'}, 1000)
        $(this).css("width", '24%', "height", 'auto', "margin", '0.5%')
    })

    $('#insta-block3').mouseleave(function(){
        //$(this).animate({width: '25%', height: 'auto', margin: 0}, 1000)
        $(this).css("width", '25%', "height", 'auto', "margin", '0')
    })

    $('#insta-block4').mouseover(function(){
        //$(this).animate({width: '24%', height: 'auto', margin : '0.5%'}, 1000)
        $(this).css("width", '24%', "height", 'auto', "margin", '0.5%')
    })

    $('#insta-block4').mouseleave(function(){
        //$(this).animate({width: '25%', height: 'auto', margin: 0}, 1000)
        $(this).css("width", '25%', "height", 'auto', "margin", '0')
    })

    //twitter-block
    $('#twitter-block1').mouseover(function(){
        $(this).css("width", '24%', "height", 'auto', "margin", '0.5%')
        //$(this).animate({width: '24%', height: 'auto', margin : '0.5%'}, 1000)
    })

    $('#twitter-block1').mouseleave(function(){
        //$(this).animate({width: '25%', height: 'auto', margin: 0}, 1000)
        $(this).css("width", '25%', "height", 'auto', "margin", '0')
    })

    $('#twitter-block2').mouseover(function(){
        $(this).css("width", '24%', "height", 'auto', "margin", '0.5%')
        //$(this).animate({width: '24%', height: 'auto', margin : '0.5%'}, 1000)
    })

    $('#twitter-block2').mouseleave(function(){
        //$(this).animate({width: '25%', height: 'auto', margin: 0}, 1000)
        $(this).css("width", '25%', "height", 'auto', "margin", '0')
    })

    $('#twitter-block3').mouseover(function(){
        $(this).css("width", '24%', "height", 'auto', "margin", '0.5%')
        //$(this).animate({width: '24%', height: 'auto', margin : '0.5%'}, 1000)
    })

    $('#twitter-block3').mouseleave(function(){
       //$(this).animate({width: '25%', height: 'auto', margin: 0}, 1000)
       $(this).css("width", '25%', "height", 'auto', "margin", '0')
    })
}

$(document).ready(main);