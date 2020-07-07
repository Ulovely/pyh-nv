<template>
	<view>
		<nv :config="nvConfig" @nvBtnTap="nvBtnTap" @nvTabTap="nvTabTap"></nv>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nvConfig:{
					title:"pyh-nv 通用导航栏",
					bgColor:"#ccc",
					// componentBgColor:"#f8f8f8",
					color:"#2b9939",
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
					],
					//中间tab组
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
				}
			}
		},
		methods: {
			nvBtnTap(e){
				console.log(e);
				uni.showModal({
					title:"pyh-nv",
					content:JSON.stringify(e)
				})
			},
			nvTabTap(e){
				console.log(e.index);
				for(var i in this.nvConfig.tabArr){
					if(i==e.index){
						this.nvConfig.tabArr[i].active=true
					}else{
						this.nvConfig.tabArr[i].active=false
					}
				}
			}
		}
	}
</script>

<style>

</style>
