<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		text-decoration: none;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: 'Roboto', sans-serif;
		overflow-y: scroll;
	}

	h1, h2, h3 {
		font-family: 'Poppins', sans-serif;
	}

	@for $i from 5 through 100 {
		.col#{$i} {
			width: calc(#{$i}vw - 22px);
			max-width: calc(#{$i}% - 22px);
			padding: 0;
	    	margin: 0 20px 0 0; 
	    	display: inline-block;
		}
	}

	.container {
		width: 90%;
		max-width: 1200px;
		margin: 0 auto;
	}

	.clearfix {
		width: 100%;
		clear: both;
		float: none;
	}

</style>
