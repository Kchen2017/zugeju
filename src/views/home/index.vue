<template>
	<div>
		<el-button @click="sendHttp" type="primary">click</el-button>
		<input type="text" v-model="resData">
	</div>
</template>
<script>
	import homeApi from "../../api/homeApi"
	export default {
		data(){
			return {
				resData: ""
			}
		},
		methods: {
			sendHttp(){
				homeApi.sendHomeApi().then(res => {
					console.log(res)
					this.resData = res.data.data
				})
			}
		}
	}
</script>
<style>
	
</style>