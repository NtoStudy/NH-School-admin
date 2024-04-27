<template>
  <div>
    <div class="NanIdeologicalAndPoliticalTeam">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="left">
            <el-menu
              unique-opened
              default-active="1">
              <el-submenu index="1">
                <template #title>
                  <span>学生干部管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">学生干部职务申请</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

            </el-menu>
          </div>
        </el-col>
        <el-col :span="15">
          <div class="right">
            <el-button type="primary" size="small" icon="el-icon-plus" >申请</el-button>
            <el-button type="primary" size="small" icon="el-icon-edit" >修改</el-button>
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
                prop="major"
                label="专业" width="120">
              </el-table-column>

              <el-table-column
                prop="ApplyPosition"
                label="申请职务"
                width="100">
              </el-table-column>

              <el-table-column
                prop="JobType"
                label="职务类型"
                width="100">
              </el-table-column>

              <el-table-column
                prop="ApplicationTime"
                label="申请时间"
                width="180">
              </el-table-column>

              <el-table-column
                prop="ReviewStatus"
                label="审核状态"
                width="180">
              </el-table-column>

            </el-table>
            <Footer></Footer>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import StuButton from '@/components/Stu-Button/index.vue'
import Footer from '@/components/Footer/index.vue'
export default {
  name: 'NanIdeologicalAndPoliticalTeam',
  components:{
    StuButton,
    Footer
  },
  data() {
    return {
      tableData:[{
        StudentID:'',
        name:'',
        college:'',
        major:'',
        ApplyPosition:'',
        JobType:'',
        ApplicationTime:'',
        ReviewStatus:''
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.NanIdeologicalAndPoliticalTeam {
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
