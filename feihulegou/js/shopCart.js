 $(window).load(function(){
	 	//页面数据加载
	 	var arr=getCookie("shoplist");
	 	
	 	var html="";
	 	for(var i=0;i<arr.length;i++){
	 		var shopinfo=arr[i]
	 	
	 		html+='<div class="shop-item clearfix">'+
					'<p class="fl"><input type="checkbox" class="ck"/></p>'+
					'<img class="fl" src="images/'+ shopinfo.src +'" alt="" />'+
					'<p class="fl">'+ shopinfo.name +'</p>'+
					'<span class="fl">'+ shopinfo.price +'元</span>'+
					'<p class="fl count" '+
						'data-id="'+ shopinfo.id +'" '+
						'data-price="'+ shopinfo.price +'" data-count="'+ shopinfo.count +'"'+
						'data-name="'+ shopinfo.name +'" data-src="'+ shopinfo.src +'"'+
						'>'+
						'<span class="updateCount" data-number="1">+</span>'+
						'<span class="shop-count">'+ shopinfo.count +'</span>'+
						'<span class="updateCount" data-number="-1">-</span>'+
					'</p>'+
					'<em class="fl sumPrice">'+ (shopinfo.count * shopinfo.price) +'元</em>'+
					'<i class="fl delBtn">删除</i>'+
				'</div>'
	 	}
	 	$(".shoplist").html(html)
	 	//结算
	 	function jiesun(){
	 		var sumCount=0;
	 		var sumMoney=0;
	 		
	 		$(".ck:checked").each(function(){
	 			sumCount+=parseInt($(this).parent().parent().find(".shop-count").html())
	 			sumMoney+=parseInt($(this).parent().parent().find(".sumPrice").html())
	 			console.log($(this).parent())
	 		})
	 		$("#sum").find(".count2").html(sumCount)
	 		$("#sum").find(".money2").html(sumMoney)
	 		
	 	}
	 	$(".ck").click(function(){
	 		jiesun()
	 	})
	 	
	 	//加减按钮
	 	$(".shoplist").find(".updateCount").click(function(){
	 		
	 		var pid=$(this).parent().data("id");
	 		var pname=$(this).parent().data("name");
	 		var sign=$(this).data("number");
	 		var count=$(this).parent().find(".shop-count").html();
	 		if(count==1&&sign==-1){
	 			return;
	 		}
	 		for(var i=0;i<arr.length;i++){
	 			if(pid==arr[i].id&&pname==arr[i].name){
	 				sign==1?arr[i].count++:arr[i].count--;
	 				setCookie("shoplist",JSON.stringify(arr))
	 				$(this).parent().find(".shop-count").html(arr[i].count)
	 				$(this).parent().parent().find(".sumPrice").html(arr[i].count*arr[i].price+"元")
	 				break;
	 			}
	 		}
	 	})
	 	
	 	//全选按钮
	 	$("#selectAll").click(function(){
	 		$(".shoplist").find(".ck").prop("checked",$(this).prop("checked"))
	 		jiesun()
	 	});
	 	
	 	//删除cookie
	 	$(".shoplist").find(".delBtn").click(function(){
	 		var pid=$(this).parent().find(".count").data("id");
	 		console.log(pid)
	 		var pname=$(this).parent().find(".count").data("name");
	 		for(var i=0;i<arr.length;i++){
	 			if(pid==arr[i].id&&pname==arr[i].name){
	 				arr.splice(i,1)
	 				setCookie("shoplist",JSON.stringify(arr));
	 				break;
	 			}
	 		}	 		
	 		$(this).parent().remove()
	 	})
	 })