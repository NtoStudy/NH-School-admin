<template>
  <div>
    <div class="NanStudentFinancialAid">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="left">
            <el-menu
              unique-opened
              default-active="1">
              <el-submenu index="1">
                <template #title>
                  <span>家庭情况</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">填写调查表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template #title>
                  <span>困难生申请</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-2">困难生申请</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template #title>
                  <span>资助管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">学生资助申请</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template #title>
                  <span>学费减免政策</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">学费减免申请</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="15">
          <div class="right">
            暂无内容
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>


export default {
  name: 'NanStudentFinancialAid',
  data() {
    return {}
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
