$(function(){
	$(".top_con2").find(".con1").mouseenter(function(){		
		$(this).find("ul").css("display","block")
	}).mouseleave(function(){
		$(this).find("ul").css("display","none")
	})
	$(".top_con2 ul").find("li").mouseenter(function(){
		
		$(this).find("a").css({"color":"#f00"}).end().siblings().find("a").css("backgroundColor","")
	}).mouseleave(function(){
		$(this).find("a").css({"color":"#000"})
	})
})
