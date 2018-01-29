$(function(){
	$(".con1>li").mouseenter(function(){
		$("this").css("background","#C7012C")
		$(this).next().show()
	})
	$(".con1>ul>li").mouseenter(function(){
		$(this).css("background","#ffffcc").siblings().css("background","#fff")
	})
//	#(".con1>ul").mouseleave(function(){
//		#(this).hide()
//	})


//	$(".con1 li").mouseleave(function(){
//		$(this).siblings().hide()
//	})
//	$(".top_con2 ul").find("li").mouseenter(function(){
//		
//		$(this).find("a").css({"color":"#f00"}).end().siblings().find("a").css("backgroundColor","")
//	}).mouseleave(function(){
//		$(this).find("a").css({"color":"#000"})
//	})
})