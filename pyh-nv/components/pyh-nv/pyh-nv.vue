<template>
	<view>
		<view class='nvHeight' :style="[{'padding-top':statusHeight},{'background':(config.fixedAssist&&config.fixedAssist.bgColor)||''},{'display':(config.fixedAssist&&config.fixedAssist.hide?'none':'')}]" v-if="isFixed"></view>
		<view class="nvBox" :style="[{'color':((config.transparent&&config.transparent.initColor)?transparent.color:'')||config.color||''},{'background':getBgColor},{'opacity':config.transparent&&config.transparent.type=='content'?transparent.opacity:1},{'position':isFixed?'fixed':'relative'},{'top':0}]">
			<view class='nvHeight' :style="[{'padding-top':statusHeight}]"></view>
			<view class='nvFixed' :style="{'padding-top':statusHeight}">
				<!-- 单logo -->
				<view class="nvContent" v-if="config.type=='logo'">
					<view :class="['nvLogoBox',{'androidwx':androidwx}]">
						<image :src="config.logo.src?config.logo.src:'/static/logo.png'" class="nvLogo" :style="config.logo.style" :mode="config.logo.style&&config.logo.style.height?'aspectFill':'widthFix'" @tap.stop="nvLogoTap"></image>
					</view>
					<view :class="['nvback',{'nvhome':isSharePage&&!config.closeCheckback}]" @tap.stop="linkTo" :style="{'background':(isSharePage&&!config.closeCheckback?(config.componentBgColor||''):'')}" data-type="navigateBack" v-if="!config.hideback"></view>
				</view>
				<!-- 含搜索 -->
				<view class="nvContent" v-else-if="config.type=='search'">
					<view :class="['nvSearchBox',{'nvHadBack':!config.hideback}]">
						<image :src="config.logo.src?config.logo.src:'/static/logo.png'" class="nvLogo nvSearchLogo" :style="config.logo.style" mode="widthFix" @tap.stop="nvLogoTap" v-if="config.logo&&!config.address"></image>
						<view class="nvAddress" :style="[{'background':(config.address.bgColor||config.componentBgColor||'')},{'color':(config.address.color||'')}]" v-if="config.address" @tap.stop="nvAddressTap">
							<view class="nvAddressIcon"></view>
							
							<view class="nvAddressText">{{config.address[config.address.fields||'province']||'广东省'}}</view>
						</view>
						<view class="nvSForm">
							<view class="nvSBox" :style="{'background':(config.search.bgColor||config.componentBgColor||'')}">
								<icon type="search" size="18" class="searchIcon"></icon>
								<input class="nvInput" type="text" :value="inputValue" :focus="config.search.focus" :placeholder="config.search.placeholder" :disabled="!config.search.input" @tap.stop="linkTo" :data-url="config.search.url" :data-type="config.search.linkType||''" data-isInput="true" @input="inputChange" @confirm="formSubmit" :confirm-type="config.search.confirmType||'search'" placeholder-class="searchPlac" :placeholder-style="config.search.placeholderStyle||''"/>
								<icon type="clear" size="15" class="nvSClose" @tap.stop="inputClear" v-if="inputValue"></icon>
							</view>
							<view class='nvSBtn' @tap.stop="formSubmit" v-if="config.search.btn&&config.search.input" :style="config.search.btn.style||''">{{config.search.btn.text||'搜索'}}</view>
						</view>
					</view>
					<view :class="['nvback',{'nvhome':isSharePage&&!config.closeCheckback}]" @tap.stop="linkTo" :style="{'background':(isSharePage&&!config.closeCheckback?(config.componentBgColor||''):'')}" data-type="navigateBack" v-if="!config.hideback"></view>
				</view>
				<!-- 默认导航栏 -->
				<view class="uni-page-head nvContent nvDefault" v-else>
					<view v-if="config.tabArr&&config.tabArr.length>0" :class="['nvTitle nvTabBox',{'androidwx':androidwx}]">
						<view :class="['nvTab',{'active':t.active},{'nvTabHide':t.hide}]" @tap.stop="nvTabTap" :data-index="i" v-for="(t,i) in config.tabArr" :key="i">
							<view class="nTTxt">{{t.title}}</view>
							<view class="line"></view>
						</view>
					</view>
					<view v-else :class="['nvTitle',{'androidwx':androidwx},{'hideback':config.hideback}]">
						{{config.title||title}}
					</view>
					<view :class="['nvback',{'nvhome':isSharePage&&!config.closeCheckback}]" @tap.stop="linkTo" :style="{'background':(isSharePage&&!config.closeCheckback?(config.componentBgColor||''):'')}" data-type="navigateBack" v-if="!config.hideback"></view>
					<view v-if="config.btn&&config.btn.length>0" class="nvBtnGroup">
						<block v-for="(b,n) in config.btn" :key="n">
						<view class="nvBtn" v-if="b.text" @tap.stop="nvBtnTap" :data-index="n" :data-type="b.type" :style="b.style||''">{{b.text}}</view>
						<image class="nvBtnImg" v-else-if="b.icon" @tap.stop="nvBtnTap" :data-index="n" :data-type="b.type" :style="b.style||''" :src="b.icon" mode="widthFix"></image>
						</block>
					</view>
				</view>
			</view>
		</view>
		<view class="nvToTop" :style="(config.toTop&&config.toTop.style)||''" v-show="config.toTop&&showToTop" @tap.stop="toTopTap"></view>
	</view>
</template>
<script>
	var platform;
	//#ifdef H5
	platform="mobile"
	//#endif
	//#ifdef APP-PLUS
	platform="app"
	//#endif
	//#ifdef MP
	platform="xcx"
	//#endif
	export default {
		name:"nv",
		props:{
			config:{
				type:Object,
				default(){
					return {}
				}
			},
		},
		data() {
			return {
				platform:platform||'mobile',
				title:getApp().globalData.NAME||"pyh-nv",
				currentPages:getCurrentPages().length||1,
				home:getApp().globalData.HOME||"/pages/index/index",
				inputValue:'',
				showToTop:false,
				transparent:{
					initColor:"#ffffff",
					finishColor:"#000000",
					color:"#ffffff",
					opacity:0
				}
			};
		},
		watch:{
			"config.search.value":function(value){
				var e = {detail:{value:value}}
				this.inputValue = e.detail.value
				if(this.config.type=="search"&&this.config.search.input)this.$emit("nvInput",e)
			}
		},
		computed:{
			statusHeight(){return uni.getSystemInfoSync().statusBarHeight+'px'},
			safeArea(){return this.config.safeArea||uni.getSystemInfoSync().safeArea.height},
			isFixed(){return this.config.transparent||this.config.position=='fixed'||this.config.position=='absolute'||!this.config.position},
			isSharePage(){return this.currentPages==1},
			navigatorHeight(){return parseInt(88*uni.getSystemInfoSync().windowWidth/750)+uni.getSystemInfoSync().statusBarHeight},
			androidwx(){
				if(this.config.checkAndroidwx&&this.platform=='xcx'&&uni.getSystemInfoSync().platform.indexOf("ios")==-1){
					return true
				}else{
					return false
				}
			},
			getBgColor(){
				var that = this;
				if(this.config.bgColor&&this.config.bgColor.indexOf("gradient")>-1){
					return this.config.bgColor
				}else{
					return (this.config.bgColor||this.config.transparent)?'rgba('+getRgbString()+','+(this.config.transparent&&this.config.transparent.type!='content'?this.transparent.opacity:1)+')':'#fff';
				}
				function getRgbString(){
					var bgColor = that.config.bgColor||"#ffffff",returnString=""
					if(bgColor.indexOf(",")>-1){
						returnString = bgColor.split('(')[1].replace(')','').split(',').slice(0,3).join(",")
					}else{
						if(bgColor.length==4)bgColor = bgColor+bgColor.charAt(bgColor.length-1)+bgColor.charAt(bgColor.length-1)+bgColor.charAt(bgColor.length-1)
						var string = bgColor.replace("#",'');
						returnString = parseInt(string.substring(0,2), 16)+','+parseInt(string.substring(2,4), 16)+','+parseInt(string.substring(4,6), 16)
					}
					return returnString
				}
			}
		},
		created() {
			if(this.config.search&&this.config.search.value)this.inputValue=this.config.search.value
			if(this.config.transparent&&this.config.transparent.initColor){
				var initColor = this.config.transparent.initColor,finishColor = this.config.color||"#000000";
				if(initColor.indexOf("#")>-1&&initColor.length==4){
					initColor = initColor+initColor.charAt(initColor.length-1)+initColor.charAt(initColor.length-1)+initColor.charAt(initColor.length-1)
				}
				if(finishColor.indexOf("#")>-1&&finishColor.length==4){
					finishColor = finishColor+finishColor.charAt(finishColor.length-1)+finishColor.charAt(finishColor.length-1)+finishColor.charAt(finishColor.length-1)
				}
				if(!((initColor=="#000000"||initColor=="#ffffff")&&(finishColor=="#000000"||finishColor=="#ffffff"))){
					console.log("状态栏颜色只支持，#000000或#ffffff");
				}
				this.transparent.initColor = initColor
				this.transparent.color = initColor
				this.transparent.finishColor = finishColor
			}
		},
		mounted() {
			if(this.config.color){
				var obj = {frontColor:this.config.color,backgroundColor:this.config.bgColor||"#ffffff"};
				uni.setNavigationBarColor(obj)
			}
			if(this.config.transparent&&this.config.transparent.initColor){
				var obj = {frontColor:this.transparent.initColor,backgroundColor:this.config.bgColor||"#ffffff"};
				uni.setNavigationBarColor(obj)
			}
		},
		methods:{
			nvLogoTap(e){
				var url = this.config.logo.url;
				this.$emit("nvLogoTap")
				url&&uni.reLaunch({url:url})
			},
			nvAddressTap(e){
				this.$emit("nvAddressTap")
			},
			inputChange(e){
				//输入框输入
				this.inputValue = e.detail.value
				if(this.config.type=="search"&&this.config.search.input)this.$emit("nvInput",e)
			},
			inputClear(e){
				//输入框清除
				this.inputValue=""
				if(this.config.type=="search"&&this.config.search.input)this.$emit("nvInput",e)
			},
			formSubmit(e){
				//输入框提交
				var e = {detail:{value:this.inputValue}};
				this.$emit("nvFormSubmit",e)
			},
			nvBtnTap(e){
				//右按键点击
				var e = {type:e.currentTarget.dataset.type,index:parseInt(e.currentTarget.dataset.index)};
				this.$emit("nvBtnTap",e)
			},
			nvTabTap(e){
				//中间tab按键点击
				var e = {index:parseInt(e.currentTarget.dataset.index)};
				this.$emit("nvTabTap",e)
			},
			toTopTap(e){
				this.showToTop=false
				uni.pageScrollTo({scrollTop:0,duration:this.config.toTop.duration||(this.config.toTop.duration===0?0:300)})
				this.$emit("nvToTop")
			},
			pageScroll(e){
				var anchor = this.navigatorHeight;
				if(this.config.transparent.anchor)anchor=this.config.transparent.anchor
				var op = parseFloat(parseFloat(e.scrollTop/anchor).toFixed(1))
				if(e.scrollTop<=anchor){
					this.transparent.opacity = op
					if(this.config.transparent.initColor){
						if(op>=.5){
							this.transparent.color=this.transparent.finishColor
							uni.setNavigationBarColor({frontColor:this.transparent.finishColor,backgroundColor:this.config.bgColor||"#ffffff"})
						}else{
							this.transparent.color=this.transparent.initColor
							uni.setNavigationBarColor({frontColor:this.transparent.initColor,backgroundColor:this.config.bgColor||"#ffffff"})
						}
					}
				}else{
					this.transparent.opacity = 1
				}
				if(this.config.toTop){
					if(this.showToTop&&e.scrollTop<this.safeArea){
						this.showToTop=false
					}
					if(!this.showToTop&&e.scrollTop>=this.safeArea){
						this.showToTop=true
					}
				}
			},
			linkTo(e) {
				var url=e.currentTarget.dataset.url,
				type=e.currentTarget.dataset.type,
				isInput=e.currentTarget.dataset.isInput;
				if(isInput&&this.config.type=="search"&&this.config.search&&this.config.search.input){
					return
				}
				if(this.nvRoute){
					this.nvRoute(url,type)
				}else{
					if(!url&&!type)return;
					if(url=="/"||url==".")return
					if(typeof(url)=="number"){
						if(this.currentPages==1){
							uni.reLaunch({url:this.home})
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
							if(this.currentPages==1){
								uni.reLaunch({url:this.home})
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
				}
			}
		}
	}
</script>
<style lang="scss">
	@import "./iconfont.wxss";
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 30rpx;
	  font-style: normal;
	}
	
	//主色，可以设置uni.scss的$mainColor
	//或
	//uni.scss未定义或定义为null,修改下方$mainColor的默认值
	$mainColor: #2b9939 !default;
	
	.nvBox{width: 100%;background-color: #fff;z-index: 992;color: #000000;box-sizing: border-box;}
	.nvBox *,.nvContent,.nvTitle{box-sizing: border-box;}
	.nvBox-sup{z-index: 991;}
	.nvHeight{width: 100%;height: 88rpx;box-sizing: content-box!important;padding-top: var(--status-bar-height);}
	.nvFixed{position: absolute;top: 0;height: 88rpx;left: 0;width: 100%;box-sizing: content-box!important;z-index: 992;background: inherit;padding-top: var(--status-bar-height);}
	.nvContent{position: absolute;bottom: 0;left: 0;width: 100%;height: 88rpx;display: flex;padding: 0 20rpx;justify-content: space-between;align-items: center;}
	.nvInput{font-size: 30rpx;width: 100%;}
	.searchIcon{
		width: 18px;
		margin-right: 20rpx;
		/* #ifdef MP */
		height: 18px;
		/* #endif */
	}
	.nvTitle{position: absolute;top: 0;width: 100%;text-align: center;line-height: 88rpx;display: flex;align-items: center;justify-content: center;padding: 0 80rpx;left: 0;font-size: 32rpx;font-weight: bold;}
	.androidwx{text-align: left;padding-left: 80rpx;justify-content: flex-start!important;}
	.nvback{font-size: 54rpx;position: absolute;left: 6rpx;padding-left: 8rpx;}
	.nvback:after{font-family: "iconfont";content:"\e743";}
	.nvhome{border-radius: 50%;font-size: 36rpx;width: 52rpx;height: 52rpx;padding: 0;left: 20rpx;text-align: center;}
	.nvhome:after{content:"\e605";}
	.nvHadBack{padding-left: 60rpx;}
	
	//logo
	.nvLogoBox{display: flex;align-items: center;justify-content: center;width: 100%;position: absolute;left: 0;}
	.nvLogo{width: 60rpx;height: auto;}
	
	//含搜索框
	.nvSearchBox{width: 100%;display: flex;}
	.nvSearchLogo{margin-right: 20rpx;}
	.nvAddress{background-color: #f8f8f8;border-radius: 44rpx;display: flex;justify-content: center;align-items: center;padding: 0 16rpx 0 10rpx;font-size: 28rpx;line-height: 30rpx;margin-right: 20rpx;color: #000000;}
	.nvAddress .nvAddressIcon{width: 30rpx;height: auto;margin-right: 4rpx;font-size: 34rpx;}
	.nvAddress .nvAddressIcon:after{font-family: "iconfont";content:"\e613";}
	.nvAddress .nvAddressText{width: 84rpx;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
	.searchPlac{color: #bbb;}
	.nvSForm{display: flex;flex: 1;justify-content: space-between;align-items: center;}
	.nvSBox{display: flex;flex: 1;border-radius: 44rpx;background-color: #f8f8f8;height: 60rpx;line-height: 60rpx;padding: 0 20rpx;align-items: center;}
	.nvSBtn{color: #fff;border-radius: 44rpx;height: 60rpx;line-height: 60rpx;width: 120rpx;padding: 0;text-align: center;font-size: 28rpx;margin-left: 20rpx;background-color: $mainColor;}
	.nvSForm .nvInput{flex: 1;}
	.nvSClose{
		/* #ifdef MP */
		height: 15px;
		/* #endif */
	}
	
	//右边按钮组
	.nvBtnGroup{position: absolute;right: 20rpx;top: 0;height: 88rpx;display: flex;align-items: center;justify-content: center;z-index: 993;font-size: 28rpx;color: #000000;}
	.nvBtnGroup .nvBtn,.nvBtnGroup .nvBtnImg{padding: 0;padding-left: 20rpx;background: none;border: none;color: #000000;box-sizing: content-box!important;z-index: 3;}
	.nvBtnGroup .nvBtnImg{height: auto;width: 48rpx;}
	
	//tab栏
	.nvTabBox .nvTab{display: flex;flex-direction: column;align-items: center;justify-content: flex-end;line-height: 80rpx;margin: 0 10rpx;}
	.nvTabBox .nvTab .nTTxt{padding: 0 10rpx;}
	.nvTabBox .nvTab .line{height: 4rpx;border-radius: 2rpx;background: none;width: 100%;}
	.nvTabBox .nvTab.active{
		.nTTxt{color: $mainColor;}
		.line{background-color: $mainColor;}
	}
	.nvTabBox .nvTabHide{width:0;height:0;margin:0;overflow:hidden;}
	
	//回到顶部
	.nvToTop{position: fixed;bottom: 200rpx;right: 40rpx;z-index: 992;background: #fff;border-radius: 50%;width: 80rpx;height: 80rpx;text-align: center;line-height: 80rpx;font-size: 46rpx;box-shadow: 2rpx 2rpx 2rpx 2rpx #ddd;}
	.nvToTop:after{font-family: "iconfont";content:"\e64d";}
	
	//小程序胶囊留位
	/* #ifdef MP-WEIXIN */
	.nvLogoBox,.nvSearchBox,.nvDefault{padding-right: 200rpx;}
	.nvSBtn,.nvBtnGroup{display: none;}
	/* #endif */
</style>