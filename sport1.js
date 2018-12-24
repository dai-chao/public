function getStyle(obj,attr){//获取真实样式
	if(window.getComputedStyle){// 高版本
		return window.getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}
	
	//console.log(getStyle(box,"width"));
	
	
function move(obj,target,attr){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var cur = parseInt(getStyle(obj,attr)); // 12 px  
		var speed = (target - cur) / 10;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(target == cur){
			clearInterval(obj.timer);
			return
		}
		obj.style[attr]  = cur + speed + "px";
		
	},30)
	
}