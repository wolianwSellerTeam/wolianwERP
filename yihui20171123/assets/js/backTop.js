
(function(){
	
	//强行暴露一个变量
	window.BackTop = BackTop;
	
	function BackTop(options) {
	 
		var settings = {
			id : "topA",
			text: "顶部",
			width : "50",
			height : "50",
			right : "50",
			bottom : "50"
		}
		
		$.extend(this, settings, options);
		//防止出现传入的是字符串 ：比如 "50px"  处理以后 50 || "50" || "50px" 都能正常运行
		this.width = parseInt(this.width);
		this.height = parseInt(this.height);
		this.right = parseInt(this.right);
		this.bottom = parseInt(this.bottom);
		
		this.init();
		this.addListener();
	}

	BackTop.prototype = {
		
		init: function(){
			if(this.image){
				this.$dom = $('<a id="'+this.id+'" href="javascript:;"><img src="'+this.image+'" /></a>');
			}else{
				this.$dom = $('<a id="'+this.id+'" href="javascript:;">'+this.text+'</a>');
			}
			
			this.$dom.css({
				"width": this.width+"px",
				"height": this.height+"px",
				"right": this.right+"px",
				"bottom": this.bottom+"px",
				"background-color": "rgba(0,0,0,0.3)",
				"position": "fixed",
				"color": "#fff",
				"text-align": "center",
				"line-height": this.height+"px"
			});
			if(this.image){
				this.$dom.css("background-color", "transparent");
			}
			$("body").append(this.$dom);
		},
		addListener: function(){
			var that = this;
			var top = $(document).scrollTop();
			if(top == 0){
				if(that.image){
					this.$dom.find("img").hide();
				}else{
					this.$dom.css({"height": 0, "color": "transparent"});
				}
			}
			
			$(document).scroll(function(){
				var top = $(this).scrollTop();
				if(top == 0){
					that.$dom.animate({ "height": 0 }, 500, function(){
						if(that.image){
							that.$dom.find("img").hide();
						}else{
							that.$dom.css("color", "transparent");
						}
					});
				}else{
					that.$dom.stop(true).animate({ "height": that.height}, 0, function(){
						if(that.image){
							that.$dom.find("img").show();
						}else{
							that.$dom.css("color", "#fff");
						}
					});
				}
			});
			
			this.$dom.click(function() { 
			  $("html, body").animate({ scrollTop: 0 }, "slow"); 
			  return false; 
			});
			
			this.$dom.hover(function(){
				if(that.image){
					$(this).find("img").css("opacity", "0.5");
				}else{
					$(this).css("background-color", "rgba(0,0,0,0.5)");
				}
				
			},function(){
				if(that.image){
					$(this).find("img").css("opacity", "1");
				}else{
					$(this).css("background-color", "rgba(0,0,0,0.3)");
				}
			});
			
		}
		
	}
	
})();
