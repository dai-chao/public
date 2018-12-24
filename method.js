////随机色  (rgba颜色 )
    function color() {
        var me=Math.round(Math.random()*255);
        var mr=Math.round(Math.random()*255);
        var mt=Math.round(Math.random()*255);
        var mx=Math.random(0,1).toFixed(1);
        var randomColor="rgba("+me+","+mr+","+mt+","+mx+")";
        return randomColor;
    }

///(十六进制随机色)
    function randomColor() {　
     var colorStr = Math.floor( Math.random() * 0xFFFFFF ).toString( 16 ).toUpperCase();　
      console.log(colorStr);
     return "#" + "000000".substring( 0, 6 - colorStr ) + colorStr;
        }




//  随机数
function rand(n,m){
    return Math.round(Math.random() * (m - n) + n );
}


//通过id名  获取元素
function $id(id){
    return document.getElementById(id);
}
// 调用方式     var box=$id("box");


// n - m之间的随机整数
function rand(n,m){
    return Math.round(Math.random() * (m - n) + n );
}

//通过id名  获取元素
function $id(id){
    return document.getElementById(id);
}

//随机出来一个十六进制的颜色
function getColor(){
    var str = "0123456789ABCDEF";
    var color = "#";
    for(var i = 0; i < 6; i++){
        color += str.charAt(rand(0,15));    //随机出来一个下标，给下标找对应的字符
    }
    return color;
}

function zero(val){//不足10  前面补0
    return val < 10 ? "0" + val : val;
}



/*
 思路 ：  1.为所有的li添加单击事件
       2判断li内部的是否有子元素 ul
       3.如果有子元素ul，看你这个子元素ul是否显示，如果显示我让它隐藏；否则就显示
 * */
// var list=document.getElementsByTagName("li");
// for (var i=0;i<list.length;i++){
//     list[i].onclick=function (e) {
//         var  e = e || event;
//         e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
//         if(this.lastElementChild){
//             if(this.lastElementChild.style.display =="block"){
//                 this.lastElementChild.style.display="none";
//             }else {
//                 this.lastElementChild.style.display="block";
//             }
//         }
//     }
// }

