<template>
    <div id="container">
      <section class="project-info">
        <div class="section-header">
          <el-select v-model="value5" multiple placeholder="选择关联项目" class="select">
            <el-option
              v-for="item in relevance"
              :key="item.value"
              :label="item.label"
              :value="item.value" class="select-options">
            </el-option>
          </el-select>
          <el-select v-model="value6" multiple placeholder="项目进度" class="select">
            <el-option
              v-for="item in schedule"
              :key="item.value"
              :label="item.label"
              :value="item.value" class="select-options">
            </el-option>
          </el-select>
          <el-select v-model="value7" multiple placeholder="商务进度" class="select">
            <el-option
              v-for="item in business"
              :key="item.value"
              :label="item.label"
              :value="item.value" class="select-options">
            </el-option>
          </el-select>
        </div>
        <div class="section-content">
          <textarea name="project-progress-textarea" id="project-progress-textarea" placeholder="请输入项目进展..."></textarea>
          <button class="btn confirm-btn">发送</button>
        </div>
      </section>
      <div>
        <DateComponents></DateComponents>
        <comments></comments>
        <!--<comments></comments>-->
        <Pagination></Pagination>
      </div>
      <!--文档练习-->
      <!--<p>{{ this.$store.getters.getDate.year }}</p>-->
      <!--视频练习1-->
      <!--<p>{{ $store.state.count }} - {{ count }} - {{ counttwo }}</p>-->
    </div>
</template>
<script>
import Comments from './comments.vue'
import DateComponents from './dateComponent.vue'
import Pagination from './Pagination.vue'
import {mapState} from 'vuex'
import store from '../.././store/vuex.js'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: 'mahao',
      relevance: [{
        value: '浙江机动车',
        label: '浙江机动车'
      }, {
        value: '北京燃气',
        label: '北京燃气'
      }, {
        value: '江苏农业',
        label: '江苏农业'
      }, {
        value: '楚邦雷电',
        label: '楚邦雷电'
      }, {
        value: '智慧泵阀',
        label: '智慧泵阀'
      }],
      value5: [],
      schedule: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value6: [],
      business: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value7: []
    }
  },
  components: {
    Comments,
    DateComponents,
    Pagination
  },
  computed: mapState(['count','counttwo']),
  store,
}
</script>
<style>
  /*主体内容样式*/
  #container {
    width: 1000px;
    min-height: 675px;
    margin: 0 auto;
    background: #f5f5f6;
    margin-top: 30px;
  }
  .project-info {
    height: 270px;
    /*border: 1px solid red;*/
    /*border: 1px solid #e3e3e3;*/
    /*border-bottom: none;*/
    border-radius: 3px;
  }
  .section-header {
    min-height: 57px;
    line-height: 57px;
    background: #eaeaeb;
    border: 1px solid #e3e3e3;
    border-bottom: none;
    border-radius: 3px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  /*选项框样式*/
  .select {
    width: 160px;
    height: 35px;
    line-height: 35px;
    /*padding-left: 10px;*/
    margin-left: 10px;
    font-size: 12px;
    color: #666666;
    /*vertical-align: middle;*/
    /*appearance: none;*/
    /*background: url("../../assets/drop_down_icon.png") no-repeat 128px center;*/
    /*background-color: white;*/
    /*border: 1px solid #e3e3e3;*/
    /*border-radius: 3px;*/

    /*cursor: pointer;*/
  }
  select:focus {
    outline: none;
  }
  .select-options {
    width: 150px;
    background: white;
  }
  .select-options:hover {
    background: #def5bd;
  }
  .section-content {
    width: 1000px;
    height: 212px;
    /*background-color: red;*/
    font-size: 0px;
  }
  /*项目进入输入框样式*/
  #project-progress-textarea {
    width: 986px;
    height: 140px;
    padding-left: 12px;
    padding-top: 13px;
    border: 1px solid #e3e3e3;
    border-top: none;
    border-radius: 3px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    resize: none;
    font-size: 14px;
    color: #aaaaaa;
  }
  /*按钮样式*/
  .btn {
    width: 90px;
    height: 38px;
    line-height: 38px;
    color: #fff;
    font-size: 14px;
    border: none;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    margin-top: 20px;
    margin-right: 15px;
    cursor: pointer;
  }
  .confirm-btn {
    background-color: #6fbc00;
  }
  .cancel-btn {
    background-color: #bbbbbb;
  }
  .btn:focus {
    outline: none;
  }
  /*日期*/
  .data-container {
    height: 100px;
    /*background: white;*/
  }
  .gap {
    position: relative;
    width: 275px;
    height: 100px;
    margin: 0 auto;
  }
</style>
