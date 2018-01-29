$(function(){
	$(".classify").find("li").mouseenter(function(){
		$(this).css({"background":"#fff","color":"orange"}).siblings().css({"background":"#f6f6f6","color":"#000"})
	}).mouseleave(function(){
		$(this).css({"background":"#f6f6f6","color":"#000"})
	})
})
