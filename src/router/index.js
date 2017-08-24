import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

Vue.use(Router)

import Header from '../components/includes/Header'
import Home from '../components/pages/Home'
import Project from '../components/pages/Project'
import Article from '../components/pages/Article'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
      	default: Home,
      	header: Header
      }
    },
    {
      path: '/projeto/:seoname',
      name: 'Project',
      components: {
        default: Project,
        header: Header
      }
    },
    {
      path: '/artigo/:seoname',
      name: 'Article',
      components: {
        default: Article,
        header: Header
      }
    }
  ]
});

router.beforeEach((to, from, next) => {

  if(from.name == 'Home') {
    const payload = window.pageYOffset || document.documentElement.scrollTop;
    store.commit('SCROLL_POSITION', payload);
  }
  
  window.scrollTo(0, 0);
  next();
});

export default router;