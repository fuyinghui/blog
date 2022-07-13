<template>
	<div style="width: 100%;">
		<div style="float:left;display:inline"></div>
		<div style="float:left;display:inline">
			{{article.content}}
		</div>
		<div style="float:left;display:inline"></div>
		
	</div>
</template>

<script>
	export default {
		
	  data(){	
			
	          return {
					article:{
						id:'',
						title:'',
						content:'',
						status:'',
						created_at:'',
						updated_at:'',
					},
					showTitleValidate:false,
					showContentValidate:false
	          }
	      },
			created() {
				const api = 'http://localhost:8086/api/auth/articlePubInfo';
				//console.log("token:"+localStorage.getItem("token"))
				var token = 'Bearer ' + localStorage.getItem("token")
				this.axios.interceptors.request.use(config =>{
					config.headers.Authorization = token
					return config
					})
				this.axios.get(api,{ params: { 'id': this.$route.params.id } }).then(res =>{
					//绑定数据
					this.$data.article=res.data.data.article
					//alert(res.data.msg)
					//this.$router.replace({name: 'HomeView'})
				}).catch(err =>{
					//const msg = err.response.data.msg
					//alert(err.response.data.msg)
					//console.log('err:',err.response.data.msg)
				});	
				console.log(this.$route.params.id)
			},
	      
	}
</script>

<style>
</style>
