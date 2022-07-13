<template>
	
	<b-container>
		<b-row style ="height: 9.375rem">
		</b-row>
		<b-row>
		  <b-col cols="3"></b-col>
		  <b-col cols="6" align-v="center">		
					<b-card>
						<b-form>
							<b-form-group label="手机号:">
								<b-form-input   type="number" v-model="user.telephone" placeholder="Enter your telephone number"></b-form-input>
								<b-form-text id="number-help-block" text-variant="danger" v-if="showNumberValidate">手机号必须为11位 </b-form-text>
							</b-form-group>
							
							<b-form-group label="密 码:">
								<b-form-input type="password" v-model="user.password" placeholder="Enter your password"></b-form-input>
							</b-form-group>
							<b-form-group>
								<b-button @click='login' block variant="light">登 录</b-button>
							</b-form-group>	
							
						</b-form>
					</b-card>							  
				</b-col>
		  <b-col cols="3"></b-col>
		</b-row>
	</b-container>
</template>

<script>

	export default{
		data(){
			return{
				user:{
					telephone:"",
					password:""
				},
				showNumberValidate:false,
			};
		},
	
		methods:{
				
			login(){
				if(this.user.telephone.length!=11){
					this.showNumberValidate=true
				}
				const api = 'http://localhost:8086/api/auth/login';
				console.log(api)
			
				this.axios.post(api,{...this.user}).then(res =>{
					//保存token
					localStorage.setItem('token', res.data.data.token)
					console.log(res.data);
					console.log(this.$route.path)
					//跳转主页
					this.$router.replace({name: 'WriteArticle'})
				}).catch(err =>{
					
					alert(err.response.data.msg)
					console.log('err:',err.response.data.msg)
				});
				
			}
			
		}
		
	};
</script>

<style lang="scss" scoped>
	
</style>
