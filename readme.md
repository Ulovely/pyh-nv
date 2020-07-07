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

<nv :config="{'title':'pyh-nv','hideback':true}"></nv>

<nv :config="nvConfig"></nv>

```

在 ``script`` 中 config/nvConfig 说明

所有配置都为选填,无需要可以不配置,不复杂!!!</br>
所有配置都为选填,无需要可以不配置,不复杂!!!</br>
所有配置都为选填,无需要可以不配置,不复杂!!!</br>

**config/nvConfig 属性说明：**

|属性名				|类型	|默认值	                    |说明											|
|---				|----	|---	                    |---											|
|title				|String	|'pyh-nv'    |标题,在组件内写死或动态修改										|
|hideback			|Boolean|false       |是否隐藏导航栏返回功能											|
|bgColor			|String	|'#fff'	     |导航栏背景色													|
|color				|String	|'#333'	     |导航栏字体色													|
|componentBgColor	|String	|'#f8f8f8'	 |导航栏组件背景色(可被覆盖)										|
|type				|String	|'default'	 |导航栏类型(默认为通用),还有logo和search							|
|logo				|Object	|		     |导航栏logo的配置,仅type为logo或search时有效,详细见下方logo说明	|
|search				|Object	|		     |导航栏含搜索框的配置,仅type为search时有效,详细见下方search说明	|
|transparent		|Object	|		     |导航栏渐变配置,详细见下方transparent说明						|
|address			|Object	|		     |搜索导航栏左地址配置,{province:'广东省'}						|
|btn				|Array	|[]		     |导航栏右方按钮组,{text:'点击1'},{icon:''}						|
|tabArr				|Array	|[]		     |导航栏中间tab切换,{title:'',active:true,hide:false}			|

**config/nvConfig 内 logo 配置说明：**

|属性名				|类型	|默认值	                    |说明								|
|---				|----	|---	                    |---								|
|src				|String	|'/static/logo.png'   		|logo路径							|
|url				|String	|''						    |如果传值,点击logo会reLaunch到该url	|
|style				|Object	|''	     					|样式配置							|

**config/nvConfig 内 search 配置说明：**

|属性名				|类型	|默认值	    |说明													|
|---				|----	|---	    |---													|
|bgColor			|String	|'#f8f8f8'  |组件背景色,覆盖	componentBgColor						|
|input				|Boolean|false	    |输入框提示语样式										|
|url				|String	|''		    |input为false时生效,点击navigateTo到url					|
|focus				|Boolean|false		|是否动聚焦												|
|placeholder		|String	|'搜索'	   	|输入框提示语											|
|placeholderStyle	|Object	|		    |输入框提示语样式										|
|btn				|Object	|		    |input为true时生效,搜索框提交按钮,{text:'搜索',style:{}}	|
|confirmType		|String	|'search'	|同官方input的confirm-type,设置回车键文字				|

**config/nvConfig 内 transparent 配置说明：**

|属性名						|类型	|默认值	      	|说明												|
|---						|----	|---	      	|---												|
|type						|String	|'background' 	|渐变类型,content为全透明渐变						|
|anchor						|Number	|当前导航栏高度	|最终渐变位置										|
|originalNavigationBarColor	|Object	|	     		|状态栏变色,同时设置navigationBarColor生效,同set		|
|navigationBarColor			|Object	|	     		|状态栏变色,同时设置originalNavigationBarColor生效	|


**组件pyh-nv 事件说明(详情请参考示例项目)：**

|属名				|说明										|
|---				|----										|
|nvLogoTap			|点击logo,仅logo存在时生效					|
|nvAddressTap		|点击地址,仅地址存在时生效					|
|nvInput			|输入框input事件,仅search.input为true时生效	|
|nvFormSubmit		|输入框确认事件,仅search.input为true时生效	|
|nvBtnTap			|右方按钮组点击事件,仅右方按钮存在时生效		|
|nvTabTap			|中间tab组点击事件,仅中间tab按钮存在时生效	|

**uniapp官方api链接：**

[路由与页面跳转同uniapp的api](https://uniapp.dcloud.net.cn/api/router?id=navigateto)</br>
[originalNavigationBarColor和navigationBarColor的配置同uniapp的api,setNavigationBarColor](https://uniapp.dcloud.net.cn/api/ui/navigationbar?id=setnavigationbarcolor)

**更新记录：**

上传初版,更新说明文档

**感谢：**

> 有更多优化建议和需求，请联系作者 pyh 。谢谢！
