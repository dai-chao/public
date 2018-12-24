function move(obj,target,attr){// obj ： 运动的对象   target :运动的目标    attr :   哪个属性运动
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var cur = 0;
		if(attr == "opacity"){ // "0.3"   js 小数容易出问题 ，咱们要把 小数变为整数   
			cur = parseFloat(getStyle(obj,attr)) * 100; // getStyle（）取出来的是字符串 ， 所以 parseFloat
		}else{
			cur = parseInt(getStyle(obj,attr)); // parseInt 去掉单位
		}
		
		var speed = (target - cur) / 10;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(target == cur){
			clearInterval(obj.timer);
			return
		}
		if(attr == "opacity"){
			obj.style[attr] = (cur + speed) / 100;
		}else{
			obj.style[attr] = cur + speed + "px";
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
	
	//console.log(getStyle(box,"width"));
	