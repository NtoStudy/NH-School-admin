<template>
  <el-card shadow="hover">
    <el-container>
      <el-header style="height: 40px;">
        <slot name="header"></slot>
      </el-header>
      <el-main>
        <slot name="main"></slot>
      </el-main>
    </el-container>
  </el-card>
</template>

<script>
export default {
  name: 'card-container',
  data () {
    return {
      data: '0'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  width: 100%;
  height: 100%;
  ::v-deep .el-card__body {
    padding: 5px;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid #c5bfbf;
  }
  .el-main {
    padding: 5px;
  }
}
</style>
