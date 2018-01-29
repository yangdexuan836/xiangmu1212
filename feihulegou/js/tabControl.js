$(function(){
	$(".classify").mouseenter(function(){
		$(this).find("ul").show();
	}).mouseleave(function(){
		$(this).find("ul").hide();
	})
	$(".classify li").mouseenter(function(){
		$(this).addClass("enterli")
		$(this).find(".secondLevel").show();
	}).mouseleave(function(){
		$(this).removeClass("enterli")
		$(this).find(".secondLevel").hide();
	})
	
//	$(".nav_con>ul li").mousseenter(function(){
//		$(this).css("color","#fdca30")
//	}).mouseenter(function(){
//		$(this).css("color","#fff")
//	})
	
})
