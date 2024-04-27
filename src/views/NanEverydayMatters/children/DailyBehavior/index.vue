<template>
  <div>
    <el-button type="primary" size="small" icon="el-icon-plus" >增加</el-button>
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
        prop="StudentID"
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
        prop="class"
        label="班级"
        width="120">
      </el-table-column>

      <el-table-column
        prop="BehavioralCategories"
        label="行为大类"
        width="100">
      </el-table-column>

      <el-table-column
        prop="BehaviorType"
        label="行为类别"
        width="100">
      </el-table-column>

      <el-table-column
        prop="OccurrenceTime"
        label="发生时间"
        width="180">
      </el-table-column>

      <el-table-column
        prop="ApplicationEvaluation"
        label="申请评估分值"
        width="180">
      </el-table-column>


      <el-table-column
        prop="ReviewStatus"
        label="审核状态">
      </el-table-column>


    <Footer></Footer>
    </el-table>

  </div>

</template>

<script>
import StuButton from '@/components/Stu-Button/index.vue'
import Footer from '@/components/Footer/index.vue'

export default {
  components: { StuButton,Footer },
  name:'DailyBehaviorIndex',
  data() {
    return {
      tableData:[
        {
          StudentID:'',
          name:'',
          sexy:'',
          class:'',
          BehavioralCategories:'',
          BehaviorType:'',
          OccurrenceTime:'',
          ApplicationEvaluation:'',
          ReviewStatus:'',
        }
      ]
    }
  }

}
</script>

<style>

</style>
