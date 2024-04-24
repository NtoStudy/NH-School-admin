<template>
  <div class="NanAssessmentManagement">
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="left">
          <el-menu
            unique-opened
            default-active="1">
            <el-submenu index="1">
              <template #title>
                <span>考核评分</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">考核评分</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template #title>
                <span>结果处理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">评分明细</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="right">
          <el-row>
            <el-button type="success"><i class="el-icon-edit"></i>开始评分</el-button>
          </el-row>
          <br>
          <div class="headName" >
            <span class="name">姓名：一小池勺</span>
            <span class="stuId">学号：2202020</span>
          </div>
          <el-table
            :row-style="{ height:'40px' }"
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="entryName"
              label="项目名称"
              width="200">
            </el-table-column>

            <el-table-column
              prop="beginTime"
              label="开始时间"
              width="200">
            </el-table-column>

            <el-table-column
              prop="endTime"
              label="结束时间"
              width="200">
            </el-table-column>

            <el-table-column
              prop="AssessmentForm"
              label="考核表"
              width="220">
            </el-table-column>

            <el-table-column
              prop="AssessmentTargets"
              label="考核对象"
              width="160">
            </el-table-column>

            <el-table-column
              prop="state"
              label="状态"
              width="160">
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

export default {
  name: 'NanAssessmentManagement',
  components: { Footer },
  data() {
    return {
      tableData:[
        {
          entryName:'',
          beginTime:'',
          endTime:'',
          AssessmentForm:'',
          AssessmentTargets:'',
          state:''

        },{
          entryName:'',
          beginTime:'',
          endTime:'',
          AssessmentForm:'',
          AssessmentTargets:'',
          state:''

        },{
          entryName:'',
          beginTime:'',
          endTime:'',
          AssessmentForm:'',
          AssessmentTargets:'',
          state:''

        },{
          entryName:'',
          beginTime:'',
          endTime:'',
          AssessmentForm:'',
          AssessmentTargets:'',
          state:''

        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.NanAssessmentManagement {
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
