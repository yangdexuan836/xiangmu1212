window.onload=function(){
	function $id(id){
		return document.getElementById(id);
	}

	var uname_em=document.getElementsByClassName("uname_em");
	
	var pay1=document.getElementsByClassName("pay1")[0];
	pay1.innerHTML=rand(1,100000);
	var pay2=document.getElementsByClassName("pay2")[0];
	var form=document.getElementsByTagName("form")[0]
	form.onsubmit=function(){
		if(flagname&&flagupwd&&flagqpwd&&flagCode){
			var json={
				"uname":$id("uname").value,
				"upwd":$id("upwd").value,
				"eMail":$id("eMail").value
			}
			setCookie("list",JSON.stringify(json))
			return true;
		}else{
			return false;
		}
		
	}
	
	//用户名验证
	$id("uname").onfocus=function(){
		uname_em[0].innerHTML="4-20位字符，可由英文、数字组成";
	}
	var flagname=null;
	$id("uname").onblur=function(){
		var reg=/^[a-z|0-9]{4,20}$/ig;
		var val=$id("uname").value		
		if(val.length==0){
			uname_em[0].innerHTML="用户名不能为空";
		}else if(val.length<4){
			uname_em[0].innerHTML="用户名不能少于四位字符";
		}else if(reg.test(val)){
			flagname=true;
			uname_em[0].innerHTML="正确"	
		}else{
			flagname=false;
			uname_em[0].innerHTML="错误"
		}		
	}
	//密码验证
	$id("upwd").onfocus=function(){
		uname_em[1].innerHTML="6-16位字符，可由英文、数字、特殊字符组成";
	}
	var flagupwd=null;
	$id("upwd").onblur=function(){
		var reg=/^[a-z|0-9|\W]{6,16}$/ig;
		var val=$id("upwd").value		
		if(val.length==0){
			uname_em[1].innerHTML="密码不能为空";
		}else if(val.length<4){
			uname_em[1].innerHTML="用户名不能少于六位字符";
		}else if(reg.test(val)){
			flagupwd=true;
			uname_em[1].innerHTML="正确"	
		}else{
			flagupwd=false;
			uname_em[1].innerHTML="错误"
		}		
	}
//确认密码
	var flagqpwd=null;
	$id("qpwd").onfocus=function(){
		uname_em[2].innerHTML="请再次输入密码...";
	}
	$id("qpwd").onblur=function(){
		var oldval=$id("upwd").value;
		var val=$id("qpwd").value;
		if(val==oldval){
			flagqpwd=true;
			uname_em[2].innerHTML="正确"
		}else{
			$id("qpwd").value=""
			uname_em[2].innerHTML="两次输入密码不一致"
			flagqpwd=false;
		}
	}
	//验证邮箱
	$id("eMail").onfocus=function(){
		uname_em[3].innerHTML="请输入邮箱，用来找回密码，接受订单通知";
	}
	var flagupwd=null;
	$id("eMail").onblur=function(){
		var reg=/^\w+@\w+(\.\w+)+$/ig;
		var val=$id("eMail").value		
		if(reg.test(val)){
			
			uname_em[3].innerHTML="正确"	
		}else{
			
			uname_em[3].innerHTML="邮箱格式不正确"
		}		
	}
	
	
	//确认验证码；
	pay2.onclick=function(){
		pay1.innerHTML=rand(1,100000);
	}
	
	var flagCode=null;
	$id("verificationCode").onfocus=function(){
		
		uname_em[6].innerHTML="请输入验证码";
	}
	$id("verificationCode").onblur=function(){
		var oldCode=pay1.innerHTML;
		var val=$id("verificationCode").value;
		console.log(oldCode)
		console.log(val)
		if(val==oldCode){
			uname_em[6].innerHTML="正确"
			flagCode=true;
		}else{
			
			uname_em[6].innerHTML="验证码不正确";
			
			flagCode=false;
		}
	}	








	
	
}
