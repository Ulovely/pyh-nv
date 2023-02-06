<template>
	<view>
		<nv ref="nv" :config="nvConfig" @nvBtnTap="nvBtnTap"></nv>
		<nv :config="nvConfig2" @nvBackTap="nvBackTap" @nvBtnTap="nvBtnTap" @nvTabTap="nvTabTap"></nv>
		<view class="listBox">
			<view class="list" v-for="(item,i) in 20" :key="i">{{i}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nvConfig:{
					// windowInfo:{
					// 	width:375,
					// 	height:667,
					// 	// statusBarHeight:0
					// },
					title:"pyh-nv 通用导航栏",
					// sysncTitle:false,//是否开启同步导航栏（比如微信导航栏）
					bgColor:"#fff",
					componentBgColor:"#f8f8f8",
					color:"#2b9939",
					btn:[
						{
							type:"点击1",
							text:"点击1",
							//style:"color:#2b9939"
						},
						{
							type:"点击2",
							icon:"/static/logo.png",
							badge:{
								text:"1"
							}
						}
					],
					// 中间tab组
					// tabArr:[
					// 	{
					// 		title:"tab1",
					// 		active:true
					// 	},
					// 	{
					// 		title:"tab2",
					// 		hide:false
					// 	},
					// 	{
					// 		title:"tab3",
					// 		active:false
					// 	}
					// ],
				},
				nvConfig2:{
					model:true,//是否页面内独立使用模型，如果是固定定位，top为导航栏高度
					// position:'static',
					title:"pyh-nv 导航模块",
					bgColor:"linear-gradient(to right, red , yellow)",
					color:"#fff",
					btn:[
						{
							type:"点击1",
							text:"点击1",
							//style:"color:#ffffff"
						},
						{
							type:"点击2",
							icon:"/static/logo.png"
						}
					],
					// 中间tab组
					tabArr:[
						{
							title:"tab1",
							active:true
						},
						{
							title:"tab2",
							active:false,
							hide:false
						},
						{
							title:"tab3",
							active:false
						}
					],
				}
			}
		},
		onReady() {
			//直接调用样式方法
			// this.$refs.nv.setStyle({opacity: 0});
		},
		methods: {
			nvBackTap(e){
				console.log(e);
			},
			nvBtnTap(e){
				console.log(e);
				uni.showModal({
					title:"pyh-nv",
					content:JSON.stringify(e)
				})
			},
			nvTabTap(e){
				console.log(e.index);
				for(var i in this.nvConfig2.tabArr){
					if(i==e.index){
						this.nvConfig2.tabArr[i].active=true
					}else{
						this.nvConfig2.tabArr[i].active=false
					}
				}
			}
		}
	}
</script>

<style>
	.listBox{background: linear-gradient(to bottom right,#ffc80b, #2b9939);padding: 88rpx 20rpx 20rpx;}
	.list{background: #fff;border-radius: 20rpx;margin-bottom: 20rpx;padding: 16rpx 20rpx;text-align: center;}
</style>
