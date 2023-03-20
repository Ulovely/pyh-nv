<template>
	<view>
		<nv :config="nvConfig" @nvInputTap="nvInputTap" @nvInput="nvInput" @nvFormSubmit="nvFormSubmit" @nvAddressTap="nvAddressTap"></nv>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nvConfig:{
					// componentsFlex:"bottom",//
					title:"pyh-nv 含搜索框导航栏",
					type:"search",
					back:{
						hide:true
					},
					mainColor:"#2b9939",//活动态主色
					search:{
						bgColor:"#f8f8f8",
						// color:"#2b9939",
						// focus:true,
						placeholder:"搜索",
						// placeholderStyle:"color:#333",
						//confirmType:"search",//同input的confirm-type
						value:"",//如需要动态赋值，必须初始化
						input:true,
						// url:"/pages/index/index",
						//linkType:"",//跳转类型，navigateTo、redirectTo、reLaunch、switchTab
						btn:{
							// style:"background:#2b9939;"//会覆盖活动色mainColor
						}
					},
					logo:{
						url:"/pages/index/index"
					},
					// btn:[
					// 	{
					// 		type:"点击1",
					// 		text:"点击1",
					// 		style:"color:#2b9939"
					// 	},
					// 	{
					// 		type:"点击2",
					// 		icon:"/static/logo.png"
					// 	}
					// ],
					// address:{
					// 	// bgColor:"#f8f8f8",
					// 	color:"#333",
					// 	province:"广东省",
					// 	city:"广州市",
					// 	county:"天河区",
					// 	fields:"province"
					// }
				}
			}
		},
		onLoad() {
			//这里是动态赋值的示例代码，如需要动态赋值，必须初始化search.value
			// setTimeout(()=>{
			// 	this.nvConfig.search.value = "赋值例子"
			// },2000)
		},
		methods: {
			nvInputTap(e){
				console.log(e);
			},
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
