<template>
  <div>

  <el-button type="primary" size="small" icon="el-icon-plus" @click="AddOpen">申请</el-button>
  <el-button type="primary" size="small" icon="el-icon-edit" >修改</el-button>
  <el-button type="primary" size="small" icon="el-icon-delete" >删除</el-button>
  <el-button type="primary" size="small" icon="el-icon-s-promotion" >提交</el-button>
  <StuButton></StuButton>

  <div class="Button">
    <div class="button-begin" @click="changeButtonBegin">未申请岗位</div>
    <div class="button-end" @click="changeButtonEnd">已申请岗位</div>
  </div>

  <el-table v-if="ifShow"
            :row-style="{ height: '40px' }"
            :data="tableData_A"
            border
            height="420"
            style="width: 100%"
            @selection-change="AddCount">

    <template>
      <el-table-column
        width="60"
        type="selection">
      </el-table-column>

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
    </template>
  </el-table>

  <el-table
    v-else
    :row-style="{ height: '40px' }"
    :data="tableData_B"
    border
    height="420"
    style="width: 100%">


    <template>
      <el-table-column
        width="60"
        type="selection">
      </el-table-column>

      <el-table-column
        prop="schoolYear"
        label="学年"
        width="140">
      </el-table-column>

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
    </template>
  </el-table>
  <Footer></Footer>

    <el-dialog :visible.sync="dialogVisible">
      <template #title>
        <h3>请输入你申请该项目的理由</h3>
      </template>
      <template #default>
        <el-input placeholder="请输入你的学号" v-model="jobId"></el-input>
        <el-input placeholder="请输入你的姓名" v-model="jobName"></el-input>
      </template>
      <template #footer>
        <el-button round size="small" @click="cancel">取消</el-button>
        <el-button round size="small" @click="handleApply">确定</el-button>
      </template>
    </el-dialog>
  </div>

</template>

<script>
import StuButton from '@/components/Stu-Button/index.vue'
import Footer from '@/components/Footer/index.vue'
import { getJobApplication } from '@/api/index.js'
import axios from 'axios'
export default {
  name: 'AllPositions',
  components:{
    StuButton,
    Footer
  },
  data() {
    return {
      numberCount:0,
      dialogVisible:false,
      applicationReason:'',
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
        schoolYear:'20202002',
        Employers:'计划与财务办公室',
        JobTitle:'多媒体及机房兼职设备维护员',
        JobNature:'辅助管理',
        JobType:'校级',
        applicantsPeople:'20',
        applicantsTime:'20202020',
        ApplicationStatus:'已申请'
      },{
        schoolYear:'',
        Employers:'',
        JobTitle:'',
        JobNature:'',
        JobType:'',
        applicantsPeople:'',
        applicantsTime:'',
        ApplicationStatus:''
      },
      {
        schoolYear:'',
        Employers:'',
        JobTitle:'',
        JobNature:'',
        JobType:'',
        applicantsPeople:'',
        applicantsTime:'',
        ApplicationStatus:''
      },
      {
        schoolYear:'',
        Employers:'',
        JobTitle:'',
        JobNature:'',
        JobType:'',
        applicantsPeople:'',
        applicantsTime:'',
        ApplicationStatus:''
      }
      ],
      ifShow:'true',
      jobId:'',
      jobName:'',

    }
  },
  methods:{
    changeButtonBegin(){
      this.ifShow = true
    },
    changeButtonEnd(){
      this.ifShow = false
    },
    AddOpen(){
      if(this.numberCount !== 0){
        this.dialogVisible = true
        // console.log(this.numberCount)
      }else{
        alert('请选择你要申请的项目')
      }
    },
    AddCount(){
      this.numberCount++
      console.log(this.numberCount)
    },
    cancel() {
      this.classJob = ''
      this.dialogVisible = false
    },
    async handleApply(){
      const res = await getJobApplication(this.jobId,this.jobName)
      if(res.role === 2){
        // 弹出提示表示申请成功 等待审核
        this.$message({
          message: '申请成功',
          type: 'success'
        })
        // 关闭弹窗
        this.dialogVisible = false
        this.jobId = ''
        this.jobName = ''
      }
    }
  },


}
</script>

<style scoped lang="scss">
.AllPositions {
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
