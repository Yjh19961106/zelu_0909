import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: "coser泽鹿个人站点"
      },
      component: () => import("../pages/index.vue")
    },
    {
      path: '/recommend',
      name: 'recommend',
      meta: {
        title: "coser泽鹿真心推荐"
      },
      component: () => import("../pages/recommend.vue")
    },
    {
      path: '/shop',
      name: 'shop',
      meta: {
        title: "coser泽鹿的剧本店"
      },
      component: () => import("../pages/shop.vue")
    },
    {
      path: '/poster',
      name: 'poster',
      meta: {
        title: "coser泽鹿行程安排"
      },
      component: () => import("../pages/poster.vue")
    },
    {
      path: '/details',
      name: 'details',
      meta: {
        title: "商品详情"
      },
      component: () => import("../pages/details.vue")
    },
    {
      path: '/a',
      name: 'topBar',
      meta: {
        title: "ceshi"
      },
      component: () => import("../components/topBar.vue")
    },
    {
      path: '/b',
      name: 'workCard',
      meta: {
        title: "ceshi2"
      },
      component: () => import("../components/workCard.vue")
    }
  ]
})
