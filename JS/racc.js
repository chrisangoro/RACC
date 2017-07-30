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
        $('#row1').onmouseover(function(){
            $('#filter').show();
        })
    }
}

$(document).ready(main);