<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<b-container>
			<a class="navbar-brand" >欢迎来到博客后台管理系统</a>
			<b-nav v-if="show">
				<b-nav-item @click='bloglist' >博客列表</b-nav-item>
				<b-nav-item @click='blogadd' >博客新增</b-nav-item>
			</b-nav>
		</b-container>
	</nav>
</template>

<script>
	export default{
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

