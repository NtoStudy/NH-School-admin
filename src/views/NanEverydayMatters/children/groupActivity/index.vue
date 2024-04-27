<template>
  <div>

    <el-button type="primary" size="small" icon="el-icon-plus" >申请</el-button>
    <el-button type="primary" size="small" icon="el-icon-edit" >修改</el-button>
    <el-button type="primary" size="small" icon="el-icon-delete" >删除</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-promotion" >提交</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-release" >撤销</el-button>
    <el-button type="primary" size="small" icon="el-icon-magic-stick" >流程跟踪</el-button>
    <stuButton></stuButton>
    <el-table
      :row-style="{ height: '40px' }"
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="schoolYear"
        label="学年"
        width="140">
      </el-table-column>

      <el-table-column
        prop="semester"
        label="学期"
        width="100">
      </el-table-column>

      <el-table-column
        prop="stuId"
        label="学号"
        width="140">
      </el-table-column>

      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>

      <el-table-column
        prop="LeaveType"
        label="请假类型"
        width="100">
      </el-table-column>

      <el-table-column
        prop="LeaveDay"
        label="请假天数"
        width="100">
      </el-table-column>

      <el-table-column
        prop="ApplicationTime"
        label="申请时间"
        width="180">
      </el-table-column>


      <el-table-column
        prop="ReviewStatus"
        label="审核状态">
      </el-table-column>

      <el-table-column
        prop="CancellationStatus"
        label="销假状态">
      </el-table-column>

      <Footer></Footer>
    </el-table>


  </div>
</template>

<script>
import StuButton from '@/components/Stu-Button/index.vue'
import Footer from '@/components/Footer/index.vue'

export default {
name:'GroupActivityIndex',
  components: { Footer,StuButton },
  data(){
    return {
      tableData:[{
        schoolYear:'',
        semester:'',
        stuId:'',
        name:'',
        LeaveType:'',
        LeaveDay:'',
        ApplicationTime:'',
        ReviewStatus:'',
        CancellationStatus:'',
      }]
    }
  }
}
</script>

<style>

</style>
