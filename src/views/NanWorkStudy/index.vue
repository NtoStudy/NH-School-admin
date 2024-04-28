<template>
  <div>
    <div class="NanWorkStudy">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="left">
            <el-menu
              unique-opened
              default-active="1">
              <el-submenu index="1">
                <template #title>
                  <span>岗位人员管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" @click="handleChangeIndex_2">学生岗位申请</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template #title>
                  <span>我的勤工助学</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-2" @click="handleChangeIndex_1">我的勤工岗位</el-menu-item>
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
  </div>
</template>

<script>
export default {
  name: 'NanWorkStudy',
  methods:{
    handleChangeIndex_2(){
      this.$router.push('/NanWorkStudy/requested')
    },
    handleChangeIndex_1(){
      this.$router.push('/NanWorkStudy/notApplying')
    }
  },

}
</script>

<style scoped lang="scss">
.NanWorkStudy {
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
