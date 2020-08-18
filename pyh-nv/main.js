import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//公共头部组件
import nv from "@/components/pyh-nv/pyh-nv.vue";
Vue.component("nv",nv)


Vue.prototype.nvRoute = function (url,type) {
	if(!url&&!type)return;
	if(url=="/"||url==".")return
	if(typeof(url)=="number"){
		if(getCurrentPages().length==1){
			uni.reLaunch({url:(getApp().globalData.HOME||"/pages/index/index")})
		}else{
			uni.navigateBack({delta:Math.abs(url||1)})
		}
		return
	}
	if(type){
		if (type.indexOf("ab")>-1) {
			uni.switchTab({ url: url })
		} else if (type.indexOf("redirect")>-1||type.indexOf("rep")>-1) {
			uni.redirectTo({ url: url })
		} else if (type.indexOf("aunch")>-1) {
			uni.reLaunch({ url: url })
		} else if (type.indexOf("ack")>-1) {
			if(getCurrentPages().length==1){
				uni.reLaunch({url:(getApp().globalData.HOME||"/pages/index/index")})
			}else{
				uni.navigateBack()
			}
		}else{
			uni.navigateTo({url:url})
		}
	}else{
		if(url.indexOf("/")==0||url.indexOf(".")==0){
			uni.navigateTo({url:url})
		}else{
			var platform = getApp().globalData.platform||'mobile'
			if(url.indexOf("?")>0){url+="&platform="+platform}else{url+="?platform="+platform}
			if(platform=="mobile"){
				top.location.href=url
			}else if(platform=="app"){
				plus.runtime.openUrl(url);
			}else{
				uni.navigateTo({url:"/pages/other/webview/webview?src="+url.replace("?","&")})
			}
		}
	}
};

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
