window.onload=function(){
	var dd=new Parent()
		dd.init();
	
	
	function Parent(){		
		this.small_con2=document.getElementsByClassName("small_con2")[0];
		this.magnifyingGlass=document.getElementsByClassName("magnifyingGlass")[0];
		this.small=document.getElementsByClassName("small")[0];				
		this.big=document.getElementsByClassName("big")[0];
		this.bigimg=document.getElementById("bigimg");
		this.smallimg=document.getElementById("smallimg");
		this.init=function(){
			this.small.onmouseover=function(){
				-
				this.over()
				this.small.onmousemove=function(e){
					var e=e||event;
					this.move(e);
					var d2=new 	Delegation();	
						d2.init();
				}.bind(this);
				this.small.onmouseout=function(){
					this.out();
				}.bind(this)
			}.bind(this)
		}
		this.move=function(e){
			var e=e||event;
			
			this.x=e.pageX-this.magnifyingGlass.offsetLeft-this.small_con2.offsetWidth/2;
			this.y=e.pageY-this.magnifyingGlass.offsetTop-this.small_con2.offsetHeight/2;
			this.maxL=this.small.offsetWidth-this.small_con2.offsetWidth-12;
			this.maxH=this.small.offsetHeight-this.small_con2.offsetHeight-12;
			this.x=this.x<10?10:(this.x>this.maxL?this.maxL:this.x);
			this.y=this.y<10?10:(this.y>this.maxH?this.maxH:this.y);
			
			this.bigImgleft = this.x*this.bigimg.offsetWidth / this.smallimg.offsetWidth;
			this.bigImgtop = this.y*this.bigimg.offsetHeight /this.smallimg.offsetHeight;
	
			this.bigimg.style.left = -this.bigImgleft+17+"px";
			this.bigimg.style.top = -this.bigImgtop+17+"px";												
			this.small_con2.style.left=this.x+"px";
			this.small_con2.style.top=this.y+"px";
		}										
		this.over=function(){
			this.small_con2.style.display="block";
			this.big.style.display="block";
		};
		this.out=function(){
			this.small_con2.style.display="none";
			this.big.style.display="none";
		}
		
		
	}
	function Delegation(){
		this.bigimg=document.getElementById("bigimg");
		this.smallimg=document.getElementById("smallimg");
		var json=[
			{"src":"images/small1.jpg"},
			{"src":"images/small2.jpg"},
			{"src":"images/small3.jpg"},
			{"src":"images/small4.jpg"}
		];
		this.content_con=document.getElementsByClassName("content_con")[0];
		this.list=this.content_con.getElementsByTagName("ul")[0].getElementsByTagName("li");
		
		this.mmlist = document.getElementsByClassName("mm");
		
		
		this.init=function(){
			for(var i = 0;i<this.mmlist.length;i++){
				this.mmlist[i].index = i;
			}
			this.content_con.onmouseover = function(e){
				var e = e ||event ;
				var target = e.target || e.secElement;
				if(target.tagName=="IMG"){
					
					this.smallimg.src = json[target.index].src;
					for(let j=0;j<this.list.length;j++){
							this.list[j].style.padding="1px";
							this.list[j].style.border="1px solid #eaeaea";						
						
					}
					
						this.list[target.index].style.padding="0px";
						this.list[target.index].style.border="2px solid #f00";
							
					
					
					this.bigimg.src= json[target.index].src;
				}
			}.bind(this)
			
		}
	}

	var backTop=document.getElementsByClassName("backTop")[0];
	window.onscroll = function(){
		var sTop = document.body.scrollTop || document.documentElement.scrollTop;
		if( sTop > 10 ){
			backTop.style.display = "block";
		}else{
			backTop.style.display = "none";
		}
	}
	backTop.onclick = function(){
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		backTop.style.display = "none";
	}
	var wjx_null = "☆";   
	var wjx_sel = "★"; 
	$(".comment li").mouseenter(function(){
		$(this).html(wjx_sel)
				.prevAll()
				.html(wjx_sel)
				.end()
				.nextAll()
				.html(wjx_null)				
	}).mouseleave(function(){
		$(".comment li").html(wjx_null);
		$(".clicked").html(wjx_sel)
					 .prevAll()
					 .html(wjx_sel)
//					 .end()
//					 .nextAll()
//					 .html(wjx_null)
					 
		
	})
	//添加收货地址（省份）
	$(".comment").on("click","li",function(){
		
			$(this).addClass("clicked")
			       .siblings()
			       .removeClass("clicked")
	
	})
	$(".customerDetails_con3 p").eq(1).find("em").parent().mouseenter(function(){
		$(this).css("border","1px solid #7b470e")
		$(this).find("em").css("backgroundPositionX",-150)
	})
	.mouseleave(function(){
		$(this).css("border","1px solid #ccc");
		$(this).find("em").css("backgroundPositionX",-120)
	})		
	var flag=true;
	$(".customerDetails_con3 p").eq(1).find("em").click(function(){
		$(this).css("backgroundPositionX",-150);
		$(this).parent().css("border","1px solid #7b470e")
		if(flag){
			$(this).next().slideDown();
			flag=false;
		}else{
			$(this).next().slideUp();
//			$(this).css("backgroundPositionX",-120);
//			$(this).parent().css("border","1px solid #ccc")
			flag=true;
		}
		$(this).next().find("span").click(function(){
			
			$(this).parent().slideUp()
			$(this).parent().parent().css("border","1px solid #ccc")
			$(this).parent().parent().find("em").css("backgroundPositionX",-120);
			flag=true;
		}).bind(this)
		$(this).parent().mouseleave(function(){
			$(this).find("em").css("backgroundPositionX",-120);
			$(this).css("border","1px solid #ccc")
		})
	})
	//选中尺码
	$(".customer_con2").on("click","span",function(){
		$(this).css({"border":"2px solid #c7012c","width":"48px","height":"21px","backgroundPositionY":"-13px"}).siblings().css({"border":"1px solid #ccc","width":"50px","height":"23px","backgroundPositionY":"0px"})
	})
	//加减数量
	$(".customer_con3").on("click","span",function(){

		if($(this).html()=="-"){
			$val=Number($("#_customer_con3_inp").val());
			console.log($val);
			if($val>1){
				$("#_customer_con3_inp").val(--$val);							
			}
		}else if($(this).html()=="+"){
			$val=Number($("#_customer_con3_inp").val());
			console.log($val);
			$("#_customer_con3_inp").val(++$val);
		}
	})
}
