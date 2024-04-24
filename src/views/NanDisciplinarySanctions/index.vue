<template>
  <div class="NanDisciplinarySanctions">
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="left">
          <el-menu
            unique-opened
            default-active="1">
            <el-submenu index="1">
              <template #title>
                <span>处分申诉管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">处分申诉</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template #title>
                <span>处分解除管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">处分解除</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="right">
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
              prop="schoolYear"
              label="行为大类"
              width="100">
            </el-table-column>

            <el-table-column
              prop="semester"
              label="行为类别"
              width="100">
            </el-table-column>

            <el-table-column
              prop="DisciplinaryCategories"
              label="发生时间"
              width="180">
            </el-table-column>

            <el-table-column
              prop="DisciplinaryReason"
              label="申请评定分值"
              width="180">
            </el-table-column>

            <el-table-column
              prop="appeal"
              label="审核状态"
              width="100">
            </el-table-column>

          </el-table>
          <Footer></Footer>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Footer from '@/components/Footer/index.vue'
import StuButton from '@/components/Stu-Button/index.vue'
export default {
  name: 'NanDisciplinarySanctions',
  components:{StuButton,Footer},
  data() {
    return {
      tableData:[{
        StudentID:'',
        name:'',
        sexy:'',
        class:'',
        schoolYear:'',
        semester:'',
        DisciplinaryCategories:'',
        DisciplinaryReason:'',
        appeal:'',
      }]


    }
  },
  mounted() {

    // this.$store.dispatch('Disciplinary/DisciplinarySanctions')
  }
}
</script>

<style scoped lang="scss">
.NanDisciplinarySanctions {
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
