<template>
  <div class="pagination-container">
    <div class="pagination">
      <a href="javascript:void(0);" class="pagination-btn next-pagination-btn" @click="nextPage">下一页</a>
      <!--<a href="javascript:void(0);" class="pagination-btn num-pagination-btn current-pagination-btn" index="0">1</a>-->
      <a href="javascript:void(0);" class="pagination-btn num-pagination-btn"
         v-for="item in pageCount"
         :index="item-1"
         :class="{'current-pagination-btn':!(item-1)}"
         @click="change(item)">{{ item }}</a>
      <a href="javascript:void(0);" class="pagination-btn last-pagination-btn not-allowed" @click="lastPage">上一页</a>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      pageCount: function(){
        return this.$store.getters.getPagination.totalPage
      }
    },
    methods: {
      change (page) {
        this.$store.commit('changePage', page)
        console.log(this.$store.state.page.pageNum)
      },
      nextPage () {
        this.$store.commit('changePage', parseInt(document.getElementsByClassName('current-pagination-btn')[0].getAttribute('index')) + 2)
        console.log(this.$store.state.page.pageNum)
      },
      lastPage () {
        this.$store.commit('changePage', parseInt(document.getElementsByClassName('current-pagination-btn')[0].getAttribute('index')))
        console.log(this.$store.state.page.pageNum)
      }
    }
  }
  window.addEventListener('load', function () {
    var paginationBtn = document.getElementsByClassName('pagination-btn')
    var numPagination = document.getElementsByClassName('num-pagination-btn')
    var currentPagination = document.getElementsByClassName('current-pagination-btn')
    var nextPagination = document.getElementsByClassName('next-pagination-btn')
    var lastPagination = document.getElementsByClassName('last-pagination-btn')
    var currentIndex = 0
    var numPaginationLength = numPagination.length
    var paginationLenth = paginationBtn.length
//      点击指定页变换class
    for (let i = 0; i < numPaginationLength; i++) {
      numPagination[i].addEventListener('click', function () {
//        清除其余页class
        for (let j = 0; j < numPaginationLength; j++) {
          numPagination[j].setAttribute('class', 'pagination-btn num-pagination-btn')
        }
//        绑定被选中页的class
        numPagination[i].setAttribute('class', 'pagination-btn num-pagination-btn current-pagination-btn')
      })
    }
    function mouseoverJudge () {
//        判断当前页是否为最后一页，若为最后一页，禁用下一页，启用上一页
      if (parseInt(currentPagination[0].getAttribute('index')) == (numPaginationLength - 1)) {
        nextPagination[0].setAttribute('class', 'pagination-btn next-pagination-btn not-allowed')
        lastPagination[0].setAttribute('class', 'pagination-btn last-pagination-btn')
        lastPagination[0].addEventListener('click', last)
        nextPagination[0].removeEventListener('click', next)
      }else if (parseInt(currentPagination[0].getAttribute('index')) == 0) {
//        若为第一页，禁用上一页，启用下一页
        nextPagination[0].setAttribute('class', 'pagination-btn next-pagination-btn')
        lastPagination[0].setAttribute('class', 'pagination-btn last-pagination-btn not-allowed')
        lastPagination[0].removeEventListener('click', last)
        nextPagination[0].addEventListener('click', next)
      }else {
        nextPagination[0].setAttribute('class', 'pagination-btn next-pagination-btn')
        lastPagination[0].setAttribute('class', 'pagination-btn last-pagination-btn')
        lastPagination[0].addEventListener('click', last)
        nextPagination[0].addEventListener('click', next)
      }
    }
//    绑定鼠标悬浮事件
      nextPagination[0].addEventListener('mouseover', mouseoverJudge)
      lastPagination[0].addEventListener('mouseover', mouseoverJudge)
//    点击下一页事件函数
    function next () {
      currentIndex = parseInt(currentPagination[0].getAttribute('index'))
//      判断是否为最后一页
      if (currentIndex >= 0) {
        let index = currentIndex + 1
        if (index >= numPaginationLength) {
          nextPagination[0].setAttribute('class', 'pagination-btn next-pagination-btn not-allowed')
          nextPagination[0].removeEventListener('click', next)
        }else {
          currentPagination[0].setAttribute('class', 'pagination-btn num-pagination-btn')
          numPagination[index].setAttribute('class', 'pagination-btn num-pagination-btn current-pagination-btn')
          lastPagination[0].addEventListener('click', last)
        }
      }
    }
    function last () {
      currentIndex = parseInt(currentPagination[0].getAttribute('index'))
//      判断是否为第一页
      if (currentIndex <= numPaginationLength) {
        let index = currentIndex - 1
        if (index < 0) {
          lastPagination[0].setAttribute('class', 'pagination-btn last-pagination-btn not-allowed')
          lastPagination[0].removeEventListener('click', last)
        }
        else {
          currentPagination[0].setAttribute('class', 'pagination-btn num-pagination-btn')
          numPagination[index].setAttribute('class', 'pagination-btn num-pagination-btn current-pagination-btn')
          nextPagination[0].addEventListener('click', next)
        }
      }
    }
    nextPagination[0].addEventListener('click', next)
    lastPagination[0].addEventListener('click', last)
  })
</script>
<style>
 .pagination-container {
   height: 40px;
   margin-top: 80px;
   /*background: red;*/
   font-size: 0px;
   text-align: center;
 }
 .pagination {
   display: inline-block;
   width: auto;
   /*background: yellow;*/
 }
  .pagination-btn {
    display: inline-block;
    width: 38px;
    height: 38px;
    line-height: 40px;
    text-decoration: none;
    text-align: center;
    color: #666666;
    font-size: 14px;
    background: white;
    border: 1px solid #dadcdd;
    border-radius: 3px;
    margin-right: 10px;
  }
  .next-pagination-btn, .last-pagination-btn {
    width: 85px;
  }
 .next-pagination-btn {
   margin-right: 10px;
 }
 .last-pagination-btn {
   margin-right: 0px;
 }
  .current-pagination-btn, .pagination-btn:hover {
    background: #6fbc00;
    border: 1px solid #6fbc00;
    color: white;
  }
  .not-allowed, .not-allowed:hover {
    background: white;
    border: 1px solid #dadcdd;
    color: #666666;
    cursor: not-allowed;
  }
</style>
