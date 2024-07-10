<template>
  <div>
    <el-button type="primary" size="small" icon="el-icon-plus" @click="showCase">投诉申请</el-button>
    <el-button type="primary" size="small" icon="el-icon-edit" >修改投诉</el-button>
    <el-button type="primary" size="small" icon="el-icon-delete" >删除申请</el-button>
    <el-button type="primary" size="small" icon="el-icon-magic-stick" @click="showDialogCase">流程跟踪</el-button>
    <stuButton></stuButton>
    <el-dialog :visible.sync="DialogCase">
      <project-progress-tracker></project-progress-tracker>
    </el-dialog>
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
        v-for="item in complainList"
        :key="item.id"
        :prop=item.prop
        :label=item.label
        width="180">
      </el-table-column>

    </el-table>
    <template>
      <div class="footer">
        <div class="left">
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
          <span class="red"> {{this.columns.length}} </span>
          <span> 条 记 录 </span>
        </div>
        <div class="right">
          <el-button-group>
            <el-button type="success" plain  icon="el-icon-arrow-left" size="mini">上一页</el-button>
            <el-button type="success" plain  size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-button-group>
        </div>
      </div>
    </template>

    <el-dialog :visible.sync="dialogVisible">
      <template #title>
        <h3>请阐述真实的情况</h3>
      </template>
      <template #default>
        <el-input placeholder="请输入你的投诉目标" v-model="complaintTarget"></el-input>
        <el-input placeholder="请输入你的投诉原因" v-model="complaintReason"></el-input>
      </template>
      <template #footer>
        <el-button round size="small" @click="cancel">取消</el-button>
        <el-button round size="small" @click="handleRemove">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import StuButton from '@/components/Stu-Button/index.vue'
import { mapState } from 'vuex'
import { getComplainApplication } from '@/api'

export default {
  components: { StuButton },
  name:'complainIndex',
  data() {
    return {
      DialogCase:false,
      dialogVisible:false,
      complaintTarget:'',
      complaintReason:'',
        complainList:[
        { prop:'complaintTarget', label:'投诉目标'},
        { prop:'complaintReason', label:'投诉原因'},
        { prop:'complaintReply', label:'回复'},
        { prop:'complaintTime', label:'投诉时间',},
        { prop:'replyUser', label:'负责人'},
      ]
    }
  },
  mounted() {
    this.$store.dispatch('stu/complain',this.complaintTarget,this.complaintReason)
  },
  computed:{
    ...mapState({ columns: state => state.stu.complainList})
  },
  methods: {
    showDialogCase(){
      this.DialogCase = !this.DialogCase
    },
    showCase(){
      this.dialogVisible = true
    },
    cancel(){
      this.dialogVisible = false
    },
    async handleRemove(){
      const res = await getComplainApplication(this.complaintTarget,this.complaintReason)
      if(res.role === 2){
        const newData = {
          complaintTarget: this.complaintTarget,
          complaintReason:this.complaintReason,
          complaintReply:'Ut nisi anim',
          complaintTime:'202011',
          replyUser:'辅导员'
        }
        this.complainList.push(newData)
        this.dialogVisible = false
        await this.$store.dispatch('stu/complain',this.complaintTarget,this.complaintReason)
        this.$message({
          message: '申请成功',
          type: 'success'
        })
      }
      else{
        alert('暂时不能申请')
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f7;
  height: 50px;
  line-height: 50px;
  .left{
    margin-left: 20px;
  }
  .red {
    color: red;
  }
  .right{
    margin-top: 10px;
    display: flex;

  }
}
</style>
