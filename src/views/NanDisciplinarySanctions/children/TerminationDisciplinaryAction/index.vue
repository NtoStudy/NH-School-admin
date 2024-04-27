<template>
  <div class="TerminationDisciplinaryAction">

    <el-button type="primary" size="small" icon="el-icon-plus" >解除申诉申请</el-button>
    <el-button type="primary" size="small" icon="el-icon-edit" >解除处分修改</el-button>
    <el-button type="primary" size="small" icon="el-icon-delete" >删除</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-promotion" >提交</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-release" >撤销</el-button>
    <StuButton></StuButton>
    <el-table
      :row-style="{ height: '40px' }"
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="StudentID"
        label="学号"
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
        width="60">
      </el-table-column>

      <el-table-column
        prop="college"
        label="学院"
        width="140">
      </el-table-column>

      <el-table-column
        prop="class"
        label="班级"
        width="100">
      </el-table-column>

      <el-table-column
        prop="DisciplinaryCategories"
        label="处分类别"
        width="160">
      </el-table-column>

      <el-table-column
        prop="DisciplinaryReason"
        label="处分原因"
        width="160">
      </el-table-column>

      <el-table-column
        prop="ReleaseDocumentNumber"
        label="解除文号"
        width="120">
      </el-table-column>

      <el-table-column
        prop="ReleaseTime"
        label="解除时间"
        width="100">
      </el-table-column>

      <el-table-column
        prop="ReleaseStatus"
        label="解除状态"
        width="160">
      </el-table-column>

    </el-table>
  <Footer></Footer>
 </div>
</template>

<script>
import Footer from '@/components/Footer/index.vue'
import StuButton from '@/components/Stu-Button/index.vue'
export default {
  name: 'TerminationDisciplinaryAction',
  components:{StuButton,Footer},
  data() {
    return {
      tableData:[{
        StudentID:'2020202020',
        schoolYear:'2020-2020',
        semester:'2',
        college:'一二三四五学院',
        class:'2020202',
        DisciplinaryCategories:'五分熟个玩法分',
        DisciplinaryReason:'五分熟个玩法分',
        ReleaseDocumentNumber:'12345',
        ReleaseTime:'12122121',
        ReleaseStatus:'五分熟个玩法分',

      }]


    }
  },
  mounted() {

    // this.$store.dispatch('Disciplinary/DisciplinarySanctions')
  },
}
</script>

<style scoped lang="scss">
.TerminationDisciplinaryAction {
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
