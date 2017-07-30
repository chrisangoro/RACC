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

}

$(document).ready(main);