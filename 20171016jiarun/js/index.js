
$(function(){
	var linum=$(".ulBox li").size();
	var liWidth=$(".ulBox li").width();
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
	
});

function produceLi(liNum){
	
	for(var i=0;i<liNum;i++){
		var strli='<li class="liYuan" id=liYuan'+i+'></li>';
		$(".quare_ul").append(strli);
	}
}
