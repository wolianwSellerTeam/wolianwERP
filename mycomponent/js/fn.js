(function($){
	var methods = {
      init: function(){
    			this.$ul = $("<ul></ul>"); //用来装img的ul
    			this.$ol = $("<ol></ol>"); //用来装小圆点的ol
					for(var i=0; i<this.$lisNum; i++){//根据图片数量(this.$lisNum)生成同样数量的li
				  	$("<li><img src='"+this.$imagesArr[i]+"' /></li>").appendTo(this.$ul);
				  }
					this.css({
						"width": this.$width+"px", 
						"height": this.$height+"px", 
						"position": "relative", 
						"overflow": "hidden", 
						"margin": "auto" 
					});
					this.$ul.css({
						"width": this.$width*this.$lisNum+"px", 
						"height": this.$height+"px", 
						"position": "absolute"
					});
					this.$ul.find("li").css({"float": "left", "width": this.$width+"px", "height": "100%"});
					this.$ul.find("li img").css({"width": "100%", "height": "100%"});
					for(var m=0; m<this.$lisNum; m++){
				  	$("<li></li>").appendTo(this.$ol);
				  }
					this.$olLis = this.$ol.find("li");
					this.$olLis.each(function(index, e){
						$(e).css({
							"float" : "left",
							"width" : "10px",
							"height" : "10px",
							"marginRight" : "10px",
							"background-color" : "rgba(0,0,0,0.5)",
							"borderRadius" : "50%"
						});
					}.bind(this));
					this.$olLis.last().css("marginRight", "0px");
					this.$ol.css({
						"listStyle" : "none",
						"cursor" : "pointer",
						"position" : "absolute",
						"bottom" : "20px",
						"left" : "50%",
						//margin-left为 ol总长度/2, ol总长度没定义，根据填充内容来计算。方法:数量*li宽度(20)+(数量-1)*右边距(10)
						"marginLeft" : -(this.$lisNum*10 + (this.$lisNum -1)*10) / 2+"px"
					});
					this.append(this.$ul);
					this.append(this.$ol);
			    this.append(this.$leftBtn);
			    this.append(this.$rightBtn);
    	},
      move: function(){
      	var me = this;
        me.timer = setInterval(function(){
	      	me.next();
	    	},4000);
      },
      next: function(){
		  	var me = this;
		  	me.$index++
        me.$index %= me.$lisNum;
        me._listen(me.$index);
		    me.$ul.stop(true, false).animate({ left : -me.$index * me.$width + "px"}, 500)
		  },
		  prev: function(){
		  	var me = this;
		  	if(me.$index == 0){ me.$index = me.$lisNum }
        me.$index--;
        me._listen(me.$index);
		    me.$ul.stop(true, false).animate({ left : -me.$index * me.$width + "px"}, 500);
		  },
		  _listen: function(num){
				this.$index = num || this.$index;
				this.$olLis.eq(this.$index).addClass("selected").siblings().removeClass("selected");
			}
  };
    
	$.fn.carousel =function(option){
			
			//默认值 
			var settings = {
				width : "100%",
				height : "300px",
				images: []
			}
			
			$.extend(this, settings, option, methods);
			var me = this;
      
			me.$imagesArr = me.images;
			me.$height = parseInt(me.height);
			//如果没传 宽度值【默认为100%】 或者设置为100%  （100%也不是数值啊 需要转化为屏幕宽度值）屏幕宽度值 -20滚动条
			//设置了宽度值的话， 给防止有字符串类型 比如：width: "500", width: "500px"
			me.width == "100%" ? me.$width = window.innerWidth - 20 : me.$width = parseInt(me.width); 
			me.$lisNum = me.$imagesArr.length;
			me.leftImgUrl = me.leftImgUrl || null;  //左边的图片链接
			me.rightImgUrl = me.rightImgUrl || null; //右边图片的链接
			me.leftImgUrl == null ? me.$leftBtn = $("<a href='javascript:;' class='left_btn'>next</a>") : me.$leftBtn = $("<a href='javascript:;' class='left_btn'><img src='"+me.leftImgUrl+"' /></a>");
			me.rightImgUrl == null ? me.$rightBtn = $("<a href='javascript:;' class='right_btn'>prev</a>") : me.$rightBtn = $("<a href='javascript:;' class='right_btn'><img src='"+me.rightImgUrl+"' /></a>");
      me.timer = null;
      me.$index = 0;
      me.init();
      me._listen();
			
      me.mouseenter(function(){
        clearInterval(me.timer);
      }).mouseleave(function(){
        me.move();
      });
	    //-----------------left_btn上一张图片---------------
      me.$leftBtn.click(function(){
          me.next();
      });
      //-----------------rigth_btn下一张图片---------------
      me.$rightBtn.click(function(){
          me.prev();
      });
      //-----------------下一张图片---------------
			me.$olLis.bind("click", function(e){
				me.$index = $(e.target).index() - 1; //因为要调用next()方法 里面的me.$index变量要加一，所以这里要-1
				me.next();
			});
			
			return this;
	};


	
})(jQuery);
