<template>
  <div>
    <!--    个人信息-->
    <div class="headName" >
      <span class="name">姓名：管理员</span>
      <span class="stuId">职工号：2202020</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminButton',
  data() {
    return{
    }
  },

}
</script>

<style lang="scss" scoped>
// 头部样式
.headName{
  margin-top: 20px;
  margin-bottom: 10px;
  //控制姓名位置
  .name{
    margin-left: 80px;
    margin-right: 50px;
  }

}

</style>
