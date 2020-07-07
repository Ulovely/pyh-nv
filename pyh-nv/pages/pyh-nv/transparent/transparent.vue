<template>
	<view>
		<nv ref="nv" :config="nvConfig"></nv>
		<view class="listBox">
			<view style="height: var(--status-bar-height);width: 100%;"></view>
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
					bgColor:"#2b9939",
					componentBgColor:"#2b9939",
					color:"#fff",
					transparent:{
						type:"content",//全透明为'content',背景透明不传或填'background'
						// anchor:200,//最终距离
						originalNavigationBarColor:{
							frontColor:"#ffffff",
							backgroundColor:"#2b9939",
							animation:{duration:200,timingFunc:"easeInOut"}
						},
						navigationBarColor:{
							frontColor:"#000000",
							backgroundColor:"#2b9939",
							animation:{duration:200,timingFunc:"easeInOut"}
						}
					}
				}
			}
		},
		onPageScroll(e) {this.$refs.nv.pageScroll(e)},
		methods: {
			
		}
	}
</script>

<style>
	.listBox{background: linear-gradient(-45deg,#2b9939 0%, #ffc80b 100%);min-height: 500rpx;padding: 128rpx 20rpx 20rpx;}
	.listBox .list{background: #fff;border-radius: 20rpx;margin-bottom: 20rpx;padding: 16rpx 20rpx;text-align: center;}
</style>
