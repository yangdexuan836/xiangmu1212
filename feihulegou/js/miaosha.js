
		$.ajax({
			type:"get",
			url:"data1.json",
			success : function(json){
				
				
				var html="";				
					for(var i=0;i<json.length;i++){
					
						html += `<li>
									<a href="page.html?uname=${json[i].id}&cname=${json[i].name}">
									<img src="images/${json[i].src}" alt="" />
									<p>${json[i].name}</p>						
									<h3>${json[i].price}</h3>
									<i>${json[i].orPrice}<i>
									</a>
							
								</li>`
					}
					$(".seckill_con2").html(html);
//					$(".seckill_con2 li").mouseenter(function(){
//						$(this).find("img").animate({"width":"210px","height":"200px"},1500)
//					}).mouseleave(function(){
//						$(this).find("img").animate({"width":"200px","height":"190px"},1500)
//					})
				}
				
})
