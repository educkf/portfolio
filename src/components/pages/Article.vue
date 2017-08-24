<template>
  <article class="single article">

    <div id="article-header">
      
      <div class="about" :style="'background: ' + project.color">
        <div class="about-content">
          <h1>{{project.title}}</h1>
        </div>
      </div>
    </div>


    <div class="container article-content" v-if="project.type == 'article'">
      <p class="original-date">Texto originalmente publicado em {{project.date}} — {{project.urllabel}}</p>
      <div v-html="project.content"></div>
      <a :href="project.url" target="_blank" class="visite-article">Ler texto completo ({{project.urllabel}}) →</a>
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

import cardComponent from '../includes/cardComponent'

export default {
  name: 'article',
  components: {
    cardComponent
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

    .single.article {
        #article-header {
            height: 350px; 
            margin-top: 0px;
            opacity: 1;
            
            .about {}
            .about-content {}
        }
    }

    .article-content, .project-content {
        opacity: 1;
    }

    .related {
        opacity: 1;
    }
}

.single {
    #article-header {
        height: 0px;
        opacity: 0;
        position: relative;
        top: -75px;
        box-shadow: 0 3px 4px 0px #aaa;
        color: #fff;
        overflow: hidden;
        transition: all 0.25s ease-out;

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

    &.article #article-header {
        height: 0;
        min-height: 0;
        margin-top: 175px;
        opacity: 0;
        overflow: hidden;

        .about {
            width: 100vw;
            height: 350px;

            .about-content {
                width: 100%;
                max-width: 1220px;
                margin: 0 auto;

                h1 {
                    font-size: 46px;
                    line-height: 52px;
                    padding-right: 25vw;
                }
            }
        }
    }
}

.article-content {
    opacity: 0;
    padding-bottom: 60px;

    transition: all 0.25s ease-out;

    p {
        font: 22px/28px 'Cambria', serif;
        padding: 0 10vw 15px 0;

        &.image-subtitle {
            font-size: 16px;
            color: #999;
            margin-bottom: 30px;
        }
        &.original-date {
            color: #999;
            font-style: italic;
            margin: -30px 0 15px;
            font-size: 14px;
        }
    }
    hr {
        margin: 0 0 30px 0;
        border: none;
    }
    hr:before {
        content: '...';
        text-align: center;
        width: 100%;
        display: block;
        font-family: 'Cambria',serif;
        font-weight: 400;
        font-style: italic;
        font-size: 28px;
        letter-spacing: .6em;
    }

    img {
        display: block;
        margin: 30px 0 0;
    }

    a.visite-article {
        display: block;
        width: 450px;
        text-align: center;
        padding: 15px 30px;;
        margin: 0;
        background: #ccc;
        border: 2px solid #ccc;
        border-radius: 50px;
        color: #151515;
        transition: all 0.125s ease-out;

        &:hover {
            background: #fff;
            border-color: #151515;
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
