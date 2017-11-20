/*
 * Ajax的原理简单来说通过XmlHttpRequest对象来向服务器发异步请求，
 * 从服务器获得数据， 然后用javascript来操作DOM而更新页面。
 * */


/*
 * _type:  "get/post"
 *_url: 链接
 * _async: true(异步) / false(同步)
 */
function my_ajax(_type, _url, _async){

  var xmlHttp = false;
//非IE浏览器创建XmlHttpRequest对象
	if(window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
  }

//IE浏览器创建XmlHttpRequest对象
	if(window.ActiveXObject){
		try{
		    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}catch (e){
			try{
			    xmlHttp = new ActiveXObject("msxml2.XMLHTTP");
			   }catch (ex) {
			   	alert("你的浏览器不支持XMLHTTP对象，请升级到IE6以上版本！");	
			   	xmlHttp = false;  
			   }
    }
  }
  
	if (!xmlHttp) {
	  alert("创建xmlHttp对象异常！");
		return false;
  }
	
	xmlHttp.open(_type, _url, _async);
	//onreadystatechange 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。 
	
	//在open和send之间设置Content-Type
  xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            
	xmlHttp.onreadystatechange = function (){
		if(xmlHttp.readyState == 4){
		//readyState:
			//0: 请求未初始化
			//1: 服务器连接已建立 
			//2: 请求已接收 
			//3: 请求处理中 
			//4: 请求已完成，且响应已就绪 
		//status:
			//200: "OK" 
			//404: 未找到页面
	    document.getElementById("ajaxDiv").innerHTML = "数据正在加载...";
			if (xmlHttp.status == 200) {
        alert(xmlHttp.responseText);
      }
	  }
	}
	
	xmlHttp.send(null);
	
}