$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        autoplayTimeout:2000,
        autoplay: true,
        loop:true,
        margin:90,
        nav:false,
        responsive:{
            0:{
                items:1
    
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    
    // EFECTO TRASLATE
    new WOW().init();


    
    /* MENU RESPOSIVE */
    $(".menu-icon").click(function(){
        $("nav").slideToggle();
        $('#nav').css({"display":"block"});
    })

    /*MENU FIXED*/ 
    $(window).scroll(function(){
        scroll= $(window).scrollTop();

        if (scroll > 100) {
            $('#menu').css({"transition":"all 800ms ease"});
            $('#menu').css({"position":"fixed"});
            $('#menu').css({"width":"100%"});
            $('#menu').css({"top":"0"});
            $('#menu').css({"background":"#fff"});
            $('#menu a').css({"color":"#000"});
            $('.logo').css({"color":"#000"});
            $('#menu').css({"box-shadow":"rgba(0, 0, 0, 0.22) 6px 1px 1px"});
            $('#menu').css({"z-index":"100"});
          } else {
            $('#menu').css({"position":"relative"});
            $('#menu').css({"background":"transparent"});
            $('#menu').css({"box-shadow":"0 0 0"});
            $('#menu a').css({"color":"#fff"});
            $('.logo').css({"color":"#fff"});
            
          }
    })  
});
