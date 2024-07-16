<template>
  <div>
  <el-button type="primary" size="small" icon="el-icon-plus" @click="AddOpen">申请</el-button>
  <el-button type="primary" size="small" icon="el-icon-edit" >修改</el-button>
  <el-button type="primary" size="small" icon="el-icon-delete" >删除</el-button>
  <el-button type="primary" size="small" icon="el-icon-s-promotion" >提交</el-button>
  <StuButton></StuButton>
  <div class="Button">
    <div class="button-begin" @click="changeButtonBegin">可申请岗位</div>
  </div>

  <el-table
            :row-style="{ height: '40px' }"
            :data="columns"
            border
            height="420"
            style="width: 100%"
            ref="table"
            @selection-change="AddCount">

    <el-table-column
      width="60"
      type="selection">
    </el-table-column>
    <el-table-column
      v-for="(item,index) in EndWorkList"
      :key="index"
      :prop="item.prop"
      :label="item.label"
      width="200">
    </el-table-column>

  </el-table>


    <el-dialog :visible.sync="dialogVisible">
      <template #title>
        <h3>请如实填写你的信息</h3>
      </template>
      <template #default>
        <el-input placeholder="请输入你的姓名" v-model="jobName"></el-input>
      </template>
      <template #footer>
        <el-button round size="small" @click="cancel">取消</el-button>
        <el-button round size="small" @click="handleApply">确定</el-button>
      </template>
    </el-dialog>
    <div class="footer">
      <div class="footer_left">
        <span> 第 1 /</span>
        <span class="red"> 1 </span>
        <span> 页,</span>
        <span> 每 页 显 示</span>
        <select>
          <option value="语文">10</option>
          <option value="数学">20</option>
          <option value="英语">50</option>
          <option value="物理">100</option>
        </select>
        <span> 条 / 共</span>
        <span class="red">1 </span>
        <span> 条 记 录 </span>
      </div>
      <div class="footer_right">
        <el-button-group>
          <el-button type="success" plain  icon="el-icon-arrow-left" size="mini">上一页</el-button>
          <el-button type="success" plain  size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
      </div>
    </div>
  </div>

</template>

<script>
import StuButton from '@/components/Stu-Button/index.vue'
import { getJobApplication } from '@/api/index.js'
import { mapState } from 'vuex'
export default {
  name: 'AllPositions',
  components:{
    StuButton,
  },
  data() {
    return {
      numberCount:0,
      dialogVisible:false,
      jobName:'',
      jobId:'',
      EndWorkList:[
        {prop:'jobTime',label:'工作时间'},
        {prop:'employUnit',label:'招聘人数'},
        {prop:'jobName',label:'工作名称'},
        {prop:'jobNature',label:'工作性质'},
        {prop:'jobType',label:'职位类型'},
        {prop:'applicationNumber',label:'申请人'},
        {prop:'createTime',label:'开始时间'},
        {prop:'applicationStatus',label:'审核状态'},
      ],

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
      // 用来统计是否点击到了内容
      this.numberCount++
    },
    cancel() {
      this.classJob = ''
      this.dialogVisible = false
    },
    async handleApply(){
      this.selectedRow = this.$refs.table.selection;
      console.log(this.selectedRow)
      this.jobId = this.selectedRow.id
      const res = await getJobApplication(this.jobId,this.jobName)
      console.log(res)
      if(res.role === 2){
        // 弹出提示表示申请成功 等待审核
        this.$message({
          message: '申请成功,等待管理员审核',
          type: 'success'
        })
        // 关闭弹窗
        this.dialogVisible = false
        this.jobId = ''
        this.jobName = ''
      }
    }
  },
  mounted() {
    this.$store.dispatch('WorkAssistance/AllPositions')
  },
  computed:{
    ...mapState({
      columns: state => state.WorkAssistance.workList
    })
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
.footer{
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f7;
  height: 50px;
  line-height: 50px;
  .footer_left{
    margin-left: 20px;
  }
  .red {
    color: red;
  }
  .footer_right{
    margin-top: 10px;
    display: flex;

  }
}
</style>
