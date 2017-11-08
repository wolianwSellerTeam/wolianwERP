(function($){
	 var methods = {
        init: function(){
      			this.$ul = $("<ul></ul>"); //用来装img的ul
      			this.$ol = $("<ol></ol>"); //用来装小圆点的ol
						for(var i=0; i<this.$lisNum; i++){//根据图片数量(this.$lisNum)生成同样数量的li
					  	$("<li><img src='"+this.$imagesArr[i]+"' /></li>").appendTo(this.$ul);
					  }
						this.css({"width": this.$width+"px", "height": this.$height+"px", "position": "relative", "overflow": "hidden", "margin": "auto" });
						this.$ul.css({"width": this.$width*this.$lisNum+"px", "height": this.$height+"px", "position": "absolute"});
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
		    	},3000);
        },
        next: function(){
			  	var me = this;
			  	me.$index++
          me.$index %= me.$lisNum;
          me._listen(me.$index);
			    me.$ul.animate({ left : -me.$index * me.$width + "px"}, 200)
			  },
			  prev: function(){
			  	var me = this;
			  	if(me.$index == 0){ me.$index = me.$lisNum }
          me.$index--;
          me._listen(me.$index);
			    me.$ul.animate({ left : -me.$index * me.$width + "px"}, 200);
			  },
			  _listen: function(num){
					this.$index = num || this.$index;
					this.$olLis.eq(this.$index).addClass("selected").siblings().removeClass("selected");
				}
    };
	$.fn.carousel =function(option){
			var settings = $.extend(this, option, methods);
      
			var me = this;
			me.$imagesArr = option.images;
			me.$height = option.height;
			me.$width = option.width;
			me.$lisNum =option.images.length;
			me.leftImg = option.leftImg || null;
			me.rightImg = option.rightImg || null;
			option.leftImg == null ? me.$leftBtn = $("<a href='javascript:;' class='left_btn'>next</a>") : me.$leftBtn = $("<a href='javascript:;' class='left_btn'><img src='"+me.leftImg+"' /></a>");
			option.rightImg == null ? me.$rightBtn = $("<a href='javascript:;' class='right_btn'>prev</a>") : me.$rightBtn = $("<a href='javascript:;' class='right_btn'><img src='"+me.rightImg+"' /></a>");
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
      //-
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
