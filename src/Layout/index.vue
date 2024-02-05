<template>
  <div class="Nan-container">
    <el-container>
      <!-- 80 -->
      <el-aside width="200px">
        <div class="el-aside-div_header">
          <img class="div-img_logo" src="../assets/logo.png" alt="">
          <div class="div-div_title">智慧校园</div>
        </div>
        <LayoutMenu></LayoutMenu>
        <div class="el-aside-div_footer">
          <i class="el-icon-s-fold"></i>
        </div>
      </el-aside>
      <el-container class="right_main">
        <el-header style="height: 65px;">
          <LayoutHeader />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LayoutHeader from './Header'
import LayoutMenu from './Menu'
export default {
  name: 'NanLayout',
  data () {
    return {
    }
  },
  components: {
    LayoutHeader,
    LayoutMenu
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100%;
  .el-aside {
    overflow: hidden;
    position: relative;
    padding: 10px;
    box-shadow: 1px 5px 10px #f2f2f2;
    border-right: 1px solid #fff;
    .el-aside-div_header {
      display: flex;
      align-items: center;
      .div-img_logo {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      .div-div_title {
        font: {
          size: 20px;
          weight: 900;
        }
      }
    }
    .el-aside-div_header {
      display: flex;
      align-items: center;
      .div-img_logo {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      .div-div_title {
        font: {
          size: 20px;
          weight: 900;
        }
      }
    }
    .el-aside-div_footer {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 30px;
      .el-icon-s-fold {
        font-size: 20px;
      }
    }
  }
 .right_main {
    width: auto;
    background-color: #F7F7F7;
    .el-header {
       background: linear-gradient(to right, #F7F7F7, #ffffff);
    }
    .el-main {
      overflow: auto;
    }
  }
}
</style>
