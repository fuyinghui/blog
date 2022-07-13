<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<b-container>
			<a class="navbar-brand" >{{mytxt}}</a>
			<b-nav v-if="show">
				<b-nav-item @click='bloglist' >博客列表</b-nav-item>
				<b-nav-item @click='blogadd' >博客新增</b-nav-item>
			</b-nav>
		</b-container>
	</nav>
</template>

<script>
	export default{
		data() {
				return{
					mytxt:'欢迎来到fuyh的博客',
				}				
		},
		props:{
			show:true,
		},
		methods:{
			bloglist(){
				this.$router.replace({name: 'ArticleList'})
			},
			blogadd(){
				this.$router.replace({name: 'WriteArticle'})
			}
		}
		
	};
</script>

<style lang="scss" scoped>
	
</style>

