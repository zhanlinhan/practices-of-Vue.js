<template>
  <div id="header-footer">
    <header>
      <nav>
        <a href="#" class="logo-link"></a>
        <span class="logo-txt">项目跟踪管理</span>

        <ul>
          <li><a href="#" class="menu-li current-li">动态广场</a></li>
          <li><a href="#" class="menu-li">项目跟踪</a></li>
          <li><a href="#" class="menu-li">部门员工</a></li>
        </ul>

        <div class="search-container">
          <input type="text" class="search" placeholder="项目搜索">
          <img class="search-btn" src="../../assets/search.png" alt="搜索">
        </div>

        <div class="user-container">
          <a href="javascript:void(0);" class="user_icon"></a>
          <span class="user_name">邓俊</span>
          <i class="more_icon"></i>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
  window.addEventListener('load', function () {
    var menuLi = document.getElementsByClassName('menu-li')
    var menuLiLength = menuLi.length
    for (let i = 0; i < menuLiLength; i++) {
      menuLi[i].addEventListener('click', function () {
        for (let j = 0; j < menuLiLength; j++) {
          menuLi[j].setAttribute('class', 'menu-li')
        }
        menuLi[i].setAttribute('class', 'menu-li current-li')
      })
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
      padding: 0;
      margin: 0;
    }
    header {
      color: white;
      background: #6fbc00;
    }
    nav {
      height: 70px;
      line-height: 70px;
      width: 1000px;
      margin: 0px auto;
    }
    .logo-link {
      width: 46px;
      height: 30px;
      font-size: 0px;
      line-height: 0px;
      background: url(../../assets/p1_logo.png);
      display: inline-block;
      vertical-align: middle;
    }
    .logo-txt {
      font-size: 30px;
      vertical-align: middle;
    }
    header ul {
      display: inline-flex;
      width: 315px;
      margin: 0px 78px;
      justify-content: space-between;
      vertical-align: top;
      list-style-type: none;
    }
    header ul li {
      display: inline-block;
      position: relative;
    }
    header ul li a {
      display: inline-block;
      width: 64px;
      height: 70px;
      font-size: 16px;
      color: #c1eb8a;
      text-decoration: none;
    }
    /*当前选中菜单样式*/
    .current-li, .menu-li:hover {
      color: white;
    }
    .current-li:before, .menu-li:hover:before {
      content: '';
      width: 30px;
      height: 3px;
      position: absolute;
      top: 58px;
      left: 18px;
      background-color: white;
    }
    /*搜索框样式*/
    .search-container {
      display: inline-block;
      position: relative;
      margin-right: 25px;
    }
    .search {
      width: 168px;
      height: 30px;
      padding: 0px 10px;
      font-size: 12px;
      line-height: 30px;
      border: none;
      -webkit-border-radius: 30px;
      -moz-border-radius: 30px;
      -ms-border-radius: 30px;
      -o-border-radius: 30px;
      border-radius: 30px;
    }
    .search:focus {
      outline: none;
    }
    .search-btn {
      width: 24px;
      height: 24px;
      font-size: 0px;
      line-height: 0px;
      position: absolute;
      right: 5px;
      top: 25px;
      cursor: pointer;
    }
    .user-container {
      display: inline-block;
    }
    .user_icon {
      display: inline-block;
      width: 19px;
      height: 21px;
      margin-right: 8px;
      vertical-align: middle;
      background: url(../../assets/user.png);
    }
    .user_name {
      font-size: 14px;
    }
    .more_icon {
      display: inline-block;
      width: 6px;
      height: 6px;
      background: url(../../assets/more.png);
      cursor: pointer;
    }
</style>
