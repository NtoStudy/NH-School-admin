<template>
  <div class="NanPersonalInformation">
    <el-row :gutter="20">
      <el-col class="left" style="padding-left: 0" :span="4">
        <div class="left_menu"></div>
      </el-col>
      <el-col class="right" style="padding-right: 0" :span="20">
        <div class="right_scrollView"></div>
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
      background-color: #fff;
    }
  }
}
</style>
