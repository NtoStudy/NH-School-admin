<template>
  <div class="NanInfoProcessing">
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="left">
          <el-menu
            unique-opened
            default-active="1">
            <el-submenu index="1">
              <template #title>
                <span>宿舍信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="handleChangeIndex_1">宿舍信息管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template #title>
                <span>请假信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1" @click="handleChangeIndex_2">请假信息管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template #title>
                <span>留校信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1" @click="handleChangeIndex_3">留校信息管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template #title>
                <span>奖学金信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1" @click="handleChangeIndex_4">奖学金信息管理</el-menu-item>
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
      this.$router.push('/NanInfoProcess/DormitoryInfo')
    },
    handleChangeIndex_2(){
      this.$router.push('/NanInfoProcess/FinancialInfo')
    },
    handleChangeIndex_3(){
      this.$router.push('/NanInfoProcess/LeaveInfo')
    },
    handleChangeIndex_4(){
      this.$router.push('/NanInfoProcess/StayInfo')
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
