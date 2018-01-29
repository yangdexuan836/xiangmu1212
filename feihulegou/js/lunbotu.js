//$(function(){
//	var index=0;
//	var timer=setInterval(autoplay,2000)
//	function autoplay(){
//		index++;
//		if(index==12){
//			index=0;
//		}
//		
//		$(".banner_con1").find("li").eq(index).css({"display":"block"}).animate({"left":0},1500,function(){
//			$(this).css({"z-index":0}).siblings().css({"left":"1900px","display":"none","z-index":1})
//		})
//	}
//})

$(function(){
	var index=0;
	var timer=setInterval(autoplay,2000)
	function autoplay(){
		index++;
		if(index==12){
			index=0;
		}
		$(".banner_con1 ol").find("li").eq(index).css("background","#f77878").siblings().css("background","#777")
		$(".banner_con1 ul").find("li").eq(index).siblings().animate({"z-index":0,"opacity":0},1300)
		$(".banner_con1 ul").find("li").eq(index).animate({"opacity":1,"z-index":1},1500,function(){
		
		})
	}
	$(".banner_con1 ol").find("li").click(function(){
		
		clearInterval(timer)
		index=$(this).index();
		index--;
		$(this).css("background","#f77878").siblings().css("background","#777")
		autoplay()
	})
	$(".banner_con1").mouseenter(function(){
		clearInterval(timer)
		$(this).find(".banner_con2 a").css({"display":"block"})
	}).mouseleave(function(){
		index=index;
		timer=setInterval(autoplay,2000)
		$(this).find(".banner_con2>a").css({"display":"none"})
	})
	var flag=true;
	$("#prev").click(function(){
		if(flag){
			flag=false;
			index--;
			if(index==12){
				index=0;
			}
	
			$(".banner_con1 ul").find("li").eq(index).siblings().animate({"z-index":0,"opacity":0},1300)
			$(".banner_con1 ul").find("li").eq(index).animate({"opacity":1,"z-index":1},1500,function(){

				flag=true;
			})
		}
	})
	$("#next").click(function(){
		if(flag){
			flag=false;
			index++;
			if(index==12){
				index=0;
			}
			
			$(".banner_con1 ul").find("li").eq(index).siblings().animate({"z-index":0,"opacity":0},1300)
			$(".banner_con1 ul").find("li").eq(index).animate({"opacity":1,"z-index":1},1500,function(){

				flag=true;
			})	
//			$(".banner_con1").find("li").eq(index).animate({"opacity":1,"z-index":1},1500,function(){
//				$(this).css({"z-index":0}).siblings().css({"opacity":0,"z-index":0})
//				flag=true;
//			})
			
		}
	})
})






//window.onload=function(){
//	var dd=new Slideshow()
//}
//
//Slideshow(){
//	this.list=document.getElementsByClassName("banner_con1").getElementsByTagName("li")
//	this.init:function(){
//		this.timer=setInterval(autoplay,2000)
//		
//	}
//	
//	
//}

	
	
