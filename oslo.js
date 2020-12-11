$(function(){

    var width = 1350,currentSlide = -1,interval1 = 0,animateSpeed=1000,pause1=3000,count=0,cnt;


    /* MouseOver And Out For Left/Right Icons. */
    $('.icon').mouseover(function(){
        console.log('mouseIn');
        clearInterval(interval1);
    });
    $('.icon').mouseout(function(){
        console.log('mouseOut');
        startSlider();
    });

    /* MouseOver And Out For Dots. */
    $('.dot').mouseover(function(){
        console.log('mouseOn Dot');
        clearInterval(interval1);
        currentSlide = -1;
    });
    $('.dot').mouseout(function(){
        console.log('mouseOut form Dot');
        startSlider();

    });

    $(".rightIcons").click(function(){
        startSliderLeft();
    });
    $(".leftIcons").click(function(){
        startSliderRight();
    });

    $('#icon1').on('click',function(){
        currentSlide = 1;
        dotSlider();
        //  $(".slides").html('<img src="tech1.jpeg">');
        // $('.slides').css('margin-left',0);
        count = 0;
        cnt = 1;
        dotColor();


    });

    $('#icon2').click(function(){
        currentSlide = 2;
        dotSlider();
        // $(".slides").html('<img src="tech2.jpg">');
        // $('.slides').css('margin-left',0);
        count = 0;
        cnt = 2;
        dotColor();

    });

    $('#icon3').click(function(){
        currentSlide = 3;
        dotSlider();

        // $(".slides").html('<img src="tech3.jpeg">');
        // $('.slides').css('margin-left',0);
        count = 0;
        cnt = 3;
        dotColor();
    });



function startSliderLeft(){
    if(count == 0){
        $('.slides').css('margin-left',0);
        $('.slides').css('float','left');
    }
     $('.slides').animate({'margin-left': '-='+width},function(){
        currentSlide++;
        console.log(count)
        count++;
        // console.log($('.slides').length);
        if(currentSlide === $('.slides').length){
        currentSlide = -1;
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
        currentSlide = -1;
        // console.log('Current Silde length Is : '+currentSlide);
        $('.slides').css('margin-right',0);
    }
    pagination();

    });

}

function dotSlider(){
    // if(count == 0){
    //     $('.slides').css('margin-left',0);
    //     $('.slides').css('float','left');
    // }

    if(currentSlide == 1){
        $('.slides').animate({'margin-left': 0},function(){
            currentSlide = -1;
    
            // $('.slides').css('margin-left',0);
        });
    }
    if(currentSlide == 2){
        $('.slides').animate({'margin-left': -1350},function(){
            currentSlide = 0;
    
            // $('.slides').css('margin-left',0);
        });
    }
    if(currentSlide == 3){
        $('.slides').animate({'margin-left': -2700},function(){
            currentSlide = -1;
    
            // $('.slides').css('margin-left',0);
        });
    }

    }

function startSlider(){
    interval1 = setInterval(function(){
        // console.log('Count Value : '+count);
        if(count == 0){
            // console.log('Executing If Loop')
            $('.slides').css('margin-left',0);
        }
        $('.slides').css('float','left')
        $('.slides').animate({'margin-left': '-='+width},animateSpeed,function(){
            currentSlide++;
            count++;
            console.log(currentSlide)
            if(currentSlide === $('.slides').length){
            currentSlide = -1;
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
        $('#icon3').css('color','white')
    }
    else if(count == 2){
        $('#icon1').css('color','white')
        $('#icon2').css('color','white')
        $('#icon3').css('color','red')
    }
    else if(count == 3){
        $('#icon1').css('color','red')
        $('#icon2').css('color','white')
        $('#icon3').css('color','white')
        count = 0;
        cnt = 0;
    }
 }

 function dotColor(){
     console.log(cnt)
     if(cnt == 1){
         $('#icon1').css('color','red');
         $('#icon2').css('color','white');
         $('#icon3').css('color','white');
     }
     else if(cnt == 2){
        $('#icon1').css('color','white');
        $('#icon2').css('color','red');
        $('#icon3').css('color','white');
    }
    else if(cnt == 3){
        $('#icon1').css('color','white');
        $('#icon2').css('color','white');
        $('#icon3').css('color','red');
        count = 1;
    }  

 }

});
