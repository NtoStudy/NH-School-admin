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
        prop="stuId"
        label="学号"
        width="140">
      </el-table-column>

      <el-table-column
        prop="name"
        label="姓名"
        width="100">
      </el-table-column>

      <el-table-column
        prop="sexy"
        label="性别"
        width="140">
      </el-table-column>

      <el-table-column
        prop="nation"
        label="民族"
        width="120">
      </el-table-column>

      <el-table-column
        prop="class"
        label="班级"
        width="100">
      </el-table-column>

      <el-table-column
        prop="ApplicationTime"
        label="申请时间"
        width="100">
      </el-table-column>

      <el-table-column
        prop="BeginTime"
        label="留校开始时间"
        width="180">
      </el-table-column>


      <el-table-column
        prop="EndTime"
        label="留校截止时间"
        width="180">
      </el-table-column>

      <el-table-column
        prop="ReviewStatus"
        label="审核状态"
        width="180">
      </el-table-column>

      <Footer></Footer>
    </el-table>
  </div>
</template>

<script>
import StuButton from '@/components/Stu-Button/index.vue'
import Footer from '@/components/Footer/index.vue'

export default {
  name:'LeaveManagementIndex',
  components: { Footer,StuButton },
  data(){
    return {
      tableData:[{
        stuId:'',
        name:'',
        sexy:'',
        nation:'',
        class:'',
        ApplicationTime:'',
        BeginTime:'',
        EndTime:'',
        ReviewStatus:''
      }]
    }
  }
}
</script>

<style>

</style>
