<template>
	
	<b-container fluid>
		<b-card>
			<b-form>
				<b-row class="text-center">
					<b-col sm="12">
						<b-form-input v-show='false'  id="input-small" v-model="article.status" size="sm" ></b-form-input>
					</b-col>
				</b-row>
				<b-row class="text-center">
				  <b-col sm="2">
				  </b-col>
				  <b-col sm="1">
				    <label for="input-small">标题:</label>
				  </b-col>
				  <b-col sm="7">
				    <b-form-input id="input-small" v-model="article.title" size="sm" placeholder="请输入文章标题"></b-form-input>
					<b-form-text id="number-help-block" text-variant="danger" v-if="showTitleValidate">文章标题不能为空！ </b-form-text>
				  </b-col>
						<b-col sm="2">
						</b-col>
				</b-row>
				<b-row class="text-center"></b-row>
				<b-row class="text-center">
				  <b-col sm="2">
				  </b-col>
				  <b-col sm="1">
				    <label for="input-default">文章内容:</label>
				  </b-col> 
				  <b-col sm="7">
						<mavon-editor v-model="article.content"></mavon-editor>
						<b-form-text id="number-help-block" text-variant="danger" v-if="showContentValidate">文章内容不能为空！ </b-form-text>
				  </b-col>
						<b-col sm="2">
						</b-col>
				</b-row>
				<b-row class="text-center">
						  <b-col sm="7">		   
						  </b-col>
						  <b-col sm="1">
						  		<b-button @click='del' block variant="light">删除</b-button>
						  </b-col>
						  <b-col sm="1">
						  		<b-button @click='update' block variant="light">更改</b-button>
						  </b-col>
						  <b-col sm="1">
							<b-button @click='submit' block variant="light">发布</b-button>
						  </b-col>
						  <b-col sm="2">
						  </b-col>
				</b-row>
			</b-form>		  
		</b-card>
	</b-container>
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
			const api = 'http://localhost:8086/api/auth/articleInfo';
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
        methods:{
			del(){
				const api = 'http://localhost:8086/api/auth/articleDel';
				//console.log("token:"+localStorage.getItem("token"))
				var token = 'Bearer ' + localStorage.getItem("token")
				this.axios.interceptors.request.use(config =>{
					config.headers.Authorization = token
					return config
					})
				this.axios.delete(api,{ params: { 'id': this.$route.params.id } }).then(res =>{
					//提示删除成功
					alert(res.data.msg)
					//跳转articleList页面
					this.$router.replace({name: 'ArticleList'})
					//this.$router.replace({name: 'HomeView'})
				}).catch(err =>{
					//const msg = err.response.data.msg
					alert(err.response.data.msg)
					//console.log('err:',err.response.data.msg)
				});
			},
            update(){
				if(this.article.title.length==0){
					this.showTitleValidate=true
				}else{
					this.showTitleValidate=false
					if(this.article.content.length==0){
						this.showContentValidate=true
					}else{
						this.showContentValidate=false
					}
				}
				const api = 'http://localhost:8086/api/auth/articleUpdate';
				//console.log(api)
				//console.log("token:"+localStorage.getItem("token"))
				var token = 'Bearer ' + localStorage.getItem("token")
				console.log("token:"+token)
				this.axios.interceptors.request.use(config =>{
					config.headers.Authorization = token
					return config
					})
				console.log("将要执行this.axios.put")
				this.axios.put(api,{...this.article}).then(res =>{
					//返回更新后的数据
					console.log("this.axios.put")
					this.$data.article=res.data.data.article
					alert(res.data.msg)
					//this.$router.replace({name: 'HomeView'})
				}).catch(err =>{
					//const msg = err.response.data.msg
					alert(err.response.data.msg)
					console.log('err:',err.response.data.msg)
				});
				
            },
            submit(){
                console.log("this is submit");
				const api = 'http://localhost:8086/api/auth/submitArticle';
				var token = 'Bearer ' + localStorage.getItem("token")
				this.axios.interceptors.request.use(config =>{
					config.headers.Authorization = token
					return config
					})
				this.axios.post(api,{...this.article}).then(res =>{
					//跳转主页
					//this.$data.article=res.data.data.article
					alert(res.data.msg)
					//this.$router.replace({name: 'HomeView'})
				}).catch(err =>{
					//const msg = err.response.data.msg
					alert(err.response.data.msg)
					console.log('err:',err.response.data.msg)
				});
            }
        
        },
  }
</script>

<style>

</style>