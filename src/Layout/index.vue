<template>
  <div class="Nan-container">
    <el-container>
      <el-aside :width="$store.state.setting.asideWidth">
        <div class="el-aside-div_header">
          <img class="div-img_logo" src="../assets/logo.png" alt="">
          <div v-if="!$store.state.setting.isCollapse" class="div-div_title">智慧校园</div>
        </div>
        <LayoutMenu></LayoutMenu>
        <div class="el-aside-div_footer">
          <NanSwitch v-model="isNight" active-color="#2F2F2F" inactive-color="#ddd" openText="🌙" closeText="☀️"
        size="small"></NanSwitch>
          <i @click="i_CHANGEFLOD" :class="'el-icon-s-' + $store.state.setting.isFold"></i>
        </div>
      </el-aside>
      <el-container class="right_main">
        <el-header style="height: 65px;">
          <LayoutHeader />
        </el-header>
        <el-main>
          <LayoutBread></LayoutBread>
          <transition name="fade-right" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LayoutHeader from './Header'
import LayoutBread from './Bread'
import LayoutMenu from './Menu'
import NanSwitch from '@/components/NanSwitch'
export default {
  name: 'NanLayout',
  data () {
    return {
      isNight: true
    }
  },
  components: {
    LayoutHeader,
    LayoutMenu,
    NanSwitch,
    LayoutBread
  },
  methods: {
    i_CHANGEFLOD () {
      this.$store.commit('setting/theSidebarCollapses')
    }
  }
}
</script>

<style lang="scss" scoped>
// 进入后和离开前保持原位
.fade-right-enter-to,
.fade-right-leave-from{
  opacity: 1;
  transform: none;
}

// 设置进入和离开过程中的动画时长0.5s
.fade-right-enter-active,
.fade-right-leave-active
{
  transition: all 0.5s;
}

// 进入前和离开后为透明，并在右侧20px位置
.fade-right-enter-from,
.fade-right-leave-to{
  opacity: 0;
  transform: translateX(20px);
}
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
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 30px;
      .el-icon-s-fold {
        font-size: 60px;
      }
      .el-icon-s-unfold {
        font-size: 60px;
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
