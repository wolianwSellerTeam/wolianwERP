<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>knockoutJs笔记</title>
</head>
<body>
	<h1>Knockout是在下面三个核心功能是建立起来的：</h1>
		<br>
		监控属性（Observables）和依赖跟踪（Dependency tracking）<br>
		声明式绑定（Declarative bindings）<br>
		模板（Templating）<br>
	
	<p>
		<h1>一：ko.applyBindings(myViewModel);   激活knockoutJs</h1>
	ko.applyBindings使用的是什么样的参数?<br>
	1.第一个参数是你想用于声明式绑定<br>
	2.第二个参数（可选），可以声明成使用data-bind的HTML元素或者容器。<br>
	例如， ko.applyBindings(myViewModel, document.getElementById('someElementId'))。<br>
	它的现在是只有作为someElementId 的元素和子元素才能激活KO功能。 <br>
	好处是你可以在同一个页面声明多个view model，用来区分区域。<br>
	</p>
	
	<p>
		<h1>二：ko.observables()监控属性</h1>
		
		 读取监控属性（observable）的值，只需要直接调用监控属性（observable）（不需要参数），例如myViewModel.personName() 将返回'Bob', myViewModel.personAge() 将返回 123。
		写一个新值到监控属性（observable）上，调用这个observable属性并当新值作为参数。例如：调用 myViewModel.personName('Mary') 将更新name值为'Mary'。
		给一个model对象的多个属性写入新值，你可以使用链式语法。例如： myViewModel.personName('Mary').personAge(50) 将会将name更新为 'Mary' 并且 将age更新为 50.
	</p>
	
	<p>
		<h1>四：ko.dependentObservable()依赖监控属性</h1>
		
		 读取监控属性（observable）的值，只需要直接调用监控属性（observable）（不需要参数），例如myViewModel.personName() 将返回'Bob', myViewModel.personAge() 将返回 123。
		写一个新值到监控属性（observable）上，调用这个observable属性并当新值作为参数。例如：调用 myViewModel.personName('Mary') 将更新name值为'Mary'。
		给一个model对象的多个属性写入新值，你可以使用链式语法。例如： myViewModel.personName('Mary').personAge(50) 将会将name更新为 'Mary' 并且 将age更新为 50.
	</p>
	
	
	<p>
		<h1>五：ko.observableArray()监控数组</h1>
		一个observableArray其实就是一个observable的监控对象，只不过他的值是一个数组（observableArray还加了很多其他特性，稍后介绍）。所以你可以像获取普通的observable的值一样，只需要调用无参函数就可以获取自身的值了。 
		理论上你可以使用任何原生的JavaScript数组函数来操作这些数组，但是KO提供了更好的功能等价函数，他们非常有用是因为：

		兼容所有浏览器。（例如indexOf不能在IE8和早期版本上使用，但KO自己的indexOf 可以在所有浏览器上使用）
		在数组操作函数方面（例如push和splice），KO自己的方式可以自动触发依赖跟踪，并且通知所有的订阅者它的变化，然后让UI界面也相应的自动更新。
		语法更方便，调用KO的push方法，只需要这样写：myObservableArray.push(...)。 比如原生数组的myObservableArray().push(...)好用多了。
		myObservableArray.push('Some new value') 在数组末尾添加一个新项<br>

	    myObservableArray.pop() 删除数组最后一个项并返回该项<br>
	
	    myObservableArray.unshift('Some new value') 在数组头部添加一个项<br>
	
	    myObservableArray.shift() 删除数组头部第一项并返回该项<br>
	
	    myObservableArray.reverse() 翻转整个数组的顺序<br>
	
	    myObservableArray.sort() 给数组排序<br>
	
	        默认情况下，是按照字符排序（如果是字符）或者数字排序（如果是数字）。<br>
	</p>
	
	<p>
		<h1>六：visible 绑定</h1>
		
		 当参数设置为一个假值时（例如：布尔值false， 数字值0， 或者null， 或者undefined） ,该绑定将设置该元素的style.display值为none，让元素隐藏。它的优先级高于你在CSS里定义的任何display样式。

	        当参数设置为一个真值时（例如：布尔值true，或者非空non-null的对象或者数组） ,该绑定会删除该元素的style.display值，让元素可见。然后你在CSS里自定义的display样式将会自动生效。
	
	        如果参数是监控属性observable的，那元素的visible状态将根据参数值的变化而变化，如果不是，那元素的visible状态将只设置一次并且以后不在更新。
	</p>
	
	<p>
		<h1>七：text绑定</h1>
		
		text 绑定到DOM元素上，使得该元素显示的文本值为你绑定的参数。该绑定在显示<span>或者<em>上非常有用，但是你可以用在任何元素上
	</p>
	
	<p>
		<h1>八：html绑定</h1>
		
		html绑定到DOM元素上，使得该元素显示的HTML值为你绑定的参数。如果在你的view model里声明HTML标记并且render的话，那非常有用
		<!--
		<pre> 
			  
			<div data-bind="html: details"></div> 

			<script type="text/javascript">
			    var viewModel = {
			        details: ko.observable();
			    };
			
			    viewModel.details("<em>For further details, view the report <a href='report.html'>here</a>.</em>");
			</script> 
		<pre>
		-->
	</p>
	
	<p>
		<h1>九：css绑定</h1>
		
		ss绑定是添加或删除一个或多个CSS class到DOM元素上。 非常有用，比如当数字变成负数时高亮显示。（注：如果你不想应用CSS class而是想引用style属性的话，请参考style绑定。）
	</p>
	
	<p>
		<h1>十：style 绑定</h1>
		
		style绑定是添加或删除一个或多个DOM元素上的style值。比如当数字变成负数时高亮显示，或者根据数字显示对应宽度的Bar。（注：如果你不是应用style值而是应用CSS class的话，请参考CSS绑定。）
	</p>
	
	<p>
		<h1>十：attr 绑定</h1>
		
		attr 绑定提供了一种方式可以设置DOM元素的任何属性值。你可以设置img的src属性，连接的href属性。使用绑定，当模型属性改变的时候，它会自动更新
	</p>
	
	<p>
		<h1>十：click 绑定</h1>
		
		click绑定在DOM元素上添加事件句柄以便元素被点击的时候执行定义的JavaScript 函数。大部分是用在button，input和连接a上，但是可以在任意元素上使用。
	</p>
	{
								value: 'buttondialog',
								componentType: 'dialog',
								name : 'button按钮组件',
								desc : '点击该组件，实现相关功能',
								params:{
									appearance: {
										width: {
											desc: '窗口宽度',
											name:	"窗口宽度",
											editType: 'txt', //编辑类型
											value: cube.obj(120),
											readonly: false
									    },
									    height: {
										    desc: '窗口高度',
											name:	"窗口高度",
											editType: 'txt', 
											value: cube.obj(30),
											readonly: false
								    	},
								    	backgroundColor: {
										    desc: '背景颜色',
											name:	"背景颜色",
											editType: 'txt', 
											value: cube.obj(), // #428bca , red , #000 
											readonly: false
								    	},
								    	border: {
										    desc: '边框',
											name:	"边框设置",
											editType: 'txt', 
											value: cube.obj(),
											readonly: false
								    	},
								    	text: {
										    desc: 'button的内容文字',
											name:	"button的内容文字",
											editType: 'txt', 
											value: cube.obj(),
											readonly: false
								    	}
									},
									option: {
										msgType: {
											
										}
									},
									data: {
										title:{
											
										},
										content:{
											
										},
										isShowDialog:{
											
										}
									},
									event: {
										
									}
								}
							},
							
							{
								value: 'labeldialog',
								componentType: 'dialog',
								name : 'label组件',
								desc : '点击该组件，实现相关功能',
								params:{
									appearance: {
										width: {
											desc: '窗口宽度',
											name:	"窗口宽度",
											editType: 'txt', //编辑类型
											value: cube.obj(120),
											readonly: false
									    },
									    height: {
										    desc: '窗口高度',
											name:	"窗口高度",
											editType: 'txt', 
											value: cube.obj(30),
											readonly: false
								    	},
								    	backgroundColor: {
										    desc: '背景颜色',
											name:	"背景颜色",
											editType: 'txt', 
											value: cube.obj("gray"),
											readonly: false
								    	},
								    	border: {
										    desc: '边框',
											name:	"边框设置",
											editType: 'txt', 
											value: cube.obj("1px solid #fff"),
											readonly: false
								    	},
								    	text: {
										    desc: 'label的text',
											name:	"label的text值",
											editType: 'txt', 
											value: cube.obj("label"),
											readonly: false
								    	},
								    	textAlign: {
										    desc: 'label的左右对齐方式',
											name:	"label的左右对齐方式",
											editType: 'txt', 
											value: cube.obj("center"),
											readonly: false
								    	}
									},
									option: {
										msgType: {
											
										}
									},
									data: {
										title:{
											
										},
										content:{
											
										},
										isShowDialog:{
											
										}
									},
									event: {
										
									}
								}
							}
	
</body>
</html>