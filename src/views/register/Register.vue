<template>
  <b-container class="bv-example-row">
	<b-row style ="height: 9.375rem"> 
	</b-row>
    <b-row>
      <b-col cols="3"></b-col>
      <b-col cols="6" align-v="center">
		<b-card>
			<b-form>
				<b-form-group label="手机号:">
					<b-form-input type="number" v-model="number" placeholder="Enter your telephone number"></b-form-input>
				</b-form-group>
				<b-form-group label="姓 名:">
					<b-form-input type="text" v-model="name" placeholder="Enter your name"></b-form-input>
				</b-form-group>
				<b-form-group label="密 码:">
					<b-form-input type="password" v-model="password" placeholder="Enter your password"></b-form-input>
				</b-form-group>					
				<b-form-group>
					<b-button block variant="light">注 册</b-button>
				</b-form-group>	
			</b-form>
		</b-card>			
	  </b-col>
      <b-col cols="3"></b-col>
    </b-row>
  </b-container>
</template>

<script>
 
</script>
<style lang="scss" scoped>
	
</style>
