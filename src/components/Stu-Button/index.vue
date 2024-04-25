<template>
  <div>
    <!--  上方按钮  -->
    <el-button type="primary" icon="el-icon-plus">申请</el-button>
    <el-button type="primary" icon="el-icon-edit">修改</el-button>
    <el-button type="primary" icon="el-icon-delete">删除</el-button>
    <el-button type="primary" icon="el-icon-s-promotion">提交</el-button>
    <el-button type="primary" icon="el-icon-s-release">撤销</el-button>
    <!--    个人信息-->
    <div class="headName" >
      <span class="name">姓名：一小池勺</span>
      <span class="stuId">学号：2202020</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StuButton',


  data() {
    return {
      tableData: [{
        StudentID: '20202020',
        name: '王小虎',
        college: '一加一学院',
        class:'20202020',
        schoolYear:'2020',
        semester:'4',
        DisciplinaryCategories:'无',
        DisciplinaryReason:'无',
        appeal:'123456',
        Auditing:'审核中',
        AuditingResult:'无'

      }]
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
