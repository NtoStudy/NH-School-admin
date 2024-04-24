<template>
  <div>
    <div class="NanWorkStudy">
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
                  <el-menu-item index="1-1">学生岗位申请</el-menu-item>
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
            <StuButton></StuButton>

           <div class="Button">
             <div class="button-begin" @click="changeButtonBegin">未申请岗位</div>
             <div class="button-end" @click="changeButtonEnd">已申请岗位</div>
           </div>

            <el-table v-if="ifShow"
              :row-style="{ height: '40px' }"
              :data="tableData_A"
              border
              style="width: 100%">
              <el-table-column
                prop="Employers"
                label="用人单位"
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
                width="120">
              </el-table-column>

              <el-table-column
                prop="JobType"
                label="岗位类型"
                width="120">
              </el-table-column>

              <el-table-column
                prop="JobTime"
                label="工作时间"
                width="180">
              </el-table-column>

              <el-table-column
                prop="requiredPeople"
                label="需求人数"
                width="100">
              </el-table-column>

              <el-table-column
                prop="applicantsPeople"
                label="申请人数"
                width="100">
              </el-table-column>

              <el-table-column
                prop="DifficultStudents"
                label="困难生数"
                width="100">
              </el-table-column>

              <el-table-column
                prop="dutyPersonnel"
                label="在岗人数"
                width="100">
              </el-table-column>

              <el-table-column
                prop="ApplicationStatus"
                label="申请状态"
                width="100">
              </el-table-column>
            </el-table>

            <el-table
              v-else
              :row-style="{ height: '40px' }"
              :data="tableData_B"
              border
              style="width: 100%">
              <el-table-column
                prop="Employers"
                label="用人单位"
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
                width="120">
              </el-table-column>

              <el-table-column
                prop="JobType"
                label="岗位类型"
                width="120">
              </el-table-column>

              <el-table-column
                prop="applicantsPeople"
                label="申请人数"
                width="100">
              </el-table-column>

              <el-table-column
                prop="applicantsTime"
                label="申请时间"
                width="100">
              </el-table-column>


              <el-table-column
                prop="ApplicationStatus"
                label="申请状态"
                width="100">
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
  name: 'NanWorkStudy',
  components:{
    StuButton,
    Footer
  },
  data() {
    return {
      tableData_A:[{
        Employers:'计划与财务办公室',
        JobTitle:'多媒体及机房兼职设备维护员',
        JobNature:'辅助管理',
        JobType:'校级',
        JobTime:'20230901~20240901',
        requiredPeople:'12',
        applicantsPeople:'12',
        DifficultStudents:'12',
        dutyPersonnel:'12',
        ApplicationStatus:'未申请',
      },{
        Employers:'',
        JobTitle:'',
        JobNature:'',
        JobType:'',
        schoolYear:'',
        requiredPeople:'',
        applicantsPeople:'',
        DifficultStudents:'',
        dutyPersonnel:'',
        ApplicationStatus:'',
      },{
        Employers:'',
        JobTitle:'',
        JobNature:'',
        JobType:'',
        schoolYear:'',
        requiredPeople:'',
        applicantsPeople:'',
        DifficultStudents:'',
        dutyPersonnel:'',
        ApplicationStatus:'',
      }, {
        Employers: '',
        JobTitle: '',
        JobNature: '',
        JobType: '',
        schoolYear: '',
        requiredPeople: '',
        applicantsPeople: '',
        DifficultStudents: '',
        dutyPersonnel: '',
        ApplicationStatus: '',
      }],
      tableData_B:[{
        Employers:'',
        JobTitle:'',
        JobNature:'',
        JobType:'',
        applicantsPeople:'',
        applicantsTime:'',
        ApplicationStatus:''
      }],
      ifShow:'true',

    }
  },
  methods:{
    changeButtonBegin(){
      this.ifShow = true
    },
    changeButtonEnd(){
      this.ifShow = false
    }
  }
}
</script>

<style scoped lang="scss">
.NanWorkStudy {
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
