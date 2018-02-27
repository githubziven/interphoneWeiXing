// eslint-disable-next-line semi
/* eslint-disable semi,comma-dangle */
import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('@/views/HelloWorld')
const Query = () => import('@/views/query')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/query',
      name: 'Query',
      component: Query
    }
  ]
})
