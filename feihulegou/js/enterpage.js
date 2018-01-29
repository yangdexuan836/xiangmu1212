$(function(){
	
	$(window).scroll(function(){
		var stop=$(window).scrollTop();
		if(stop>100){
			
			$(".stairway").css({"display":"block"})
			$(".stairway").css({"top":stop+100})
			
		}else{
			$(".stairway").css({"display":"none"})
			$(".stairway").css({"top":100})
		}
		
	})
	$(".stairway ul").on("click","li",function(){
		var index=$(this).index();
		if(index==5){
			$("html,body").animate({"scrollTop":0},1500)
		}else{			
			var oDiv=$(".list>div:not(:last(div))").eq(index).offset().top
//			$("html,body").scrollTop(oDiv);
			$("html,body").animate({"scrollTop":oDiv},1500)
		}

	})
	
	
})
