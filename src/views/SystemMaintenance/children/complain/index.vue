<template>
  <div>
    <el-button type="primary" size="small" icon="el-icon-plus" @click="showCase">投诉申请</el-button>
    <el-button type="primary" size="small" icon="el-icon-edit" >修改投诉</el-button>
    <el-button type="primary" size="small" icon="el-icon-delete" >删除申请</el-button>
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
        v-for="item in complainList"
        :key="item.id"
        :prop=item.prop
        :label=item.label
        width="140">
      </el-table-column>


    </el-table>
    <Footer></Footer>

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
import Footer from '@/components/Footer/index.vue'
import { mapState } from 'vuex'
import { getComplainApplication } from '@/api'

export default {
  components: { StuButton,Footer },
  name:'complainIndex',
  data() {
    return {
      dialogVisible:false,
      complaintTarget:'',
      complaintReason:'',
        complainList:[
        { prop:'stuId', label:'学号'},
        { prop:'complaintTarget', label:'投诉目标'},
        { prop:'complaintReason', label:'投诉原因'},
        { prop:'complaintReply', label:'回复'},
        { prop:'complaintTime', label:'投诉时间'},
        { prop:'replyUser', label:'负责人'},
      ]
    }
  },
  mounted() {
    this.$store.dispatch('stu/complain','Ut nisi anim','Ut mollit')
  },
  computed:{
    ...mapState({ columns: state => state.stu.complainList})
  },
  methods: {
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
          stuId:'232323232',
          complaintTarget: this.complaintTarget,
          complaintReason:this.complaintReason,
          complaintReply:'Ut nisi anim',
          complaintTime:'202011',
          replyUser:'Ut nisi anim'
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

<style>

</style>
