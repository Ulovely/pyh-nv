<template>
	<view>
		<nv :config="nvConfig" @nvLogoTap="nvLogoTap"></nv>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nvConfig:{
					type:"logo",
					logo:{
						src:"/static/logo.png",
						// url:"/pages/index/index",//如果有url就会reLaunch跳转
						style:{
							width:"60rpx"
						}
					},
					btn:[
						{
							type:"点击1",
							text:"点击1",
							// style:{
							// 	color:"#ffffff"
							// }
						},
						{
							type:"点击2",
							icon:"/static/logo.png"
						}
					]
				}
			}
		},
		methods: {
			nvLogoTap(){
				console.log("logo点击");
				uni.showModal({
					title:"pyh-nv",
					content:"logo点击"
				})
			}
		}
	}
</script>

<style>

</style>
