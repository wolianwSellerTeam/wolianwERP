/** kit_admin-v1.0.4 MIT License By http://kit/zhengjinfan.cn */ 
layui.define(["layer", "laytpl", "element"], function(i) {
	var e = layui.jquery,
		a = layui.layer,
		t = (e(window), e(document)),
		n = layui.laytpl,
		l = layui.element;
	i("navbar", {
		v: "1.0.2",
		config: {
			data: void 0,
			remote: {
				url: void 0,
				type: "GET",
				jsonp: !1
			},
			cached: !1,
			elem: void 0,
			filter: "kitNavbar"
		},
		set: function(i) {
			var a = this;
			return a.config.data = void 0, e.extend(!0, a.config, i), a
		},
		hasElem: function() {
			var i = this.config;
			return void 0 !== i.elem || 0 !== t.find("ul[kit-navbar]").length || !e(i.elem) || (layui.hint().error("Navbar error:请配置Navbar容器."), !1)
		},
		getElem: function() {
			var i = this.config;
			return void 0 !== i.elem && e(i.elem).length > 0 ? e(i.elem) : t.find("ul[kit-navbar]")
		},
		bind: function(i) {
			var n = this;
			n.config;
	    
			return n.hasElem() ? (n.getElem().find("a[kit-target]").each(function() {
				var t = e(this),
					n = void 0;
				
				/* 鼠标悬停二级菜单时  用tips显示二级菜单的 text*/
				/*t.hover(function() {
					n = a.tips(e(this).children("span").text(), this)
				}, function() {
					n && a.close(n)
				}), */
				t.off("click").on("click", function() {
					var e, a = t.data("options");
					if(void 0 !== a) try {
						e = new Function("return " + a)()
					} catch(i) {
						layui.hint().error("Navbar 组件a[data-options]配置项存在语法错误：" + a)
					} else e = {
						icon: t.data("icon"),
						id: t.data("id"),
						title: t.data("title"),
						url: t.data("url")
					};
					"function" == typeof i && i(e)
				})
			}),
			
			/*控制一级菜单下拉打开时 关闭 其他的下拉菜单  即：只允许打开一个下拉菜单*/
			e(".layui-nav-item").on("click", function(){
     			e(this).siblings().removeClass("layui-nav-itemed");
       }),
       /*菜单控制按钮 点击缩小和放大*/
			e(".kit-side-fold").off("click").on("click", function() {
				var i = t.find("div.kit-side");
				i.hasClass("kit-sided") ? (i.removeClass("kit-sided"), i.find("li.layui-nav-item").removeClass("kit-side-folded"), i.find("dd").removeClass("kit-side-folded"), t.find("div.layui-body").removeClass("kit-body-folded"), t.find("div.layui-footer").removeClass("kit-footer-folded")) : (i.addClass("kit-sided"), i.find("li.layui-nav-item").addClass("kit-side-folded"), i.find("dd").addClass("kit-side-folded"), t.find("div.layui-body").addClass("kit-body-folded"), t.find("div.layui-footer").addClass("kit-footer-folded"));
				/* 点击控制按钮  切换大小logo  start*/
				var $div=e("div.indexLogo");
				if($div.width()<150){
					$div.find("#bigLogo").hide();
					$div.find("#smallLogo").show();
				}else{
					$div.find("#bigLogo").show();
					$div.find("#smallLogo").hide();
				}
				/* 点击控制按钮  切换大小logo  end*/
			}), 
			e(".layui-nav-item").hover(
				function(){
					if(e(this).hasClass("kit-side-folded")){
						e(this).addClass("layui-nav-itemed").siblings().removeClass("layui-nav-itemed");
						/*没有滚动的时候 给二级菜单定位 获取父级top 然后传给它*/
						var liTop=e(this).offset().top;
			    	var $dl=e(this).find("dl.layui-nav-child");
			    	$dl.css("top",liTop+'px');
					}
				},
				function(){
					if(e(this).hasClass("kit-side-folded")){
						e(this).removeClass("layui-nav-itemed");
					}
				}), 
				
  	  	/*在滚动的时候 给二级菜单定位 获取父级top 然后传给它*/
  	  	e(".layui-side-scroll").scroll(function(){
  	  		e(this).find(".layui-nav-tree .layui-nav-item").each(function(){
  	  			if(e(this).hasClass("kit-side-folded")){
	  	  			var liTop=e(this).offset().top;
				    	var $dl=e(this).find("dl.layui-nav-child");
				    	$dl.css("top", liTop+'px');
				    }
  	  		})
  	  	}), n) : n
		},
		render: function(i) {
			var t = this,
				d = t.config,
				o = d.remote,
				r = ["{{# layui.each(d,function(index, item){ }}", "{{# if(item.spread){ }}", '<li class="layui-nav-item layui-nav-itemed">', "{{# }else{ }}", '<li class="layui-nav-item">', "{{# } }}", "{{# var hasChildren = item.children!==undefined && item.children.length>0; }}", "{{# if(hasChildren){ }}", '<a href="javascript:;">', '{{# if (item.icon.indexOf("fa-") !== -1) { }}', '<i class="fa {{item.icon}}" aria-hidden="true"></i>', "{{# } else { }}", '<i class="layui-icon">{{item.icon}}</i>', "{{# } }}", "<span> {{item.title}}</span>", "</a>", "{{# var children = item.children; }}", '<dl class="layui-nav-child">', "{{# layui.each(children,function(childIndex, child){ }}", "<dd>", "<a href=\"javascript:;\" kit-target data-options=\"{url:'{{child.url}}',icon:'{{child.icon}}',title:'{{child.title}}',id:'{{child.id}}'}\">", '{{# if (child.icon.indexOf("fa-") !== -1) { }}', '<i class="fa {{child.icon}}" aria-hidden="true"></i>', "{{# } else { }}", '<i class="layui-icon">{{child.icon}}</i>', "{{# } }}", "<span> {{child.title}}</span>", "</a>", "</dd>", "{{# }); }}", "</dl>", "{{# }else{ }}", "<a href=\"javascript:;\" kit-target data-options=\"{url:'{{item.url}}',icon:'{{item.icon}}',title:'{{item.title}}',id:'{{item.id}}'}\">", '{{# if (item.icon.indexOf("fa-") !== -1) { }}', '<i class="fa {{item.icon}}" aria-hidden="true"></i>', "{{# } else { }}", '<i class="layui-icon">{{item.icon}}</i>', "{{# } }}", "<span> {{item.title}}</span>", "</a>", "{{# } }}", "</li>", "{{# }); }}"],
				s = [],
				c = a.load(2);
			if(!t.hasElem()) return t;
			var f = t.getElem();
			if(void 0 !== d.data && d.data.length > 0) s = d.data;
			else {
				o.jsonp;
				var u = {
					url: o.url,
					type: o.type,
					error: function(i, e, a) {
						layui.hint().error("Navbar error:AJAX请求出错." + a)
					},
					success: function(i) {
						s = i;
					}
				};
				e.extend(!0, u, o.jsonp ? {
					dataType: "jsonp",
					jsonp: "callback",
					jsonpCallback: "jsonpCallback"
				} : {
					dataType: "json"
				}), e.support.cors = !0, e.ajax(u)
			}
			var h = setInterval(function() {
				s.length > 0 && (clearInterval(h), n(r.join("")).render(s, function(e) {
					f.html(e), l.init(), t.bind(function(e) {
						"function" == typeof i && i(e)
					}), c && a.close(c)
				}))
			}, 50);
			
			return t
		}
	})
});