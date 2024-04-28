<template>
  <div>

    <el-button type="primary" size="small" icon="el-icon-plus" >申请</el-button>
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
      style="width: 100%">
      <el-table-column
        v-for="item in LeaveCampusList"
        :key="item.stuId"
        :prop="item.prop"
        :label="item.label"
        width="180">
      </el-table-column>

      <Footer></Footer>
    </el-table>


  </div>
</template>

<script>
import StuButton from '@/components/Stu-Button/index.vue'
import Footer from '@/components/Footer/index.vue'
import { mapState } from 'vuex'

export default {
  name:'LeaveManagement',
  components: { Footer,StuButton },
  data(){
    return {
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

<style>

</style>
