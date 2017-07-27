<template>
  <div>

  </div>
</template>
<script>
  import store from '../.././store/vuex.js'
  export default {
    store,
  }
</script>
<style>
  /*分割线样式*/
  .cutting-line {
    background: #d6d6d6;
    width: 80px;
    height: 1px;
  }
  .cutting-line-left {
    position: absolute;
    top: 35px;
    left: 0px;
  }
  .cutting-line-right {
    position: absolute;
    top: 35px;
    right: 0px;
  }
  .date-box {
    position: absolute;
    top: 0px;
    left: 100px;
  }
  .year {
    position: absolute;
    top: 9px;
    left: 100px;
    width: 74px;
    font-size: 12px;
    color: #888888;
    text-align: center;
    z-index: 99;
  }
  .month-day-box {
    position: absolute;
    top: 40px;
    left: 100px;
    width: 74px;
    font-size: 16px;
    color: #666666;
    text-align: center;
    z-index: 99;
  }
</style>
