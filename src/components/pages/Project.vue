<template>
	<article class="single" :class="project.type">

		<div id="project-header">

      		<figure>
        		<img :src="'/static/project/' + project.id + '-1400.png'" alt="">
      		</figure>
      
      		<div class="about" :style="'background: ' + project.color">
        		<div class="about-content">
          			<h1>{{project.title}}</h1>
          			<h5>{{project.subtitle}}</h5>
          			<p class="description">{{project.excerpt}}</p>
          			<p class="url">
            			<a :href="project.url" target="_blank">{{project.urllabel}}</a>
          			</p>
        		</div>
      		</div>
    	</div>

    	<div class="container project-content">

			<div class="col50 explain-module">
				<h3>Escopo do projeto</h3>
				<div v-html="project.scope"></div>
			</div>

			<div class="col50 explain-module">
				<h3>Atribuições</h3>
				<div v-html="project.atributions"></div>
			</div>

			<div class="clearfix"></div>

			<div class="col100 explain-module">
				<h3>Decisões e partidos</h3>
				<p v-html="project.decisions"></p>
			</div>

			<div class="clearfix"></div>
    	
		</div>

    	<div class="clearfix"></div>
    
		<div class="container related" v-if="related.length > 0">
			<h1>Veja também</h1>
			<div class="row">
				<card-component v-for="single in related" :id="single.id" :key="single.id"></card-component>
			</div>
		</div>
		<br><br><br>

  	</article>
</template>

<script>
import CardComponent from '../includes/CardComponent'

export default {
	name: 'project',
	components: {
    	CardComponent
  	},
  	data () {
    	return {
    	}
  	},
  	computed: {
    	project() {
      		var projId = this.$route.params.seoname;
      		return this.$store.state.portfolio.find(x => x.seoname == projId)
    	},
    	related() {
      		let array = []; 
			var related = this.$store.state.portfolio.filter(x => x.context === this.project.context);
			if(related.length >= 2) {
				array = [related[0],related[1]];
			} else if (related == 1) {
				array.push(related[0]);
			}
			return array;
		}
	},
  	mounted() {
    	const list = ['project-loaded', 'project'];
    	document.body.classList.add(...list)
  	},
  	beforeRouteLeave (to, from, next) {
    	document.body.classList.remove('project-loaded')
    	setTimeout(function() {next()},350)
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

body.project-loaded {

	.single {
        #project-header {
        	height: 60vh;
        	min-height: 350px;
          	opacity: 1;

        	figure img {
            	filter: blur(0px);
            	transform: rotate(-2.5deg);
            	width: 100%;
          	}
        }
    }

    .project-content {
        opacity: 1;
    }

    .related {
        opacity: 1;
    }

}

.single {
	#project-header {
        height: 0px;
        opacity: 0;
        position: relative;
        top: -75px;
        box-shadow: 0 3px 4px 0px #aaa;
        color: #fff;
        overflow: hidden;

        transition: all 0.25s ease-out;

        figure {
        	position: absolute;
        	top: 0;
        	right: 0;

			img {
				position: relative;
				top: -20px;
				left: 150px;

				transition: all 0.5s ease-out;

				filter: blur(10px);
				transform: rotate(0deg);
				width: 102%;
			}
        }

        .about {
			position: absolute;
			left: 0;
			top: 0;
			z-index: 2;
			height: 60vh;
			min-height: 350px;
			width: 40vw;
			display: flex;
			align-items: center;
			box-shadow: -1px 0px 245px 20px rgba(85, 85, 85, 0.56);

			.about-content {

				h1 {
					line-height: 25px;
					padding-bottom: 10px;
				}
				h5 {
					font-size: 16px;
					font-weight: normal;
					text-transform: lowercase;
				}
				p {
					opacity: 0.75;
				}
				p.description {
					padding: 30px 0;
				}
				p.url {
					a {
						color: #fff;
						text-decoration: none;
					}
				}

			}
        }

    }

    &.project #project-header .about {
        padding: 0 10vw;
    }

}

.project-content {
	opacity: 0;
    padding-bottom: 60px;

    transition: all 0.25s ease-out;
      
    .explain-module {
        margin-bottom: 25px;
        overflow: auto;
        
        h3 {
        	font-size: 30px;
        }

        p {
          	margin: 0 0 15px 0;
			font: 20px/26px 'Cambria', serif;
        }

        ul {
			padding-left: 20px;

			li {
				margin-bottom: 15px;
				padding-left: 10px;
			}
        }
    }
}

.related {
	opacity: 0;
    transition: all 0.25s ease-out;

    h1 {
        margin-bottom: 30px;
    }
}
    
</style>
