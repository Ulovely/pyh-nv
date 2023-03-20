<template>
	<view>
		<pyh-nv :config="{back:{hide:true}}"></pyh-nv>
		<view class="desc">
			pyh-nv通用组件，是一款适用于多数情况的导航栏，兼容h5、app、微信小程序、其它小程序（未经测试，可能会出现样式差异，但都可调整至正常）；既有样式也有相应功能
			<view class="list title">拥有以下类型：</view>
			<view class="list">1、通用导航栏，包括右方按钮组以及中间tab按钮</view>
			<view class="list">2、含搜索框导航栏</view>
			<view class="list">3、背景图、logo导航栏</view>
			
			<view class="list title">对应类型支持以下对应功能：</view>
			<view class="list">1、返回键判断(包含首页判断)</view>
			<view class="list">2、按钮的点击/切换/事件</view>
			<view class="list">3、logo的点击/跳转</view>
			<view class="list">4、搜索框事件：清除、提交、赋值等</view>
			<view class="list">5、全类型支持渐变导航栏(背景色渐变、整体渐变、渐变并动态修改状态栏)</view>
			<view class="list title">所有类型导航栏都支持以下特性：</view>
			<view class="list">1、定位方式（fixed,static）</view>
			<view class="list">2、支持单独组件使用（脱离页面导航栏，无状态栏）</view>
			<view class="list">3、三端兼容，app、h5、微信小程序</view>
			<view class="list">4、动态背景色，包括渐变背景色</view>
			<view class="list">5、全自定义，可随时自定义各个属性</view>
			<view class="list">6、兼容nvue</view>
			<view class="list">7、兼容vue3</view>
		</view>
		<view class="listBox">
			<navigator url="/pages/pyh-nv/default/default">通用导航栏<view></view></navigator>
			<navigator url="/pages/pyh-nv/search/search">含搜索框导航栏<view></view></navigator>
			<navigator url="/pages/pyh-nv/image/image">背景图、logo导航栏<view></view></navigator>
			<navigator url="/pages/pyh-nv/transparent/transparent">渐变导航栏<view></view></navigator>
			<navigator url="/pages/pyh-nv/nvue/nvue">兼容nvue（复制其它页面浏览）<view></view></navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style>
	.desc{padding: 50rpx;font-size: 28rpx;}
	.desc .list.title{margin-top: 30rpx;}
	.listBox{background: #ffffff;font-size: 32rpx;}
	.listBox navigator{padding: 16rpx 20rpx;border-bottom: 1px solid #F2F2F2;display: flex;justify-content: space-between;align-items: center;}
	.listBox navigator:last-child{border-bottom: none;}
	.listBox navigator>view{transform: rotate(180deg);}
	.listBox navigator>view:after{font-family: "iconfont";content:"\e743";transform: rotate(180deg);}
</style>
