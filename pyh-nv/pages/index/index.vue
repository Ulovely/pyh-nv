<template>
	<view>
		<nv :config="{'hideback':true}"></nv>
		<view class="desc">
			pyh-nv通用组件，是一款适用于多数情况的导航栏，兼容h5、app、微信小程序、其它小程序（未经测试，可能会出现样式差异，但都可调整至正常）；既有样式也有相应功能</br>
			拥有以下类型：</br>
			1、通用导航栏，包括右方按钮以及中间tab按钮</br>
			2、含搜索框导航栏</br>
			3、单logo导航栏</br>
			对应类型支持以下对应功能：</br>
			1、跳转判断(包含首页判断)</br>
			2、按钮的点击/切换/事件</br>
			3、logo的点击/跳转</br>
			4、搜索框事件：清除、提交、赋值等</br>
			5、全类型支持渐变导航栏(背景色渐变、整体渐变、渐变并动态修改状态栏)</br>
			所有类型导航栏都支持以下特性：</br>
			1、定位方式（fixed,static）</br>
			2、多端兼容，包括安卓微信小程序</br>
			3、动态背景色，包括渐变背景色</br>
			4、全自定义，可随时自定义各个属性
		</view>
		<view class="listBox">
			<navigator url="/pages/pyh-nv/default/default">通用导航栏<view></view></navigator>
			<navigator url="/pages/pyh-nv/search/search">含搜索框导航栏<view></view></navigator>
			<navigator url="/pages/pyh-nv/logo/logo">单logo导航栏<view></view></navigator>
			<navigator url="/pages/pyh-nv/transparent/transparent">渐变导航栏<view></view></navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	page{background: #f8f8f8;color: #333;}
	.desc{padding: 50rpx;font-size: 28rpx;}
	.listBox{background: #fff;font-size: 32rpx;}
	.listBox navigator{padding: 16rpx 20rpx;border-bottom: 1px solid #F2F2F2;display: flex;justify-content: space-between;align-items: center;}
	.listBox navigator:last-child{border-bottom: none;}
	.listBox navigator>view{transform: rotate(180deg);}
	.listBox navigator>view:after{font-family: "iconfont";content:"\e743";transform: rotate(180deg);}
</style>
