<template>
  <div class="DisciplinaryAppeal">

    <!--  上方按钮  -->
    <el-button type="primary" size="small" icon="el-icon-plus" >申诉申请</el-button>
    <el-button type="primary" size="small" icon="el-icon-edit" >申诉修改</el-button>
    <el-button type="primary" size="small" icon="el-icon-delete" >删除</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-promotion" >提交</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-release" >撤销</el-button>
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
        prop="college"
        label="学院"
        width="140">
      </el-table-column>

      <el-table-column
        prop="class"
        label="班级"
        width="120">
      </el-table-column>

      <el-table-column
        prop="schoolYear"
        label="学年"
        width="100">
      </el-table-column>

      <el-table-column
        prop="semester"
        label="学期"
        width="100">
      </el-table-column>

      <el-table-column
        prop="DisciplinaryCategories"
        label="处分类别"
        width="180">
      </el-table-column>

      <el-table-column
        prop="DisciplinaryReason"
        label="处分原因"
        width="180">
      </el-table-column>

      <el-table-column
        prop="AppealNumber"
        label="申诉文号"
        width="180">
      </el-table-column>

      <el-table-column
        prop="ReviewStatus"
        label="审核状态"
        width="100">
      </el-table-column>

      <el-table-column
        prop="findingsAudit"
        label="核审结果"
        width="100">
      </el-table-column>
    </el-table>
    <Footer></Footer>

  </div>
</template>

<script>
import Footer from '@/components/Footer/index.vue'
import StuButton from '@/components/Stu-Button/index.vue'
import TerminationDisciplinaryAction from '@/views/NanDisciplinarySanctions/children/TerminationDisciplinaryAction/index.vue'
// import { getPunishmentList } from '@/api/index'
export default {
  name: 'DisciplinaryAppeal',
  components:{StuButton,Footer},
  data() {
    return {
      tableData:[{
        StudentID:'202002020',
        name:'腐恶阿奴',
        college:'带娃打完对哇',
        class:'2020202',
        schoolYear:'2020020',
        semester:'23',
        DisciplinaryCategories:'160',
        DisciplinaryReason:'160',
        AppealNumber:'2121212',
        ReviewStatus:'正在审核',
        findingsAudit:'正在审核',
      }]


    }
  },
  mounted() {
    // this.$store.dispatch('Disciplinary/DisciplinaryAppeal')
    // getPunishmentList().then(res =>{
    //   console.log(res)
    // })
  },

}
</script>

<style scoped lang="scss">
.DisciplinaryAppeal {
  padding: 30px;
}
.left {
  background-color: #ffffff;
  .el-menu {
    height: 600px;
    border-right: none;
  }
}
.right {
  background-color: #ffffff;
  height: 570px;
  padding: 15px;
}
</style>
