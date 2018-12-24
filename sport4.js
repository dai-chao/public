function move(obj,data,callback){// obj ： 运动的对象   data: 对象代表着所有属性和目标值   callback:代表回调函数
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		for(var attr in data){
			var cur = 0;
			if(attr == "opacity"){ // "0.3"   js 小数容易出问题 ，咱们要把 小数变为整数   
				cur = parseFloat(getStyle(obj,attr)) * 100; // getStyle（）取出来的是字符串 ， 所以 parseFloat
			}else{
				cur = parseInt(getStyle(obj,attr)); // parseInt 去掉单位
			}
			
			var speed = (data[attr] - cur) / 10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(data[attr] == cur){ //box宽 到目标的时候  
				clearInterval(obj.timer);
				if(callback){ // 没给callback传值，callback是undefined；undefined执行就会报错 ，所以要判断下，如果传值callback为真 
					callback();
				}
				
				return
			}
			if(attr == "opacity"){
				obj.style[attr] = (cur + speed) / 100;
			}else{
				obj.style[attr] = cur + speed + "px";
			}
		}
		
		
		
		
	},30)
	
}

function getStyle(obj,attr){//获取真实样式
	if(window.getComputedStyle){// 高版本
		return window.getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}