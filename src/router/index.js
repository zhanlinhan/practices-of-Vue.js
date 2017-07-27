import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
// import Hello from '@/components/Hello'
import Index from '@/components/index/index'
import Footer from '@/components/index/footer'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    }
  ]
})
