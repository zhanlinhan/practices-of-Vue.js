<template>
  <div>
    <div  v-for="(item,index) in this.$store.getters.getPagination.pageSize" v-if="user[index]">
      <div class="data-container">
        <div class="gap">
          <i class="cutting-line cutting-line-left"></i>
          <span class="year">{{ year[index] }}</span>
          <div class="month-day-box">
            <span class="month">{{ month[index] }}</span>/<span class="day">{{ day[index] }}</span>
          </div>
          <img src="../../assets/date_box.png" alt="" class="date-box">
          <i class="cutting-line cutting-line-right"></i>
        </div>
      </div>
      <section slot="comments" class="comments-container">
        <!--评论头部-->
        <div class="section-header">
          <span class="header-info header-info-username">{{ user[index] }}</span>
          <span class="header-info header-info-title">{{ projectName[index] }}</span>
          <div class="progress-container">
            <span class="header-info progress-title">进度：</span>
            <span class="header-info progress-content">{{ projectProgress[index] }}</span>
          </div>
        </div>
        <!--评论主体内容-->
        <div class="comments-section-content">
          <span class="comments-content-txt">{{ projectDescribe[index] }}</span>
        </div>
        <div class="comments-section-footer">
          <span class="comments-time">{{ projectReleaseTime[index] }}</span>
          <a href="javascript:void(0);" class="reply-link main-reply-link">回复</a>
        </div>
        <!--回复内容-->
        <div class="reply-container" style="display: none">
          <!--回复列表-->
          <ul class="reply-list-ul">
            <li class="reply-list-li">
              <div class="reply-list-txt-box">
                <div class="reply-list-txt-content">
                  <span class="reply-list-txt-sponsor">艾华回复：</span>
                  <span class="reply-list-txt">@曹凌宇，订金比例不少于30%，太少无法接受</span>
                </div>
                <div class="reply-list-txt-footer">
                  <span class="reply-time">17:30</span>
                  <a href="javascript:void(0);" class="reply-link child-reply-link">回复</a>
                </div>
              </div>
              <!--回复框三角形-->
              <i class="triangle"></i>
            </li>
            <li class="reply-list-li">
              <div class="reply-list-txt-box">
                <div class="reply-list-txt-content">
                  <span class="reply-list-txt-sponsor">艾华回复：</span>
                  <span class="reply-list-txt">@曹凌宇，订金比例不少于30%，太少无法接受</span>
                </div>
                <div class="reply-list-txt-footer">
                  <span class="reply-time">17:30</span>
                  <a href="javascript:void(0);" class="reply-link child-reply-link">回复</a>
                </div>
              </div>
              <!--回复框三角形-->
              <i class="triangle"></i>
            </li>
          </ul>
          <!--回复输入框-->
          <div class="reply-textarea-container" style="display: none">
            <textarea name="reply-textarea" id="reply-textarea"></textarea>
            <!--按钮-->
            <div class="btn-container">
              <button class="btn confirm-btn">确认</button>
              <button class="btn cancel-btn">取消</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  window.addEventListener('load', function () {
    var replyContainer = document.getElementsByClassName('reply-container')
    var mainReplyLink = document.getElementsByClassName('main-reply-link')
    var childReplyLink = document.getElementsByClassName('child-reply-link')
    var childReplyTextarea = document.getElementsByClassName('reply-textarea-container')
    var replyCancleBtn = document.getElementsByClassName('cancel-btn')
    var mainReplyLinkLength = mainReplyLink.length
    var childReplyLinkLength = childReplyLink.length
    var replyCancleBtnLength = replyCancleBtn.length
    function showComments(tag) {
      if (tag.style.display == 'none') {
        tag.style.display = 'block'
      }else {
        tag.style.display = 'none'
      }
    }
    function showReplyTextarea (tag) {
      tag.style.display = 'block'
    }
    function hideReplyTextarea (tag) {
      tag.style.display = 'none'
    }
//点击回复，加载回复框事件
    for (let i = 0; i < mainReplyLinkLength; i++) {
      mainReplyLink[i].addEventListener('click', function () {
//        显示前初始化，让所有的评论框消失
        for (let s = 0; s < mainReplyLinkLength; s++) {
          replyContainer[s].style.display = 'none'
        }
//        显示当前评论框
        showComments(replyContainer[i])
//        mainReplyLink[i].parentNode.parentNode.lastChild.setAttribute('index', i)
        //点击子回复链接，加载回复输入框
        for (let j = 0; j < childReplyLinkLength; j++) {
          childReplyLink[j].addEventListener('click', function () {
            showReplyTextarea(childReplyTextarea[i])
//            点击取消，隐藏回复输入框
            for (let n = 0; n < replyCancleBtnLength; n++) {
              replyCancleBtn[n].addEventListener('click', function () {
                hideReplyTextarea(childReplyTextarea[i])
              })
            }
          })
        }
      })
    }
  })

  export default {
    computed: {
      year: function () {
        return this.$store.getters.getYear
      },
      month: function () {
        return this.$store.getters.getMonth
      },
      day: function () {
        return this.$store.getters.getDay
      },
      projects: function () {
        return this.$store.getters.getProjects
      },
      user: function () {
        return this.$store.getters.getUser
      },
      projectName: function () {
        return this.$store.getters.getProjectName
      },
      projectProgress: function () {
        return this.$store.getters.getProjectProgress
      },
      projectDescribe: function () {
        return this.$store.getters.getProjectDescribe
      },
      projectReleaseTime: function () {
        return this.$store.getters.getProjectReleaseTime
      },
      pageNum: function () {
       return (this.$store.getters.getPagination.pageNum - 1)
      },
      lastContentIndex: function () {
        return (this.$store.getters.getPagination.pageNum*this.$store.getters.getPagination.pageSize - 1)
      },
      firstContentIndex: function () {
        return ((this.$store.getters.getPagination.pageNum - 1)*this.$store.getters.getPagination.pageSize)
      }
    }
  }

</script>
<style>
  .comments-container {
    width: 1000px;
    min-height: 230px;
    padding-bottom: 20px;
    margin-bottom: 30px;
    background: white;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  /*评论顶部样式*/
  .header-info {
    font-size: 16px;
    margin-left: 18px;
  }
  .header-info-username {
    color: #333333;
  }
  .header-info-title {
    color: #65b200;
  }
  /*进度*/
  .progress-container {
    float: right;
    margin-right: 20px;
  }
  .progress-title {
    color: #999999;
  }
  .progress-content {
    color: #666666;
  }
  .progress-container span {
    margin: 0;
  }
  /*评论主体内容*/
  .comments-section-content {
    width: 960px;
    min-height: 110px;
    padding-top: 20px;
    padding-right: 20px;
    word-break: break-all;
    border-bottom: 1px solid #eaeaeb;
    /*background: red;*/
  }
  .comments-section-content, .comments-section-footer {
    padding-left: 20px;
  }
  .comments-section-footer {
    height: 41px;
    margin-top: 18px;
    font-size: 14px;
    /*line-height: 41px*/
    /*9751638*/
  }
  .reply-link {
    height: 41px;
    float: right;
    margin-right: 20px;
    text-decoration: none;
    color: #65b200;
  }
  /*回复*/
  .reply-container {
    position: relative;
    min-height: 120px;
    width: 920px;
    margin: 0 auto;
    padding: 0px 20px;
    background: #f5f5f6;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  /*回复列表样式*/
  .reply-list-ul {
    display: inline-block;
    width: 920px;
    min-height: 90px;
    /*background: yellow;*/
    list-style-type: none;
    font-size: 14px;
  }
  .reply-list-li {
    min-height: 70px;
    margin: 23px 0px;
    /*background: yellow;*/
    border-bottom: 1px solid #e3e3e3;
  }
  /*回复主体内容样式*/
  .reply-list-txt-content {
    width: 920px;
    /*background: white;*/
    word-break: break-all;
  }
  .reply-list-txt-sponsor {
    color: #666666;
  }
  .reply-list-txt {
    color: #333333;
  }
  /*回复底部样式*/
  .reply-list-txt-footer {
    height: 20px;
    line-height: 20px;
    margin: 12px 0px 18px 0px;
    /*background: red;*/
  }
  .reply-list-txt-footer .reply-link {
    margin-right: 0px;
  }
  /*回复框三角形*/
  .triangle {
    position: absolute;
    right: 15px;
    top: -10px;
    width: 0px;
    height: 0px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 10px solid #f5f5f6;
  }
  /*回复输入框*/
  .reply-textarea-container {
    width: 920px;
    padding-bottom: 35px;
    /*height:166px;*/
    /*background: white;*/
  }
  #reply-textarea {
    width: 886px;
    height: 78px;
    border: 1px solid #e3e3e3;
    padding: 16px;
    font-size: 14px;
    color: #aaaaaa;
    word-break: break-all;
    resize: none;
  }
</style>
