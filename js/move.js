
//获取样式简洁版
/*获取当前对象的属性值(数值)
 * obj:当前html对象
 * attr:需要获取的属性(width,height,fontSize,border,opacity等)
 */
function getStyle(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}
	
/* 多物体缓冲运动框架【一次只能作用于一个对象的一个属性】
 * obj:当前html对象
 * attr:需要运动的属性(width,height,fontSize,border,opacity等)
 * iTarget:目标值(数字)
 *fn:回调函数 到达目标值以后 清除定时器 停止运动 然后执行这个函数 [可用于制作链式运动]
 */
function _startMove(obj,attr,iTarget,suv,fn){
	//首先清除上一个定时器，排除干扰，防止污染
	clearInterval(obj.timer);
	
	//定义一个变量 用来存放 经过处理以后的获取的属性值(number)
	var attrNum=0;
	
	//开启定时器 timer 把定时器timer 丢给当前的对象当做一个属性obj.timer，防止受到其他对象开启的定时器干扰
	obj.timer=setInterval(function(){
		//如果当前需要运动的属性是 透明度：opacity
		if(attr=="opacity"){
			attrNum=parseInt(parseFloat(getStyle(obj,attr))*100);
		}else{//如果当前需要运动的属性是 不是透明度，其余的任何带有数值的属性都行
			attrNum=parseInt(getStyle(obj,attr));
		}
		var iSpeed=0;
		//缓冲运动的核心计算方法：速度从最快慢慢减弱（速度先快后慢） iSpeed:运动的速度（一直在变化着）
		if(suv){
			iSpeed=(iTarget-attrNum)/suv;
		}else{
			iSpeed=(iTarget-attrNum)/7;
		}
		//三木运算 当速度大于0时向上取整，否则向下取整 ，防止速度出现小数情况造成运动不停和抖动
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);//Math.ceil()向上取整    Math.floor()向下取整
		if(attrNum==iTarget){//如果运动到达目标值时 清除定时器 停止运动
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
		else{//没有到达目标值继续运动
			if(attr=="opacity"){//透明度运动方法
				obj.style.filter="alpha(opacity="+(attrNum+iSpeed)+")";
				obj.style.opacity=(attrNum+iSpeed)/100;
			}else{//非透明度运动方法
				obj.style[attr]=attrNum+iSpeed+'px';
			}
		}
	},30);
}


/* 多物体缓冲运动框架【完美】 多个属性同时起作用
 * obj:当前html对象
 *json:{attr:iTarget} 多个属性和目标值的合并为json 这样可以一次设置多个属性 同时运动
 *fn:回调函数 到达目标值以后 清除定时器 停止运动 然后执行这个函数 [可用于制作链式运动]
 */

function startMove(obj,json,fn){
	//首先清除上一个定时器，排除干扰，防止污染
	clearInterval(obj.timer);
	
	//定义一个变量 用来存放 经过处理以后的获取的属性值(number)
	var attrNum=0;
	//开启定时器 timer 把定时器timer 丢给当前的对象当做一个属性obj.timer，防止受到其他对象开启的定时器干扰
	obj.timer=setInterval(function(){
		for(var attr in json){
			//如果当前需要运动的属性是 透明度：opacity
			if(attr=="opacity"){
				attrNum=parseInt(parseFloat(getStyle(obj,attr))*100);
			}else{//如果当前需要运动的属性是 不是透明度，其余的任何带有数值的属性都行
				attrNum=parseInt(getStyle(obj,attr));
			}
			//缓冲运动的核心计算方法：速度从最快慢慢减弱（速度先快后慢） iSpeed:运动的速度（一直在变化着）
			var iSpeed=(json[attr]-attrNum)/7;
			//三木运算 当速度大于0时向上取整，否则向下取整 ，防止速度出现小数情况造成运动不停和抖动
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);//Math.ceil()向上取整    Math.floor()向下取整
			if(attrNum==json[attr]){//如果运动到达目标值时 清除定时器 停止运动
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
			else{//没有到达目标值继续运动
				if(attr=="opacity"){//透明度运动方法
					obj.style.filter="alpha(opacity="+(attrNum+iSpeed)+")";
					obj.style.opacity=(attrNum+iSpeed)/100;
				}else{//非透明度运动方法
					obj.style[attr]=attrNum+iSpeed+'px';
				}
			}
		}
	},30);
}

