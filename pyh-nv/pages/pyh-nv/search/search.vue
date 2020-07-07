<template>
	<view>
		<nv :config="nvConfig" @nvInput="nvInput" @nvFormSubmit="nvFormSubmit" @nvAddressTap="nvAddressTap"></nv>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nvConfig:{
					type:"search",
					hideback:true,
					search:{
						bgColor:"#f8f8f8",
						// focus:true,
						placeholder:"搜索",
						// placeholderStyle:{color:"#333"},
						//confirmType:"search",//同input的confirm-type
						input:true,
						// url:"/pages/index/index",
						btn:{}
					},
					logo:{
						url:"/pages/index/index"
					},
					// address:{
					// 	bgColor:"#f8f8f8",
					// 	color:"#333",
					// 	province:"广东省",
					// 	city:"广州市",
					// 	county:"天河区",
					// 	fields:"province"
					// }
				}
			}
		},
		methods: {
			nvInput(e){
				console.log(e.detail.value);
			},
			nvFormSubmit(e){
				console.log(e.detail.value);
				uni.showModal({
					title:"pyh-nv",
					content: "input提交："+JSON.stringify(e.detail.value)
				})
			},
			nvAddressTap(e){
				console.log("点击了地址");
				// this.nvConfig.address.province = "湖南省"
				uni.showModal({
					title:"pyh-nv",
					content: "点击了地址"
				})
			}
		}
	}
</script>

<style>

</style>
