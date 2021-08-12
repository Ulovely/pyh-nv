import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//引入公共组件	如果是使用uni_modules就无需引入，兼容nv写法，需要在pages.json添加代码："easycom": {"nv": "@/uni_modules/pyh-nv/components/pyh-nv/pyh-nv.vue"}
// import nv from "@/components/pyh-nv/pyh-nv.vue";
// Vue.component("nv",nv)

//全路由封装函数nvRoute;(组件内已有，如果有不同的操作再修改)
// Vue.prototype.nv = function (url,type) {
// 	if(!url&&!type)return;
// 	if(url=="/"||url==".")return
// 	if(typeof(url)=="number"){
// 		if(getCurrentPages().length==1){
// 			uni.reLaunch({url:(getApp().globalData.HOME||"/pages/index/index")})
// 		}else{
// 			uni.navigateBack({delta:Math.abs(url||1)})
// 		}
// 		return
// 	}
// 	if(type){
// 		if (type.indexOf("ab")>-1) {
// 			uni.switchTab({ url: url })
// 		} else if (type.indexOf("redirect")>-1||type.indexOf("rep")>-1) {
// 			uni.redirectTo({ url: url })
// 		} else if (type.indexOf("aunch")>-1) {
// 			uni.reLaunch({ url: url })
// 		} else if (type.indexOf("ack")>-1) {
// 			if(getCurrentPages().length==1){
// 				uni.reLaunch({url:(getApp().globalData.HOME||"/pages/index/index")})
// 			}else{
// 				uni.navigateBack()
// 			}
// 		}else{
// 			uni.navigateTo({url:url})
// 		}
// 	}else{
// 		if(url.indexOf("/")==0||url.indexOf(".")==0){
// 			uni.navigateTo({url:url})
// 		}else{
// 			var platform = getApp().globalData.platform||'h5'
// 			if(url.indexOf("?")>0){url+="&platform="+platform}else{url+="?platform="+platform}
// 			if(platform=="h5"){
// 				top.location.href=url
// 			}else if(platform=="app"){
// 				plus.runtime.openUrl(url);
// 			}else{
// 				uni.navigateTo({url:"/pages/other/webview/webview?src="+url.replace("?","&")})
// 			}
// 		}
// 	}
// };

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
