<template>
<div id="components_container">
  <LayoutComponents>
    <div slot="content-slot">
      <page-content></page-content>
    </div>
  </LayoutComponents>
</div>
</template>

<script>
import LayoutComponents from './layout.vue'
import PageContent from './content.vue'
import store from '../.././store/vuex.js'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: 'mahao'
    }
  },
  components: {
    LayoutComponents,
    PageContent,
    store,
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

