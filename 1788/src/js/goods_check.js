
layui.use(['element','jquery'],function () {
    var element=layui.element;
    var $=layui.jquery;
    
    //li 边框线运动特效
	$('.list_goods_ul > li').each(function(){
		var li_width = $(this).width();
		var li_height = $(this).height();
		$(this).hover(function(){
			$(this).find('.border-left,.border-right').stop().animate({height:li_height+'px'}, 400);
			$(this).find('.border-top,.border-bottom').stop().animate({width:li_width+'px'}, 400);
		},function(){
			$(this).find('.border-left,.border-right').stop().animate({height:'0'}, 400);
			$(this).find('.border-top,.border-bottom').stop().animate({width:'0'}, 400);
		});
	});
    
	// i 多选框特效（搬家，查看店内所有商品）
    $(".check_i").click(function(){
    	$(this).toggleClass("fa-square-o").toggleClass("fa-check-square");
    	$(this).parent().toggleClass("i_checked");
    });
    
    $(".focus").click(function(){
    	$(this).toggleClass("fa-heart-o").toggleClass("fa-heart");
    	$(this).parent().toggleClass("i_checked");
    });
    
    $(".addToCart").click(function(){
    	$(this).parent().toggleClass("i_checked");
    });
    
   
    

})