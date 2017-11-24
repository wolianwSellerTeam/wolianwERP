(function(){
	//强行暴露一个变量
	window.Carousel = Carousel;
	
		function Carousel(json){
			this.$dom = $("#" + json.id);  //根据id获取盒子jqueryDOM， 后面加了$符号的 都是jQuery对象 
			this.$imageUrlArr = json.images;//图片数组
			this.$imageNum = json.images.length;//图片的数量==li的数量==ul的数量
			this.$a_hrefArr = json.a_href || null;  //有没有超链接，没有的话 就是null
			this.$height = parseInt(json.height) || 300; //整个盒子的高度：图片的高度==li的高度==ul的高度
			this.$width = parseInt(json.width) || "100%"; //有没有设置宽度，不设置的话 默认为100%
			this.$index = 0;//当前显示的li序列号
			this.$intervalTime = json.interval || 3500;//定时器
			this.$animateTime = json.animate || 500;//animate动画速度
			this.init();//初始化(生成)
			this._hover();//悬停状态（$dom盒子 和 左($leftBtn)右($rightBtn)切换按钮 的悬停事件 ）
			this._click();//(左($leftBtn)右($rightBtn)切换按钮 和 小圆点的点击事件)
			this._listen();//监听小圆点的状态 （哪个处于selected状态）
			this._setTimer(); //设置定时器方法
		}
			
		Carousel.prototype.init = function(){
			//设置轮播图大盒子的样式	
			this.$dom.css({
				"margin" : "0 auto",
				"overflow" : "hidden",
				"width" : this.$width+"px",
				"height" : this.$height + 80+"px",
				"position" : "relative"
			});
			
			this.$imageUl = $("<ul></ul>");//定义装图片的ul
			//根据图片数量 创建同等量的li
			for(var i=0; len = this.$imageNum, i < len; i++){
				//如果有超链接 就把超链接加入进去 如果没有就不加
				if(this.$a_hrefArr){//hideFocus 是为了去掉IE下 a标签点击时出现虚线边框
					$("<li><a hideFocus href='" + this.$a_hrefArr[i] + "'><img src='" + this.$imageUrlArr[i] + "' /></a></li>").appendTo(this.$imageUl);
				}else{
					$("<li><img src='" + this.$imageUrlArr[i] + "' /></li>").appendTo(this.$imageUl);
				}
			}
			//设置存放图片的ul的样式
			this.$imageUl.css({
				//ul的宽度为：展示区域的宽度*数量
				"width" : this.$width * this.$imageNum + "px",
				"position" : "absolute",
				"listStyle" : "none",
				"left" : "0px",
				"top" : "0px"
			});
			this.$imageUlLis = this.$imageUl.find("li");
			this.$imageUlLis.css({
				"float" : "left",
				"width" : this.$width + "px"
			});
			
			this.$divBox = $("<div id='divBox'></div>");
			this.$divBox.css({
				"position": "absolute",
				"bottom" : "0",
				"height": "60px",
				"width": "100%"
			});
			this.$circleOl = $("<ol></ol>");//定义一个ol有序列表
			//根据图片数量 创建同等量的li小圆点
			for(var m = 0; lem = this.$imageNum, m < lem; m++){
				$("<li><img height='60px' width='100px' src='" + this.$imageUrlArr[m] + "' /></li>").appendTo(this.$circleOl);
			}
			this.$circleOlLis = this.$circleOl.find("li");
			this.$circleOlLis.each(function(index, e){
				$(e).css({
					"float" : "left",
					"width" : "100px",
					"position": "relative",
					"height" : "60px",
					"box-sizing": "border-box",
					"marginRight" : "10px",
					"background-color" : "rgba(0,0,0,0.5)"
				});
			}.bind(this));
			this.$circleOlLis.last().css("marginRight", "0px");
			this.$circleOl.css({
				"listStyle" : "none",
				"height": "60px",
				"cursor" : "pointer",
				"position" : "absolute",
				"bottom" : "0",
				"left" : "50%",
				//margin-left为 ol总长度/2, ol总长度没定义，根据填充内容来计算。方法:数量*li宽度(100)+(数量-1)*右边距(10)
				"marginLeft" : -(this.$imageNum*100+(this.$imageNum-1)*10) / 2+"px"
			});
			this.$divBox.append(this.$circleOl);
			this.$leftBtn = $("<a hideFocus href='javascript:;' class='leftBtn'><i class='fa fa-angle-left'></i></a>");//left切换按钮
			this.$rightBtn = $("<a hideFocus href='javascript:;' class='rightBtn'><i class='fa fa-angle-right'></i></a>");//right切换按钮
			//把创建的dom元素一一插入盒子
			this.$dom.append(this.$imageUl);
			this.$dom.append(this.$leftBtn);
			this.$dom.append(this.$rightBtn);
			this.$dom.append(this.$divBox);
			
		}
			
		/*
		 * 悬停事件 event.preventdefault  event.stopPropagation stopPropagation
		 */
		Carousel.prototype._hover = function(){
			var that = this; //保存this  以为事件调用函数里面的this 指向当前被绑定事件的dom对象
			that.$dom.hover(function(){
				clearInterval(that.$interval);
			}, function(){
				that._setTimer();
			});
			
			$.each([that.$leftBtn, that.$rightBtn], function(){
				$(this).css("top", (that.$height-80)/2+"px");
			});
			
		}
			
		/*
		 * 点击事件
		 */
		Carousel.prototype._click = function(){
			var that = this;
			//左边按钮 点击事件
			that.$leftBtn.click(function(){
					that.$index++;
					that.$index %= that.$imageNum;
					that._listen(that.$index);
					that.$imageUl.stop(true).animate({"left": -that.$index * that.$width + "px"}, that.$animateTime);
			});
			//右边边按钮 点击事件
			that.$rightBtn.click(function(){
				if(that.$index == 0){
					that.$index = that.$imageNum;
				}
				that.$index--;
				that._listen(that.$index);
				that.$imageUl.stop(true).animate({"left": -that.$index * that.$width + "px" }, that.$animateTime);
			});
			//小圆点 点击事件
			that.$circleOlLis.on("click", "img", function(e){
				that.$index = $(e.target).parent("li").index();
				that._listen(that.$index);
				that.$imageUl.stop(true).animate({"left": -that.$index * that.$width + "px" }, that.$animateTime);
			});
		}
		
		/*
		 * 监听 小圆点切换
		 */
		Carousel.prototype._listen = function(num){
			this.$index = num || this.$index;
			this.$circleOlLis.eq(this.$index).addClass("selected").siblings().removeClass("selected");
		}
		
		/*
		 * 定时器
		 */
		Carousel.prototype._setTimer = function(){
			var that = this;
			that.$interval = setInterval(function(){
				that.$index++;
				that.$index %= that.$imageNum;
				that._listen(that.$index);
				that.$imageUl.stop(true, false).animate({"left": -that.$index * that.$width + "px"}, that.$animateTime);
			}, that.$intervalTime);
		}
		
})();


