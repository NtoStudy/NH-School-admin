<template>
  <div class="footer">
    <div class="left">
      <span>第 0 / </span>
      <span class="red">0 </span>
      <span>页,</span>
      <span> 每 页 显 示 </span>
      <select>
        <option value="语文">10</option>
        <option value="数学">20</option>
        <option value="英语">50</option>
        <option value="物理">100</option>
      </select>
      <span>条 / 共</span>
      <span class="red"> 0 </span>
      <span>条 记 录</span>
    </div>
    <div class="right">
      <el-button-group>
        <el-button type="success" plain  icon="el-icon-arrow-left" size="mini">上一页</el-button>
        <el-button type="success" plain  size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>

    </div>

  </div>
</template>

<script>
export default {
  name:"FooterIndex",

}
</script>

<style lang="scss" scoped>
.footer{
  display: flex;
  background-color: #f5f5f7;
  height: 50px;
  line-height: 50px;
}
.left{
  margin-left: 20px;
}
.red {
  color: red;
}
.right{
  margin-top: 10px;
  margin-left: 220px;
  display: flex;

}

</style>
