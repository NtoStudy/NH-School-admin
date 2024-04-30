<template>
  <div>
    <div class="NanStudentFinancialAid">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="left">
            <el-menu
              unique-opened
              default-active="1">

              <el-submenu index="1">
                <template #title>
                  <span>困难生申请</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-2">困难生申请</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template #title>
                  <span>资助管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">学生资助申请</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template #title>
                  <span>学费减免政策</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">学费减免申请</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="15">
          <div class="right">
<!--            <div class="NanStudentFinancialAid">-->
              <!--  上方按钮  -->
              <el-button type="primary" size="small" icon="el-icon-plus">申请</el-button>
              <el-button type="primary" size="small" icon="el-icon-edit">修改</el-button>
              <el-button type="primary" size="small" icon="el-icon-delete">删除</el-button>
              <el-button type="primary" size="small" icon="el-icon-s-promotion">提交</el-button>
              <el-button type="primary" size="small" icon="el-icon-s-release">撤销</el-button>
              <el-button type="primary" size="small" icon="el-icon-magic-stick" >流程跟踪</el-button>

              <stuButton></stuButton>

            <template>
              <el-table
                :data="tableData"
                border
                height="420"
                style="width: 100%">

                <el-table-column
                  prop="stuId"
                  label="学号"
                  width="140">
                </el-table-column>

                <el-table-column
                  prop="stuName"
                  label="姓名"
                  width="100">
                </el-table-column>

                <el-table-column
                  prop="sexy"
                  label="性别"
                  width="60">
                </el-table-column>

                <el-table-column
                  prop="college"
                  label="学院"
                  width="130">
                </el-table-column>

                <el-table-column
                  prop="stuClass"
                  label="班级"
                  width="140">

                </el-table-column>

                <el-table-column
                  prop="schoolYear"
                  label="学年"
                  width="140">
                </el-table-column>

                <el-table-column
                  prop="ApplyTime"
                  label="申请时间"
                  width="140">
                </el-table-column>

                <el-table-column
                  prop="ApplyLevel"
                  label="申请档次"
                  width="100">
                </el-table-column>

                <el-table-column
                  prop="cognizanceLevel"
                  label="认定档次"
                  width="100">
                </el-table-column>

                <el-table-column
                  prop="ReviewStatus"
                  label="审核状态"
                  width="140">
                </el-table-column>

              </el-table>
            </template>

            <Footer></Footer>

<!--            </div>-->

          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>


import Footer from '@/components/Footer/index.vue'
import StuButton from '@/components/Stu-Button/index.vue'
export default {
  name: 'NanStudentFinancialAid',
  components: { Footer ,StuButton},
  data() {
    return {
      tableData: [{
        stuId: '230202020',
        stuName: '反复无动',
        sexy: '男',
        college: '20202020',
        stuClass: '20202020',
        schoolYear: '2020202',
        ApplyTime: '2020202',
        ApplyLevel: '二等',
        cognizanceLevel: '三等',
        ReviewStatus: '审核完毕'
      },
        {
          stuId: '230202020',
          stuName: '发你是我',
          sexy: '男',
          college: '20202020',
          stuClass: '20202020',
          schoolYear: '2020202',
          ApplyTime: '2020202',
          ApplyLevel: '二等',
          cognizanceLevel: '无',
          ReviewStatus: '审核中'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.NanStudentFinancialAid {
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
