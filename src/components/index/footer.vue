<template>
  <footer>
    <div class="footer_icon_container">
      <i class="dash"></i>
      <i class="footer_logo"></i>
      <i class="dash"></i>
    </div>
    <div class="copyright">
      <span>中移物联网有限公司  版权所有  Copyright&copy; 2014 www.heclouds.com 渝ICP备13005647号-6</span>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: 'mahao'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   /*底部样式*/
    footer {
      height: 130px;
      width: 100%;
      padding-top: 70px;
      margin-top: 90px;
      background: #2d2e32;
      color: #515254;
    }
    .footer_icon_container {
      width: 1184px;
      height: 35px;
      margin: 0px auto;
    }
    .footer_icon_container i {
      vertical-align: middle;
    }
    .dash {
      display: inline-block;
      height: 1px;
      width: 500px;
      /*padding-top: 18px;*/
      background: url(../../assets/dashed.png);
    }
    .footer_logo {
      display: inline-block;
      width: 114px;
      height: 35px;
      margin: 0px 30px;
      background: url(../../assets/footer_logo.png);
    }
    .copyright {
      width: 1184px;
      height: 35px;
      margin: 0 auto;
      margin-top: 16px;
      text-align: center;
    }
</style>
