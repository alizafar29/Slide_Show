// $(function(){
//     //configration
//     var width = 1368;
//     var animateSpeed = 3000;
//     var pause1 = 3000;
//     var currentSilde = 1;
//     var interval;
//     //cache DOM
//     var $slider = $('#slider');
//     var $slideContainer = $slider.find('.slides');
//     var $slides = $slideContainer.find('.slide');

//     function startSlider(){
//         interval = setInterval(function(){
//             $slideContainer.animate({'margin-left': '-='+width},animateSpeed,function(){
//                 currentSilde++;
//                 if(currentSilde === $slides.length){
//                     currentSilde = 1;
//                     $slideContainer.css('margin-left',0);
//                 }
//             });
//         },pause1);

//     }
//     function pauseSlider(){
//         clearInterval(interval);
//     }
//     $slider.on('mouseon',pauseSlider).on('mouseleave',startSlider);
    
// })



$(function(){

    var width = 1350,currentSlide = -2,interval,animateSpeed=1000,pause1=3000,count=0;

    $('.icon').mouseover(function(){
        console.log('mouseIn');
        clearInterval(interval);
    });
    $('.icon').mouseout(function(){
        console.log('mouseOut');
        startSlider();
    });

    $(".rightIcons").click(function(){
        startSliderLeft();
    });
    $(".leftIcons").click(function(){
        startSliderRight();
    });

    $('#icon1').click(function(){
        $(".slides").html('<img src="tech1.jpeg" alt="">');
        $('.slides').css('margin-left',0);

    });

    $('#icon2').click(function(){
        $(".slides").html('<img src="tech2.jpg" alt="">');
        $('.slides').css('margin-left',0);
       
    });

    $('#icon3').click(function(){
        $(".slides").html('<img src="tech3.jpeg" alt="">');
        $('.slides').css('margin-left',0);
        
    });



function startSliderLeft(){
    if(count == 0){
        $('.slides').css('margin-left',0);
    }
     $('.slides').animate({'margin-left': '-='+width},function(){
        currentSlide++;
        console.log(count)
        count++;
        // console.log($('.slides').length);
        if(currentSlide === $('.slides').length){
        currentSlide = -2;
        // console.log('Current Silde length Is : '+currentSlide);
        $('.slides').css('margin-left',0);
    }
    pagination();

    });
}

function startSliderRight(){
    $('.slides').css('float','right');
    $('.slides').animate({'margin-right': '-='+width},function(){
        currentSlide++;
        count++;
        // console.log($('.slides').length);
        if(currentSlide === $('.slides').length){
        currentSlide = -2;
        // console.log('Current Silde length Is : '+currentSlide);
        $('.slides').css('margin-right',0);
    }
    pagination();

    });

}

function startSlider(){
    interval = setInterval(function(){
        // console.log('Count Value : '+count);
        if(count == 0){
            // console.log('Executing If Loop')
            $('.slides').css('margin-left',0);
        }
        $('.slides').css('float','left')
        $('.slides').animate({'margin-left': '-='+width},animateSpeed,function(){
            currentSlide++;
            count++;
            // console.log($('.slides').length);
            if(currentSlide === $('.slides').length){
            currentSlide = -2;
            // console.log('Current Silde length Is : '+currentSlide);
            $('.slides').css('margin-left',0);
            }
            pagination();
            
        });
    },pause1);
    
}

startSlider();

function pagination(){
    if(count == 1){
        $('#icon1').css('color','white')
        $('#icon2').css('color','red')
    }
    else if(count == 2){
        $('#icon2').css('color','white')
        $('#icon3').css('color','red')
    }
    else if(count == 3){
        $('#icon1').css('color','red')
        $('#icon2').css('color','white')
        $('#icon3').css('color','white')
        count = 0;
    }
 }

});
