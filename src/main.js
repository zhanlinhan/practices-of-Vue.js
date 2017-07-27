// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'


Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
// 将store实例注入到根组件下的所有子组件中
// 子组件通过this.$store.state访问store
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },

})
