<template>
  <div class="DisciplinaryAppeal">
    <el-row :gutter="20">
      <el-col :span="3">

        <div class="left">
          <el-menu
            unique-opened
            default-active="1">
            <el-submenu index="1">
              <template #title>
                <span>处分申诉管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="handleChangeIndex_2">处分申诉</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template #title>
                <span>处分解除管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1" @click="handleChangeIndex_1">处分解除</el-menu-item>
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

import { Axios } from 'axios'

export default {
  name: 'NanDisciplinarySanctions',
  methods:{
    handleChangeIndex_2(){
      this.$router.push('/NanDisciplinarySanctions/requested')
    },
    handleChangeIndex_1(){
      this.$router.push('/NanDisciplinarySanctions/notApplying')
    },

  }

}
</script>

<style scoped lang="scss">
.NanDisciplinarySanctions {
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
