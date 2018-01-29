$(function(){
	$(".logo1 li").mouseenter(function(){
		
		$(this).find("img").css("position","absolute").stop().animate({"left":"-2.5px","top":"-2.5px","width":"155px","height":"73px"},1000)
	}).mouseleave(function(){
		$(this).find("img").stop().animate({"width":"150px","height":"68px","left":0,"top":0},1000)
	})
})
