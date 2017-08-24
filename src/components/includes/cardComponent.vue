<template>
	<article class="card" :class="classType + ' card-' + item.type" :id="'card-' + item.id">
		<figure v-if="item.type == 'project'">
			<img :src="'/static/project/'+item.id+'-500.png'" alt="">
			<img :src="'/static/project/'+item.id+'-1400.png'" class="preload" alt="">
		</figure>
		<div class="card-info" :style="'background: '+ item.color">
			<p>{{item.type}}</p>
			<h1 v-if="item.type == 'project'"><router-link :to="'/projeto/'+item.seoname">{{short_title}}</router-link></h1>
			<h1 v-else="item.type == 'article'"><router-link :to="'/artigo/'+item.seoname">{{short_title}}</router-link></h1>
			<h5>{{item.subtitle}}</h5>
			<p class="description"  v-if="item.type == 'project'">{{item.excerpt}}</p>
			<p class="url">{{item.urllabel}}</p>
		</div>
	</article>

</template>

<script>
export default {
	name: 'card-component',
	props: [
		'id'
	],
	data () {
		return {

		}
	},
	computed: {
		item() {
			return this.$store.state.portfolio.find(x => x.id === this.id)
		},
		classType() {
			return this.item.type == 'project'? 'col50' : 'col25'
		},
		short_title() {
			if (this.item.title.length > 53) {
				return this.item.title.substr(0,53).trim() + '...'
			}
			return this.item.title
		}
	},
	methods: {
		changeActiveColor: function() {
			const payload = this.item.color;
			this.$store.commit('UPDATE_COLOR', payload);
		}
	}
}
</script>

<style lang="scss">
	article.card {
		background: #eee;
		position: relative;
		height: 260px;
		overflow: auto;
		box-shadow: 0 2px 3px 0px #ccc;
		margin-bottom: 20px;

		figure {
			position: absolute;
			left: 0;
			top: 0;
			height: 260px;
			width: 100%;
			overflow: hidden;

			img {
				height: auto;
			}

			img.preload {
				opacity: 0;
				display: none;
				position: absolute;
				top: -9999px;
				left: -9999px;
			}
		}

		.card-info {
			height: 100%;
			padding: 25px;
			color: #fff;
			margin: 0;

			a {
				color: #fff;
			}

			h1 {
				font-size: 25px;
				line-height: 30px;
			}
			
			h5 {
				font-size: 16px;
				font-weight: 300;
				margin: 12px 0;
				opacity: 0.7;
			}

			p.description {
				font-size: 16px;
				font-weight: 200;
				line-height: 17px;
				opacity: 0.7;
			}

			p.url {
				position: absolute;
				bottom: 20px;
			}
		}

		&.card-article {
			background: #151515;
		}

		&.card-project {
			.card-info {
				width: 50%;
				position: absolute;
				right: 0;
				top: 0;
			}
		}
	}
</style>