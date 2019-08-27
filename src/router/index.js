import Vue from 'vue'
import Router from 'vue-router'
import Rank from  '../components/rank/index'
import Singer from  '../components/singer/index'
import Search from  '../components/search/index'
import Recommend from  '../components/recommend/index'
import VueRouter from 'vue-router';

Vue.use(Router)
export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/singer',
      component:Singer
    }
  ]
})


