<script>
export default {
  name: 'SystemMaintenance',
  methods: {
    handleChangeIndex_1(){
      console.log(1)
      this.$router.push({
        path: '/SystemMaintenance/Password'
      })
    },
    handleChangeIndex_2(){
      console.log(2)
      this.$router.push({
        path: '/SystemMaintenance/com'
      })
    }
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
                <el-menu-item index="1-1" @click="handleChangeIndex_1">密码修改</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template #title>
                <i class="el-icon-chat-square"></i>
                <span>我要投诉</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1" @click="handleChangeIndex_2">我的投诉</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="right">
         <router-view>

         </router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.red{
  color: red;
}
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
