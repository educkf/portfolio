<template>
  <div id="home-content" class="container">
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

</style>
