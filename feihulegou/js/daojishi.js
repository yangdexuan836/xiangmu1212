	var start = new Date();//当前时间
	//如果时分秒默认  默认是早上08:00:00
	var end = new Date("2018-1-25 10:00:00");//结束时间
	var t = diff( start ,end );	
	//时间显示
	function showTime(){
		//剩余的小时
		var h = parseInt(t/3600);
		//剩余的分钟 = 剩余的秒数  / 60: 
		var m = parseInt( (t - h*3600)/60 );
		//剩余的秒数
		var s = parseInt(t - h*3600 - m * 60);
		if(h<10){
			$id("p1").innerHTML ="0"+ h + ":";
		}else{
			$id("p1").innerHTML = h + ":";			
		}
		if(m<10){
			$id("p2").innerHTML ="0"+ m + ":";
		}else{
			$id("p2").innerHTML =m + " :";		
		}
		if(s<10){
			$id("p3").innerHTML ="0"+ s;
		}else{
			$id("p3").innerHTML = s ;			
		}
		
	}
	showTime();	
	var timer = setInterval(function(){
		t--;
		if( t < 0 ){
			$id("p1").innerHTML = "商品已过期";
			clearInterval(timer);
		}else{
			showTime();
		}
	},1000)
