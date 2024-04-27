<template>
  <div>
    <div class="PositionPersonnel">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="left">
            <el-menu
              unique-opened
              default-active="1">
              <el-submenu index="1">
                <template #title>
                  <span>岗位人员管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" @click="handleChangeIndex">学生岗位申请</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template #title>
                  <span>我的勤工助学</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-2">我的勤工岗位</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="15">
          <div class="right">
            <el-button type="primary" size="small" icon="el-icon-s-claim" >酬金明细</el-button>
            <StuButton></StuButton>


            <el-table
              :row-style="{ height: '40px' }"
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="schoolYear"
                label="学年"
                width="140">
              </el-table-column>

              <el-table-column
                prop="JobTitle"
                label="岗位名称"
                width="140">
              </el-table-column>

              <el-table-column
                prop="JobNature"
                label="岗位性质"
                width="140">
              </el-table-column>

              <el-table-column
                prop="JobType"
                label="用人部门"
                width="160">
              </el-table-column>

              <el-table-column
                prop="TotalRemuneration"
                label="总酬金"
                width="120">
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
  name: 'PositionPersonnel',
  components:{
    StuButton,
    Footer
  },
  data() {
    return {
      tableData:[{
        schoolYear:'2020-2020',
        JobTitle:'校卫队',
        JobNature:'辅助管理',
        JobType:'综治保卫办公室',
        TotalRemuneration:'1000',
      }],


    }
  },
  methods:{

    handleChangeIndex(){
      this.$router.push('/NanWorkStudy/requested')
    }
  }
}
</script>

<style scoped lang="scss">
.PositionPersonnel {
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
.Button{
  display: flex;
  .button-begin{
    text-align: center;
    line-height: 40px;
    margin-right: 20px;
    height: 40px;
    width: 100px;
    background-color: #f2f2f2;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: none;
  }
  .button-end{
    text-align: center;
    line-height: 40px;
    height: 40px;
    width: 100px;
    background-color: #f2f2f2;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: none;
  }
}

</style>
