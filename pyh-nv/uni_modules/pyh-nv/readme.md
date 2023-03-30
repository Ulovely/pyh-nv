### pyh-nv 全自定义、全兼容、全功能、多类型、可渐变导航栏

pyh-nv 导航栏组件，组件名：``pyh-nv``，代码块： pyh-nv。

**使用方式：**

uni_modules:

[uni_modules使用方法](https://uniapp.dcloud.io/uni_modules?id=%e4%bd%bf%e7%94%a8-uni_modules-%e6%8f%92%e4%bb%b6)；

非uni_modules:
[如何从插件市场下载使用组件](https://ask.dcloud.net.cn/article/35409)
uni-app插件市场的插件详情页，右上角uni_modules版本下载插件ZIP，解压/拉入components文件夹到 uni-app 根目录

在 ``main.js`` 中引用组件 (示例项目main.js有注释，去掉对应注释可以直接使用)

```javascript

import nv from "@/components/pyh-nv/pyh-nv.vue";
// #ifndef VUE3
Vue.component("pyh-nv",nv)
// #endif
// #ifdef VUE3
//在const app = createSSRApp(App)后添加
app.component('pyh-nv',nv)
// #endif

```

在 ``template`` 中使用组件

```html

<pyh-nv></pyh-nv>

<pyh-nv :config="{back:{hide:true}}"></pyh-nv>

<pyh-nv :config="config"></pyh-nv>

```

在 ``script`` 中 config 说明

所有配置都为选填,无需要可以不配置,不复杂!!!</br>
所有配置都为选填,无需要可以不配置,不复杂!!!</br>
所有配置都为选填,无需要可以不配置,不复杂!!!</br>

**config 属性说明：**

|属性名				|类型	|默认值	    |说明			|
|---				|----	|---	    |---			|
|title				|String	|'pyh-nv' 	|标题,默认值为getApp().globalData.NAME或组件内title写死的字符串；标题可以使用config配置修改|
|show				|Boolean|true   	|是否显示导航栏，可以用于多情形控制导航栏的显示,model模型不受影响固定为true|
|sysncTitle			|Boolean|true   	|单页面h5端是否开启同步导航栏（比如微信导航栏）|
|position			|String	|'fixed'   	|定位方式,fixed和absoult都是固定定位，其它值为静态导航栏，随页面滚动|
|back				|Object	|		    |导航栏返回键配置,详细见下方back说明		|
|model				|Boolean|false      |是否页面内独立使用模型，如果是固定定位，top为导航栏高度|
|mainColor			|String	|''     	|导航的活动态颜色，可覆盖getApp().globalData.mainColor，仅部分导航栏有用到（搜索、tab切换）|
|bgImage			|String	|''			|导航栏背景图,如果使用，则bgColor无效|
|bgColor			|String	|'#ffffff'	|导航栏背景色,如果使用渐变色，transparent渐变属性失效|
|color				|String	|'#000000'	|导航栏和状态栏字体色，也用于渐变完成时字体色（状态栏字体只支持#000000或#ffffff）|
|componentBgColor	|String	|'#f8f8f8'	|导航栏组件背景色(可被覆盖)，如果有设置，回到首页的返回键有背景色|
|type				|String	|'default'	|导航栏类型(默认为通用),还有logo和search	|
|componentsFlex		|String	|'center'   |type为search或image(只控制图片)时的组件内容flex布局align-items属性，内容居上（top）、中(center/middle/auto)、下(bottom)|
|safeArea			|Number	|安全高度	|暂时只用于控制滚动显示，比如回到顶部		|
|toTop				|Object |			|是否使用回到顶部，有该属性就是使用,详细见下方toTop说明|
|windowInfo			|Object	|{}			|可填入width、height	、statusBarHeight来自定义窗口大小，如{width:667,height:375,statusBarHeight:0},单位为px,不传则为uni.getSystemInfoSync()的值|
|logo				|Object	|		   	|导航栏logo的配置,仅type为logo或search时有效,详细见下方logo说明					|
|search				|Object	|		    |导航栏含搜索框的配置,仅type为search时有效,详细见下方search说明					|
|transparent		|Object	|		    |导航栏渐变配置,详细见下方transparent说明	|
|fixedAssist		|Object	|    		|固定/绝对定位时辅助容器,{hide:false,bgColor:''}|
|address			|Object	|		    |导航栏左地址配置,{province:'广东省',color:""},填入color会固定字体色				|
|btn				|Array	|[]		    |导航栏右方按钮组,{text:'点击1',style:''},{icon:'',text:'',badge:{text:'1',style:''}}|
|tabArr				|Array	|[]		    |导航栏中间tab切换,{title:'',active:true,hide:false}(说明：active为初始化活动态选项，hide为隐藏选项)|


**pyh-nv.vue 内配置说明：**

涉及到全局变量[getApp().globalData](https://uniapp.dcloud.net.cn/collocation/App.html#globaldata)

|属性名				|类型	|默认值	                    |说明			|
|---				|----	|---	                    |---			|
|title				|String	|'pyh-nv' 					|标题默认值,getApp().globalData.NAME或自定义字符串	|
|show				|Boolean|true   					|是否显示导航栏,可以通过getApp().globalData.nvShow来全局设置,model模型不受影响固定为true|
|sysncTitle			|Boolean|true	 					|h5端是否开启同步导航栏（比如微信导航栏）,为全局设置,也通过修改getApp().globalData.sysncTitle来设置|
|mainColor			|String	|'#2b9939' 					|导航栏的活动态颜色，可以通过getApp().globalData.mainColor或自定义颜色，也可以单组件传mainColor设置，目前仅部分导航栏有用到（搜索、tab切换）|


**config 内 back 配置说明：**

|属性名				|类型	|默认值	                    |说明								|
|---				|----	|---	                    |---								|
|hide				|Boolean|false   					|是否隐藏返回按钮					|
|iconForce			|Boolean|false   					|是否固定返回图标为返回键(不做home判断)|
|customEvent		|Boolean|false     					|是否监听并自定义右上角返回键事件，如果为true，默认的返回事件失效，需要组件上写@nvBackTap来监听和自定义事件|
|icon				|Object	|{}   						|图标配置，当前版本还没实现，配置预告	|


**config 内 toTop 配置说明：**

|属性名				|类型	|默认值	                    |说明								|
|---				|----	|---	                    |---								|
|duration			|Number	|300   						|回到顶部的滚动动画时间（ms）			|
|style				|String	|''	     					|样式配置							|

**config 内 logo 配置说明：**

|属性名				|类型	|默认值	                    |说明								|
|---				|----	|---	                    |---								|
|src				|String	|'/static/logo.png'   		|logo路径							|
|url				|String	|''						    |如果传值,点击logo会reLaunch到该url	|
|style				|String	|'width:60rpx'	     		|样式配置,图片默认为withFix,只传height为heightFix,宽高都传为aspectFill|

**config 内 search 配置说明：**

|属性名				|类型	|默认值	    |说明													|
|---				|----	|---	    |---	|
|value				|String	|''		    |input的初始值，如需动态赋值，必须初始化	|
|bgColor			|String	|'#f8f8f8'  |组件背景色,覆盖	componentBgColor		|
|color				|String	|''  		|字体以及图标颜色，不填使用默认图标颜色，和继承的字体颜色|
|input				|Boolean|false	    |输入框提示语样式						|
|url				|String	|''		    |input为false时生效,点击跳转到url		|
|linkType			|String	|''		    |input为false时生效,点击(uni[linkType])到url|
|focus				|Boolean|false		|是否自动聚焦		|
|border				|String |''			|输入框边框样式		|
|placeholder		|String	|'搜索'	   	|输入框提示语		|
|placeholderStyle	|String	|''		    |输入框提示语样式	|
|btn				|Object	|		    |input为true时生效,搜索框提交按钮,{text:'搜索',style:''}	|
|confirmType		|String	|'search'	|同官方input的confirm-type,设置回车键文字|

**config 内 transparent 配置说明：**

|属性名						|类型	|默认值	      	|说明													|
|---						|----	|---	      	|---							|
|type						|String	|'background' 	|渐变类型,content为全透明渐变	|
|anchor						|Number	|当前导航栏高度	|最终渐变位置					|
|initColor					|String	|'#ffffff'  	|导航栏与状态栏初始色,（状态栏字体只支持#000000或#ffffff）	|
|reverse					|Boolean|false  		|是否反向渐变，为true时，渐变隐藏	|

**组件pyh-nv 事件说明(详情请参考示例项目)：**

|属名				|说明										|
|---				|----										|
|nvBackTap			|返回键点击自定义事件,会取消返回事件,back.customEvent为true时生效|
|nvLogoTap			|点击logo,仅logo存在时生效					|
|nvAddressTap		|点击地址,仅地址存在时生效					|
|nvInput			|输入框input事件,仅search.input为true时生效	|
|nvInputTap			|输入框点击自定义事件						|
|nvFormSubmit		|输入框确认事件,仅search.input为true时生效	|
|nvBtnTap			|右方按钮组点击事件,仅右方按钮存在时生效		|
|nvTabTap			|中间tab组点击事件,仅中间tab按钮存在时生效	|


**ref 事件说明(详情请参考示例项目)：**

|事件名				|参数类型	|参数默认值			|说明						|
|---				|----		|----				|---						|
|setStyle			|Object		|{}					|直接设置导航栏最外层元素样式	|
|pageScroll			|Object		|{scrollTop:0}		|传递页面滚动信息			|

**感谢：**

> 有更多优化建议和需求，请联系作者 panyh 。谢谢！