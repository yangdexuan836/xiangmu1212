window.onload=function(){
	var oBtn=document.getElementById("btn");
	var uname=document.getElementById("uname");
	var upwd=document.getElementById("upwd");
	oBtn.onmouseenter=function(){
		this.style.backgroundPositionY="-100px";
	}
	oBtn.onmouseleave=function(){
		this.style.backgroundPositionY="-60px";
	}
	oBtn.onclick=function(){				
		var json=getCookie("list");
		var unameval=uname.value;
		var upwdval=upwd.value;
		console.log(json);
		if(unameval==json.uname&&upwdval==json.upwd){
			location.href="index.html";
		}else{
			location.href="denglu.html"
		}						
	}
	
	
	
	
}
