<template>
  <div>

    <el-button type="primary" size="small" icon="el-icon-plus" @click="showCase">申请</el-button>
    <el-button type="primary" size="small" icon="el-icon-edit" >修改</el-button>
    <el-button type="primary" size="small" icon="el-icon-delete" >删除</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-promotion" >提交</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-release" >撤销</el-button>
    <el-button type="primary" size="small" icon="el-icon-magic-stick" >流程跟踪</el-button>
    <stuButton></stuButton>
    <el-table
      :row-style="{ height: '40px' }"
      :data="columns"
      border
      height="420"
      style="width: 100%">
      <el-table-column
        width="60"
        type="selection">
      </el-table-column>
      <el-table-column
        v-for="item in LeaveCampusList"
        :key="item.stuId"
        :prop="item.prop"
        :label="item.label"
        width="180">
      </el-table-column>


    </el-table>
    <Footer></Footer>
    <el-dialog :visible.sync="dialogVisible">
      <template #title>
        <h3>请假申请表</h3>
      </template>
      <template #default>
        <el-input placeholder="请输入请假天数" v-model="excuseDays"></el-input>
        <el-input placeholder="请输入请假类型" v-model="excuseType"></el-input>
        <el-input placeholder="请输入开始时间" v-model="excuseBegin"></el-input>
        <el-input placeholder="请输入结束时间" v-model="excuseEnd"></el-input>
        <el-input placeholder="请输入请假原因" v-model="excuseReason"></el-input>
      </template>
      <template #footer>
        <el-button round size="small" @click="cancel">取消</el-button>
        <el-button round size="small" @click="AddChange">确定</el-button>
      </template>
    </el-dialog>

  </div>
</template>

<script>
import StuButton from '@/components/Stu-Button/index.vue'
import Footer from '@/components/Footer/index.vue'
import { mapState } from 'vuex'
import { getLeaveApplication } from '@/api'

export default {
  name:'LeaveManagement',
  components: { StuButton , Footer},
  data(){
    return {
      dialogVisible:false,
      excuseDays:'',
      excuseType:'',
      excuseBegin:'',
      excuseEnd:'',
      excuseReason:'',
      LeaveCampusList:[
        { prop: "studyYear", label: "学年"},
        { prop: "semester", label: "学期"},
        { prop: "stuBasicId", label: "学号"},
        { prop: "classInfo", label: "班级号"},
        { prop: "gender", label: "性别"},
        { prop: "excuseDays", label: "总时间"},
        { prop: "excuseType", label: "请假类型"},
        { prop: "excuseBegin", label: "开始时间"},
        { prop: "excuseEnd", label: "结束时间"},
        { prop: "excuseReason", label: "请假原因"},
        { prop: "status", label: "审核状态"},
      ]
    }
  },
  methods:{
    showCase(){
      this.dialogVisible = true
    },
    cancel(){
      this.dialogVisible = false
    },
    async AddChange(){
      const res = await getLeaveApplication(
        this.excuseDays
        ,this.excuseType
        ,this.excuseBegin
        ,this.excuseEnd
        ,this.excuseReason
      )
      if(res.role === 2){
        const newData = {
          studyYear:'',
          semester:'',
          stuBasicId:'',
          classInfo:'',
          gender:'',
          excuseDays:this.excuseDays,
          excuseType:this.excuseType,
          excuseBegin:this.excuseBegin,
          excuseEnd:this.excuseEnd,
          excuseReason:this.excuseReason,
          status:'等待处理',
        }
        this.LeaveCampusList.push(newData)
        this.dialogVisible = false
        this.$message({
          message: '申请成功',
          type: 'success'
        })
        await this.$store.dispatch('LeaveManagement')
      }
      else{
        this.$message({
          message: '申请失败',
          type: 'error'
        })
      }
    }
  },
  mounted() {
    this.$store.dispatch('LeaveManagement')
  },
  computed:{
    ...mapState({
      columns: state => state.dailyMatter.LeaveCampusList
    })
  }
}
</script>

<style scoped lang="scss">
</style>
