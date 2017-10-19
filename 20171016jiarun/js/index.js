
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
	
	$(".leftNav li>img").each(function(){
		$(this).hover(function(){
			$(this).attr("src", 'img/pointUp_black.png');
		},function(){
			$(this).attr("src", 'img/pointUp_gray.png');
		});
		
		$(this).click(function(){
			$(this).siblings("dl").slideToggle();
		});
	})
	
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

