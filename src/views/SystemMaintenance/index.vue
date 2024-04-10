<script>
export default {
  name: 'SystemMaintenance',
  data() {
    return {}
  }
}
</script>

<template>
  <div class="SystemMaintenance">
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="left">
          <el-menu
            unique-opened
            default-active="1">
            <el-submenu index="1">
              <template #title>
                <i class="el-icon-view"></i>
                <span>密码管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">密码修改</el-menu-item>
                <el-menu-item index="1-2">设置密保</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template #title>
                <i class="el-icon-chat-square"></i>
                <span>系统信箱</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">我的信箱</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="right">
          111
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.SystemMaintenance {
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
