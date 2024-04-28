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
        prop="collage"
        label="学院"
        width="140">
      </el-table-column>

      <el-table-column
        prop="ApplyVenue"
        label="申请场地"
        width="120">
      </el-table-column>

      <el-table-column
        prop="class"
        label="申请使用时间段"
        width="140">
      </el-table-column>

      <el-table-column
        prop="ApplicationTimePeriod"
        label="申请时间"
        width="100">
      </el-table-column>

      <el-table-column
        prop="ReviewStatus"
        label="审核状态"
        width="100">
      </el-table-column>

      <Footer></Footer>
    </el-table>
  </div>
</template>

<script>
import Footer from '@/components/Footer/index.vue'
import StuButton from '@/components/Stu-Button/index.vue'
export default {
  name:'SiteManagement',
  components: { Footer,StuButton },
  data(){
    return {
      tableData:[{
        stuId:'',
        name:'',
        collage:'',
        ApplyVenue:'',
        ApplicationTimePeriod:'',
        ReviewStatus:''
      }]
    }
  },

}
</script>

<style>

</style>
