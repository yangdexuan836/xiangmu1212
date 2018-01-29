//根据id查找页面元素
function $id(id){
	return document.getElementById(id);
}

//获取任意区间值
function rand(min,max){
	return Math.round( Math.random()*(max-min) + min );
}

//随机颜色值获取
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";
	for( var i =1 ; i <= 6 ; i++ ){
		color += str.charAt( rand(0,15) );
	}
	return color;
}

function dateToString(sign){
	//如果用户不传递任何参数  默认日期间隔符号是  - 
	/*if( !sign ){
		sign = "-";
	}*/
	sign = sign || "-";//如果sign是未定义，就按默认值 "-"
	var d = new Date();
	var y = d.getFullYear();
	var m =toTwo( d.getMonth() + 1 ) ;
	var _date =toTwo( d.getDate() );
	var h =toTwo( d.getHours() );
	var min =toTwo( d.getMinutes() );
	var s =toTwo( d.getSeconds() );
	return y + sign + m + sign + _date + " " + h + ":" + min + ":" + s;
}
//如果得到的是小于10的数 就 拼接0
function toTwo(val){
	return val < 10 ? "0" + val : val;
}

//将一个字符串转成日期
function stringToDate(str){
    return  new Date(str);
}
//时间差
function diff(start,end){
	return Math.abs( start.getTime() - end.getTime() ) / 1000;
}

//动态创建元素
function createEle(ele){
	return document.createElement(ele);
}
//碰撞函数
function pz(obj1,obj2){
	var L1 = obj1.offsetLeft;
	var R1 = obj1.offsetWidth + obj1.offsetLeft;
	var T1 = obj1.offsetTop;
	var B1 = obj1.offsetHeight + obj1.offsetTop;
	
	var L2 = obj2.offsetLeft;
	var R2 = obj2.offsetWidth + obj2.offsetLeft;
	var T2 = obj2.offsetTop;
	var B2 = obj2.offsetHeight + obj2.offsetTop;
	
	//如果碰不上   返回false  碰上了就返回true
	if( R1 < L2 || L1 > R2 || B1 < T2 || T1 > B2){
		return false;
	}else{
		return true; //碰上了
	}
}


//设置cookie
function setCookie(key,value,day){
	if( day ){
		var d = new Date();
		d.setDate( d.getDate() + day );
		document.cookie = key + "=" + value + ";expires=" + d;
	}else{
		document.cookie = key + "=" + value;
	}
	
}
//获取cookie
function getCookie(key){
	//判断是否有cookie
	if( document.cookie ){
		var str = document.cookie;
		var arr = str.split("; ");
		
		for( var i = 0 ; i < arr.length ; i++ ){
			var item = arr[i].split("=");
			if( item[0] == key ){
				return item[1];//返回key对应的value值 是一个字符串
			}
		}
		//循环结束后   没有对应的key   就返回一个""
		return ""; //说明有cookie  但是没有key
	}
	
	//如果没有cookie  返回一个""
	return "";// 说明没有cookie
}

//删除cookie   -1  或  ""
function removeCookie(key){
	//document.cookie = key + "= '';expires=-1" 
	setCookie(key , "" , -1);
}

//运动函数
//obj要操作的对象
// json 代表 多个attr和target   { "width" : 3 ,"height":3000 }
// callback 表示一个函数    一个函数作为参数，这样的函数 叫做   回调函数
function startMove(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;//如果值为真  表示所有动作都已经完成 可以停止定时器了
		for( var attr in json ){
			var current = 0;
			if( attr == "opacity" ){ //透明度
				current = parseFloat( getStyle(obj,attr) ) * 100;
			}else if( attr == "zIndex" ){
				current = parseInt( getStyle(obj,attr) ) ;
			}else{
				current = parseInt( getStyle(obj,attr) ) ; 
			}
			
			var speed = (json[attr]-current)/10;
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
			if( current!=json[attr] ){//没有达到目标值  将开关变成false
				flag = false;
			} 
			
			if( attr == "opacity" ){ //透明度的操作
				obj.style[attr] = (current + speed) / 100;
			}else if( attr == "zIndex" ){
				obj.style[attr] = json[attr];
			}else{
				obj.style[attr] = current + speed + "px";
			}
		}
	
		//如果flag值为真  表示所有动作都已经完成 可以停止定时器了
		if( flag ){
			clearInterval( obj.timer );
			//上个动作结束后进入下一个动作   
			if( callback ){
				callback();
			}
		}
	},30)
}


//获取非行内元素样式    实际值  
function getStyle(obj,attr){ 
	if( getComputedStyle ){
		return window.getComputedStyle(obj,false)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}
