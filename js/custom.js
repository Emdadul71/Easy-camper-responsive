$(document).ready(function(){
 

    //CAROSEL CALL 
    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    //CAROSEL CALL 
    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        center: true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

  });
