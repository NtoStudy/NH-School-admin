<template>
  <div class="NanEverydayMatters">
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="left">
          <el-menu
            unique-opened
            default-active="1">
            <el-submenu index="1">
              <template #title>
                <span>日常行为</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">日常行为信息</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template #title>
                <span>请假管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">请假申请</el-menu-item>
                <el-menu-item index="2-2">请假结果</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template #title>
                <span>假期留校</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">假期留校申请</el-menu-item>
                <el-menu-item index="3-2">假期留校结果</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template #title>
                <span>场地管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">场地使用申请</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template #title>
                <span>团日活动</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">活动申请</el-menu-item>
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
              prop="college"
              label="学院" width="140">
            </el-table-column>

            <el-table-column
              prop="class"
              label="班级" width="120">
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
              prop="appeal"
              label="申诉文号"
              width="100">
            </el-table-column>

            <el-table-column
              prop="Auditing"
              label="审核状态">
            </el-table-column>

            <el-table-column
              prop="AuditingResult"
              label="审核结果">
            </el-table-column>
          </el-table>
          <Footer></Footer>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import stuButton from '@/components/Stu-Button/index.vue'
import Footer from '@/components/Footer/index.vue'
export default {
  name: 'NanEverydayMatters',
  components: {
    stuButton,Footer
  },
  data() {
    return {
      tableData:[
        {
          StudentID:'',
          name:'',
          college:'',
          class:'',
          schoolYear:'',
          semester:'',
          DisciplinaryCategories:'',
          DisciplinaryReason:'',
          appeal:'',
          Auditing:'',
          AuditingResult:'',

        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.NanEverydayMatters {
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
