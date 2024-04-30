<template>
  <div class="NanEverydayMatters">
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="left">
          <el-menu
            unique-opened
            default-active="1">
            <el-submenu index="1">
              <template #title>
                <span>日常行为</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="handleChangeIndex_1">日常行为信息</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template #title>
                <span>请假管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1" @click="handleChangeIndex_2">请假申请</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template #title>
                <span>假期留校</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1" @click="handleChangeIndex_3">假期留校申请</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template #title>
                <span>场地管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1" @click="handleChangeIndex_4">场地使用申请</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template #title>
                <span>团日活动</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1" @click="handleChangeIndex_5">活动申请</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>

      <el-col :span="15">
        <div class="right">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import stuButton from '@/components/Stu-Button/index.vue'
// import Footer from '@/components/Footer/index.vue'
export default {
  name: 'NanEverydayMatters',
  components: {
    // stuButton,Footer
  },
  methods:{
    handleChangeIndex_1(){
      this.$router.push('/NanEverydayMatters/behavior')
    },
    handleChangeIndex_2(){
      this.$router.push('/NanEverydayMatters/management')
    },
    handleChangeIndex_3(){
      this.$router.push('/NanEverydayMatters/stay')
    },
    handleChangeIndex_4(){
      this.$router.push('/NanEverydayMatters/site')
    },handleChangeIndex_5(){

      this.$router.push('/NanEverydayMatters/activity')
    }





  },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.NanEverydayMatters {
  padding: 30px;
}
.left {
  background-color: #ffffff;
  .el-menu {
    height: 600px;
    border-right: none;
  }
}
.right {
  background-color: #ffffff;
  height: 570px;
  padding: 15px;
}
</style>
