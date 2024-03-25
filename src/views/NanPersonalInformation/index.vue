<template>
  <div class="NanPersonalInformation">
    <el-row :gutter="20">
      <el-col class="left" style="padding-left: 0" :span="4">
        <div class="left_menu">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item scrollactive-item="section1" index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item scrollactive-item="section2" index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col class="right" style="padding-right: 0" :span="20">
        <div class="right_scrollView">
          <div id="section1">This is Section 1</div>
          <div id="section2">This is Section 2</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NanPersonalInformation',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  height: 80vh;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: #dce0eb 0 0 10px 0;
  .el-col {
    height: 100%;
  }
  .left {
    background-color: #dce0eb;
    .left_menu {
      height: 100%;
      background-color: #fff;
    }
  }
  .right {
    background-color: #dce0eb;
    .right_scrollView {
      height: 100%;
      overflow: auto;
      background-color: #fff;
      #section1 {
        height: 800px;
      }
    }
  }
}
</style>
