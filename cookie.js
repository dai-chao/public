function setCookie(name,val,days){ //存cookie
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + days);
	document.cookie = name + "=" + val + ";expires="+oDate;
}

function getCookie(name){
	//userName=小红; sex=boy; age=99
	var arr = document.cookie.split(";");//["userName=小红", " sex=boy", " age=99"]
	for(var i = 0; i < arr.length; i++){
		var cur = arr[i].replace(/^\s*/g,"");
		var str = cur.split("=");
		
		if(str[0] == name){
			return str[1];
		}
	}
	
	return "";
	
}

function delCookie(name){//删除cookie
	setCookie(name,"",-1);
}