var mySwiper= new Swiper('.swiper-container', {
	  direction:'horizontal',
	  loop: true,
    autoplay: 5000,
    pagination : '.swiper-pagination',
    paginationClickable :true,
    preventClicks : false,
    noSwiping : true,
	  effect : 'coverflow',
})

var swiper=new Swiper('.swiper-container2',{
        freeMode: true,
        spaceBetween: 15,
        loop: true,
        slidesPerView:3.5,
        
});

function go_Back(){
    $('body,html').animate({ scrollTop: 0 }, 200);
}
$(window).scroll(function(){
    var scrollTop = $(document.documentElement).scrollTop()|| $(document.body).scrollTop(); 
    var clientwidth=($(document).height()-$(window).height());
    if(scrollTop > 100){
        $('#gotop').show();
      }else if(scrollTop < 100){
        $('#gotop').hide();
      }
});

$('.cart').off().on('click',function(){
  	$('.space_warp,.shadow').addClass('active');
		
	});

    $('.shadow').off().on('click',function(){
	    $('.shadow,.space_warp').removeClass('active');
		
});

$(function() {
    $(".lazy").lazyload({effect: "fadeIn"});
});

function scrollNews(){
  $(document).ready(function(){
     $('.news li').eq(0).fadeOut("slow",function(){
         $(this).clone().appendTo($(this).parent()).fadeIn("slow");
         $(this).remove();
    });
  });
}
setInterval('scrollNews()',2000);