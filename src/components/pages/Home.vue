<template>
  <div id="home-content" class="container">
		<div class="col100 alert hide-on-project"><strong>Importante!</strong> O site está incompleto, sem as informações detalhadas por projeto, e nem todos os projetos. Casa de ferreiro, espeto de pau :)<br>Mas o código fonte dele esta <a href="https://github.com/educkf/portfolio" target="_blank">aqui</a>, caso queira dar uma olhada. É um SPA feito em Vue.js, sem qualquer backend.</div>
    <div class="clearfix"></div>
    <year-component v-for="period in periods" :year="period.year" :description="period.description" :key="period.year"></year-component>
  </div>
</template>

<script>

import yearComponent from '../includes/Year'

export default {
  name: 'home',
  components: {yearComponent},
  data () {
    return {
    }
  },
  computed: {
    periods() {
      return this.$store.state.years
    }
  },
  mounted() {
    document.body.classList.remove('project');

    var scrollto = this.$store.state.scrollposition;
    if (scrollto && scrollto > 0) {
      window.scrollTo(0, scrollto);
    }
    
  },
  beforeRouteLeave (to, from, next) {
    document.body.className += ' project'
    setTimeout(function() {next()},350)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .year-component:first-child h1 {
      margin-top: 0;
  }

  #home-content {
    opacity: 1;
    -webkit-transition: all 0.25s ease-in;
    -moz-transition: all 0.25s ease-in;
    -ms-transition: all 0.25s ease-in;
    -o-transition: all 0.25s ease-in;
    transition: all 0.25s ease-in;
  }

  body.project #home-content {
    opacity: 0;
  }

  .alert {
    background: rgba(255, 0, 0, 0.17);
    padding: 15px;
    margin: 0px 0 -30px -15px;
    border-radius: 2px;
    border: 1px solid rgba(255, 0, 0, 0.26);
    color: rgba(218, 74, 74, 0.68);
    font-size: 13px;
    line-height: 17px; 

    a {
      color: rgba(218, 74, 74, 0.9);
    }

    @media screen and (max-width: 480px) {
      width: 100%;
      max-width: inherit;
      margin: -30px 0;
    }
  }

</style>
