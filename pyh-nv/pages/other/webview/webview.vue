<template>
	<web-view :webview-styles="webviewStyles" :src="src"></web-view>
</template>

<script>
	let view = null;
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: getApp().globalData.mainColor||"#2b9939"
					}
				},
				src:"",
				newsrc:""
			};
		},
		onLoad(options){
			var that = this;
			var src = options.src;
			if(!src){
				uni.showToast({icon:"none",mask:true,title:"无效的链接"})
				setTimeout(function(){uni.navigateBack()},1500)
				return;
			}
			// uni.request({
			// 	url:src,
			// 	success(res) {
			// 		console.log(res);
			// 		if(res.statusCode==404){
			//			uni.showToast({icon:"none",mask:true,title:"无效的链接"})
			//			setTimeout(function(){uni.navigateBack()},1500)
			// 		}else{
			// 			that.src = src;
			// 			that.options=options;
			// 			that.newsrc=src
			// 		}
			// 	}
			// })
			this.src = src;
			this.options=options;
			this.newsrc=src
		},
		onShow: function () {
				//路径
			var src = this.newsrc;
			if (src.indexOf("?")!=-1){
			  src = src.split("?")[0];
			}
			var time = new Date().getTime();
			src = src + "?time=" + time;
			if(this.options.id)src+="&id="+this.options.id;
			this.src = src;
			this.newsrc=src
		}
	}
</script>

<style>

</style>
