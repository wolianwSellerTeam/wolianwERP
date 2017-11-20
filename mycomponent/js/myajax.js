/*
 * _type: get/post
 *_url: 链接地址
 * —async: 同步(false)/异步(true)
 */
function myajax(_type, _url, _async){
	var xmlHttp = null;
	try{
  	// Firefox, Opera 8.0+, Safari
  	xmlHttp = new XMLHttpRequest();    // 实例化对象
 	}catch(e){
     // Internet Explorer
    try{
      xmlHttp = new ActiveXObject( "Msxml2.XMLHTTP" );
    }catch(e){
      try{
       xmlHttp = new ActiveXObject( "Microsoft.XMLHTTP" );
      }catch(e){
       alert("您的浏览器不支持AJAX！");
       return false;
      }
   	}
  }
 	
  xmlHttp.open(_type, _url, _async);
  xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  
  xmlHttp.onreadystatechange = function(){
  	if( xmlHttp.readyState == 4){
  		document.write("数据正在加载中...");
  		if(xmlHttp.status == 200){
  			 
      	document.getElementById("myh").innerHTML = xmlHttp.responseText;
  		}
    }
  }
  
  xmlHttp.send(null);
}
