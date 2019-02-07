$(document).ready(function () {
    //Скроллер
    baron({
        root: '.offer-slider',
        scroller: '.offer-slider-wrap',
        bar: '.scroller__bar',
        direction: 'h'
    })
    //Модалка
    var ModalAction = function(){
         
         var Top = $(document).scrollTop();
         console.log(Top);
         var modalBox = $(".modal-box");
         var modalBack = $(".modal-backdrop");
         
         $(modalBox).css("top",Top);
         
         if((modalBack,modalBox).hasClass("modal-in")){
             $(modalBack).removeClass("modal-in");
             $(modalBox).removeClass("modal-in");
             setTimeout(function () {
                $(modalBack).hide();
                $(modalBox).hide();
             }, 300);
             
         }else{
             $(modalBack).show();
             $(modalBox).show();
             setTimeout(function () {
                $(modalBack).addClass("modal-in"); 
                $(modalBox).addClass("modal-in"); 
                $(modalBox).css("top",Top+50); 
             }, 20);
             
         }
    };
    
    
    
    
    
    $(".offer-link").on("click",function(){
        ModalAction();
        return false;
    });
    $(".modal-backdrop").on("click",function(){
        ModalAction();
        return false;
    });
    $(".modal-box-close").on("click",function(){
        ModalAction();
        return false;
    })
    $(".item-img").on("click",function(){
        ModalAction();
        return false;
    })
    
  
    
    
    
    //мобилка
    
    $(".mobile-popup").on("click",function(){
       if($("nav").hasClass("popup-in")){
           $("nav").removeClass("popup-in");
       } else{
           $("nav").addClass("popup-in");
       }
    });
    $(".mobile-popup-close").on("click",function(){
        if($("nav").hasClass("popup-in")){
           $("nav").removeClass("popup-in");
       } else{
           $("nav").addClass("popup-in");
       }
    });
    
    //Увелечение поля комментарий
    
    
    $('.comment-desc-wrap textarea').autoResize();
    
    //Переключалка слайдера
    $(".foot-selector").on("click",function(){
        var selectorIndex = $(this).index();
        
        $(".foot-selector").removeClass("active");
        $(this).addClass("active"); 
        
        $(".offer-slider").removeClass("active");
        $(".offer-slider").eq(selectorIndex).addClass("active");
        
    });
});



