<template>
	<section class="year-component">
		<h1>{{year}}</h1>
		<p>{{description}}</p>

		<div class="clearfix"></div>
		
		<div class="row">
			<card-component v-for="job in portfolio" :id="job.id" :key="job.id"></card-component>
		</div>

	</section>
</template>

<script>

import CardComponent from './CardComponent'

export default {
	name: 'year-component',
	components: {
		CardComponent
	},
	props: [
		'year',
		'description'
	],
	data () {
		return {
		}
	},
	computed: {
		portfolio() {
			return this.$store.state.portfolio.filter(x => x.year === this.year);
		}
	}
}
</script>


<style lang="scss">

.year-component {

	& > h1 {
		font-size: 30px;
		margin: 60px 0 10px 0;
	}

	& > p {
		font-size: 16px;
		line-height: 23px;
		margin: 0 0 30px 0;
	}
}

.row {
	width: calc(100% + 40px);
	margin: 0 -20px;
}

</style>
