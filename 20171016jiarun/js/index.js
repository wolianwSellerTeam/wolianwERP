
$(function(){
	var linum=$(".ulBox li").size();
	var liWidth=$(".ulBox li").width();
	if(linum>1){
		produceLi(linum);
		var widthul=$(".ulBox").css("width", liWidth*linum+"px");
		$(".ulBox li").width(liWidth);
		$(".quare_ul li:first").addClass("inThis");
		$(".quare_ul li").click(function(){
			var liIndex=$(this).index();
			$(this).addClass("inThis").siblings().removeClass("inThis");
			$(".ulBox").animate({
					left:-liIndex*liWidth+'px'
			},500);
		});
	}
	
	var bannerTextHeight=$(".baner_txt").height();
	$(".baner_txt").css("marginTop", -bannerTextHeight/2+"px");
	
	$(".myTab li").each(function(){
		if($(this).hasClass("activeLi")){
			var serviceDivId=$(this).attr("data-point");
			$("#"+serviceDivId).show().siblings("div").hide();
		}
		
		$(this).click(function(){
			$(this).addClass("activeLi").siblings("li").removeClass("activeLi");
			var serviceDivId=$(this).attr("data-point");
			$("#"+serviceDivId).show().siblings("div").hide();
		})
		
	});
	
	$("#productCenterContainer .leftNav li").each(function(){
		//产品中心 左侧菜单树 鼠标悬停li 切换图片
		$(this).hover(function(){
				if($("img", this).attr("src").indexOf("pointUp")>0){
					$("img", this).attr("src", 'img/pointUp_black.png');
				}else{
					$("img", this).attr("src", 'img/pointDown_black.png');
				}
			},function(){
				if($("img", this).attr("src").indexOf("pointUp")>0){
					$("img", this).attr("src", 'img/pointUp_gray.png');
				}else{
					$("img", this).attr("src", 'img/pointDown_gray.png');
				}
		});
		//鼠标点击  下拉二级菜单或者收起
		$(this).click(function(event){
			if(event.target==this||event.target==$("a", this)[0]||event.target==$("img", this)[0]){
				$('dl', this).slideToggle();
			}
			if($("img", this).attr("src").indexOf("pointUp")>0){
				var newsrc=$("img", this).attr("src").replace("Up", "Down");
				$("img", this).attr("src", newsrc);
			}else{
				var newsrc=$("img", this).attr("src").replace("Down", "Up");
				$("img", this).attr("src", newsrc);
			}
		});
	});
	
	//ifrme 自适应高度
	if(document.getElementById("rightContentFrame")){
		parent.document.getElementById("rightContentFrame").height=0;
		parent.document.getElementById("rightContentFrame").height=document.body.scrollHeight;
	}
	
	$("li.productCenterLi").hover(function(){
			$("div", this).show(150);
		},function(){
			$("div", this).hide(150);
	});
	
});

//banner  根据图片的数量（其实也是li的数量）自动增加小圆点（用于点击切换banner图片）
function produceLi(liNum){
	for(var i=0;i<liNum;i++){
		var strli='<li class="liYuan" id=liYuan'+i+'></li>';
		$(".quare_ul").append(strli);
	}
}

if($("#serviceWrap").length!=0){
	var theLeft=$("#serviceWrap").offset().left;
	var theWidth=$("#serviceWrap").width();
	$(".rightPullOver").css("left", theLeft+theWidth+5+'px');
}


//点击提交需求按钮   打开需求页面弹窗
function submitRequire(){
	layer.open({
	  type: 2,
	  title: "稳定同位素化合物定制需求信息表",
	  closeBtn: 1, //显示关闭按钮
	  shade: [0.5],
	  area: ['940px', '680px'],
	  anim: 0,
	  content: ['require.html', 'no'], //iframe的url，no代表不显示滚动条
	});
}

//把jquery序列化的表单string 转成json
(function($){  
    $.fn.serializeJson=function(){  
        var serializeObj={};  
        $(this.serializeArray()).each(function(){  
            serializeObj[this.name]=this.value;  
        });  
        return serializeObj;  
    };  
})(jQuery); 
