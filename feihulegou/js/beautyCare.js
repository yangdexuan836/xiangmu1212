		$.ajax({
			type:"get",
			url:"data8.json",
			success : function(json){								
				var html="";				
					for(var i=0;i<json.length;i++){
					
						html += `<li>
									<a href="page.html?uname=${json[i].id}&cname=${json[i].name}">
									<img src="images/${json[i].src}" alt="" />
									<p>${json[i].name}</p>						
									<h3>${json[i].price}</h3>
									
									</a>
							
								</li>`
					}
					$(".beautyCare").html(html);

				}
				
})