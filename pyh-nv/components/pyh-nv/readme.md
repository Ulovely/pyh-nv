### pyh-nv 全自定义、全兼容、全功能、多类型、可渐变导航栏

pyh-nv 导航栏组件，组件名：``nv``，代码块： nv。

**使用方式：**

在 ``script`` 中引用组件 

```javascript

在main.js内引用

import nv from "@/components/pyh-nv/pyh-nv.vue";
Vue.component("nv",nv)

```

在 ``template`` 中使用组件

```html

<nv></nv>

<nv :config="{'hideback':true}"></nv>

<nv :config="config"></nv>

```

在 ``script`` 中 config 说明

所有配置都为选填,无需要可以不配置,不复杂!!!</br>
所有配置都为选填,无需要可以不配置,不复杂!!!</br>
所有配置都为选填,无需要可以不配置,不复杂!!!</br>

**config 属性说明：**

|属性名				|类型	|默认值	    |说明																			|
|---				|----	|---	    |---																			|
|title				|String	|'pyh-nv' 	|标题,在组件内写死或动态修改														|
|position			|String	|'fixed'   	|定位方式,fixed和absoult都是固定定位，其它值为静态导航栏，随页面滚动				|
|hideback			|Boolean|false      |是否隐藏导航栏返回功能															|
|model				|Boolean|false      |是否页面内独立使用模型，如果是固定定位，top为导航栏高度							|
|bgColor			|String	|'#ffffff'	|导航栏背景色,如果使用渐变色，transparent渐变属性失效|
|color				|String	|'#000000'	|导航栏和状态栏字体色，也用于渐变完成时字体色（状态栏字体只支持#000000或#ffffff）	|
|componentBgColor	|String	|'#f8f8f8'	|导航栏组件背景色(可被覆盖)，如果有设置，回到首页的返回键有背景色					|
|type				|String	|'default'	|导航栏类型(默认为通用),还有logo和search											|
|safeArea			|Number	|安全高度	|暂时只用于控制滚动显示，比如回到顶部												|
|toTop				|Object |			|是否使用回到顶部，有该属性就是使用,详细见下方toTop说明}							|
|logo				|Object	|		   	|导航栏logo的配置,仅type为logo或search时有效,详细见下方logo说明					|
|search				|Object	|		    |导航栏含搜索框的配置,仅type为search时有效,详细见下方search说明					|
|transparent		|Object	|		    |导航栏渐变配置,详细见下方transparent说明											|
|fixedAssist		|Object	|    		|固定/绝对定位时辅助容器,{hide:false,bgColor:''}									|
|address			|Object	|		    |搜索导航栏左地址配置,{province:'广东省'}											|
|btn				|Array	|[]		    |导航栏右方按钮组,{text:'点击1'},{icon:''}										|
|tabArr				|Array	|[]		    |导航栏中间tab切换,{title:'',active:true,hide:false}								|

**config 内 toTop 配置说明：**

|属性名				|类型	|默认值	                    |说明								|
|---				|----	|---	                    |---								|
|duration			|Number	|300   						|回到顶部的滚动动画时间（ms）			|
|style				|Object	|{}	     					|样式配置							|

**config 内 logo 配置说明：**

|属性名				|类型	|默认值	                    |说明								|
|---				|----	|---	                    |---								|
|src				|String	|'/static/logo.png'   		|logo路径							|
|url				|String	|''						    |如果传值,点击logo会reLaunch到该url	|
|style				|Object	|{}	     					|样式配置							|

**config 内 search 配置说明：**

|属性名				|类型	|默认值	    |说明													|
|---				|----	|---	    |---													|
|value				|String	|''		    |input的初始值，如需动态赋值，必须初始化					|
|bgColor			|String	|'#f8f8f8'  |组件背景色,覆盖	componentBgColor						|
|input				|Boolean|false	    |输入框提示语样式										|
|url				|String	|''		    |input为false时生效,点击navigateTo到url					|
|focus				|Boolean|false		|是否动聚焦												|
|placeholder		|String	|'搜索'	   	|输入框提示语											|
|placeholderStyle	|Object	|		    |输入框提示语样式										|
|btn				|Object	|		    |input为true时生效,搜索框提交按钮,{text:'搜索',style:{}}	|
|confirmType		|String	|'search'	|同官方input的confirm-type,设置回车键文字				|

**config 内 transparent 配置说明：**

|属性名						|类型	|默认值	      	|说明													|
|---						|----	|---	      	|---													|
|type						|String	|'background' 	|渐变类型,content为全透明渐变							|
|anchor						|Number	|当前导航栏高度	|最终渐变位置											|
|initColor					|String	|'#ffffff'  	|导航栏与状态栏初始色,（状态栏字体只支持#000000或#ffffff）	|


**组件pyh-nv 事件说明(详情请参考示例项目)：**

|属名				|说明										|
|---				|----										|
|nvLogoTap			|点击logo,仅logo存在时生效					|
|nvAddressTap		|点击地址,仅地址存在时生效					|
|nvInput			|输入框input事件,仅search.input为true时生效	|
|nvFormSubmit		|输入框确认事件,仅search.input为true时生效	|
|nvBtnTap			|右方按钮组点击事件,仅右方按钮存在时生效		|
|nvTabTap			|中间tab组点击事件,仅中间tab按钮存在时生效	|


**更新记录：**

版本1.1.6：</br>
1、修复model定位问题

版本1.1.5：</br>
1、全类型支持设置右方按钮组</br>
2、添加h5 document.title等于config的标题</br>
3、添加属性model，可在页面内独立使用，常用于不满足右方按钮小程序不显示的兼容方案（使用2个nv）</br>
4、优化代码结构

版本1.1.4：</br>
1、修复微信公众号中input的disabled点击跳转失效问题</br>
2、修复右上角纯图片按钮变形问题

版本1.1.3：</br>
1、修复config空值有时会报错的bug</br>
2、修改说明文档，去除nvConfig以免混淆

版本1.1.2：</br>
1、添加通用导航栏渐变色背景功能（渐变色背景会导致transparent背景色渐变失效）

版本1.1.1：</br>
1、修复icon原生组件在小程序内高度铺满导致的错位问题

版本1.1.0：</br>
1、使用icon代替图片图标,完全独立组件</br>
2、添加回到顶部的功能

版本1.0.9：</br>
1、单logo模式，支持全样式设置，可实现全背景图等</br>
2、优化了路由跳转判断及多端跳转</br>
3、组件内，利用了scss的特性，优化了主色的修改</br>
4、示例项目内添加了全局变量globalData，以及全路由封装函数nvRoute，组件也做了兼容处理，可快速设置配置，如需路由做特殊处理（比如history模式等），可使用封装的nvRoute统一处理

版本1.0.8：</br>
1、修改搜索框动态赋值方式，更加方便，直接修改search.value，需要初始化value，旧的赋值方式已废弃。（重要）</br>
2、注释样式：上版本组件内样式，没有注释uni.scss的部分

版本1.0.7：</br>
1、修改标题字体的size和weight,等同于uniapp的h5样式</br>
2、补充组件主色覆盖样式的注释，可去除注释快速修改，也可使用uni.scss快速修改主色

版本1.0.6：</br>
1、补充文档对于搜索框赋值的说明，添加动态赋值功能

版本1.0.5：</br>
1、补充单组件文件缺少的文件iconfont.wxss

版本1.0.4：</br>
1、修复fixed定位，辅助容器高度问题</br>
2、补充示例项目属性项

版本1.0.3：</br>
优化内容如下：</br>
1、添加config.position属性，并且默认为'fixed'</br>
2、添加config.fixedAssist属性———固定/绝对定位时辅助容器，高度与导航栏一致，可设置背景色和隐藏,{hide:false,bgColor:''}</br>
3、原home返回键背景取消，如需要，需使用componentBgColor</br>
4、状态栏字体颜色与导航栏字体颜色一致（状态栏字体只支持#000000或#ffffff）</br>
5、config.color 改为导航栏和状态栏字体色，也用于渐变完成时字体色（状态栏字体只支持#000000或#ffffff）</br>
6、transparent.initColor代替之前的状态栏字体颜色设置，该值为导航栏与状态栏初始色（状态栏字体只支持#000000或#ffffff）</br>
7、修改默认字体色为'#000000'

版本1.0.2：优化体验，更易上手，更友好

版本1.0.1：修改文档

版本1.0.0：上传初版

**感谢：**

> 有更多优化建议和需求，请联系作者 panyh 。谢谢！