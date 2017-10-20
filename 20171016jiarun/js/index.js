
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
		$(this).hover(
			function(){
				if($("img", this).attr("src").indexOf("pointUp")>0){
					$("img", this).attr("src", 'img/pointUp_black.png');
				}else{
					$("img", this).attr("src", 'img/pointDown_black.png');
				}
				
			},
			function(){
				if($("img", this).attr("src").indexOf("pointUp")>0){
					$("img", this).attr("src", 'img/pointUp_gray.png');
				}else{
					$("img", this).attr("src", 'img/pointDown_gray.png');
				}
			}
		);
		
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
	
	
	if(document.getElementById("rightContentFrame")){
		parent.document.getElementById("rightContentFrame").height=0;
		parent.document.getElementById("rightContentFrame").height=document.body.scrollHeight;
	}
	
	
});

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

