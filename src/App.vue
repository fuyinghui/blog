<template>
  <div id="app">
	<navbar :show="!showNav"/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from './views/layout/Navbar.vue'
export default{
	components:{ Navbar },
	data() {
		return{
			
		};
	},
	computed:{
		showNav(){
			return this.$route.path =='/login'
		}
	}

};
</script>
	

<style lang="scss">

</style>
