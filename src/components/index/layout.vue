<template>
  <div id="components_container">
    <header-components></header-components>
    <slot name="content-slot"></slot>
    <footer-components></footer-components>
  </div>
</template>

<script>
  import HeaderComponents from './header.vue'
  import FooterComponents from './footer.vue'
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        name: 'mahao'
      }
    },
    components: {
      HeaderComponents,
      FooterComponents
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#components_container {
  background: #f5f5f6;
}
</style>

