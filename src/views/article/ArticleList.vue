<template>
	<b-container fluid>
		<b-card>
			<b-row class="text-center"v-for="arcticle in articles">
				<b-col sm="2">左边</b-col>
					<b-col sm="8">
						<b-card @click='articleinfo(arcticle.ID)'>
							<a>{{arcticle.title}}</a>      <a>{{arcticle.created_at}}</a>
						</b-card>
					</b-col>
				<b-col sm="2">右边</b-col>
			</b-row>
		</b-card>
	</b-container>
</template>

<script>
	export default{
		data() {
			return{
				article:{
					id:'',
					title:'',
					status:'',
					created_at:'',
				},
				articles:[],
			}
		},
		created(){
		      this.convert()
		    },
		methods: {
			articleinfo(id){
				this.$router.push({name: 'ArticleInfo',params: {id:id}})
			},
			convert: function () {
				const api = 'http://localhost:8086/api/auth/articleList';
				var token = 'Bearer ' + localStorage.getItem("token")
				this.axios.interceptors.request.use(config =>{
					config.headers.Authorization = token
					return config
					})
			    this.axios.get(api).then(res => {
					this.$data.articles=res.data.data.articles
					console.log(res.data.data.articles)
			    }).catch(err =>{
					
					alert(err.response.data.msg)
					console.log('err:',err.response.data.msg)
				});
			}
		}
	}
</script>

<style>
</style>
