<template>
	<view>
		<nv ref="nv" :config="nvConfig"></nv>
		<view class="listBox" :style="{'padding-top':(pageTop+'px')}">
			<view class="list" v-for="(item,i) in 20" :key="i">{{i}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nvConfig:{
					title:"pyh-nv 渐变导航栏",
					bgColor:"#ffffff",
					// componentBgColor:"#2b9939",
					color:"#000000",
					fixedAssist:{
						hide:true,
						// bgColor:"#2b9939"
					},
					transparent:{
						initColor:"#ffffff",
						// type:"content",//全透明为'content',背景透明不传或填'background'
						// anchor:200,//最终距离
					}
				}
			}
		},
		onPageScroll(e) {this.$refs.nv.pageScroll(e)},
		computed:{
			pageTop(){return parseInt(88*uni.getSystemInfoSync().windowWidth/750) + uni.getSystemInfoSync().statusBarHeight}
		},
		methods: {
			
		}
	}
</script>

<style>
	.listBox{background: linear-gradient(-45deg,#2b9939 0%, #ffc80b 100%);min-height: 500rpx;padding: 88rpx 20rpx 20rpx;}
	.listBox .list{background: #fff;border-radius: 20rpx;margin-bottom: 20rpx;padding: 16rpx 20rpx;text-align: center;}
</style>
