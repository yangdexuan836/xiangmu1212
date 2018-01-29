$(function(){
	$.ajax({
			type:"get",
			url:"data.json",
			success : function(json){				
				var html = "";									
					for( var i = 0 ; i < json["classify001"].list.length ; i++ ){
						var pro = json["classify001"].list[i];
						html += `<li>
									<a href="page.html?pid=${pro.id}&cname=classify001">
										<img src="images/${pro.src}" alt="" />
										<p>${pro.name}</p>
										<p>飞虎价:￥<span>${pro.price}</span></p>
									</a>
									<button data-name='${pro.name}' data-price='${pro.price}' data-src='${pro.src}' data-id='${pro.id}'>立即抢购</button>
									
								</li>`;
					}
				
				
				$(".shoplist").html( html );
				//鼠标移进移出
				$(".shoplist li").mouseenter(function(){
					$(this).stop().animate({top:-4},500)
				}).mouseleave(function(){
					$(this).stop().animate({top:0},500)
				})				
				
		}})
	
	$(".shoplist").on("click","button",function(){
			var arr=[];
			var flag=true;
			var json={
				id: $(this).data("id"),
				price: $(this).data("price"),
				name: $(this).data("name"),
				src:$(this).data("src"),
				count:1
			}
			console.log(json)
			var oldCookie=getCookie("shoplist")
		
			if(oldCookie.length!=0){
				arr=oldCookie;
				for(var i=0;i<arr.length;i++){
					if(json.id==arr[i].id&&json.name==arr[i].name){
						arr[i].count++;
						flag=false;
						break;
					}
				}
			}
			if(flag){
				arr.push(json)			
			}
			setCookie("shoplist",JSON.stringify(arr));
			
				
				location.href="shoppingCart.html"
			
		})
	
})
