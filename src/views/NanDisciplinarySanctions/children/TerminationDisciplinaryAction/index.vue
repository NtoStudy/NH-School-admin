<template>
  <div class="TerminationDisciplinaryAction">

    <el-button type="primary" size="small" icon="el-icon-plus" @click="AddOpen">解除申诉申请</el-button>
    <el-button type="primary" size="small" icon="el-icon-edit" >解除处分修改</el-button>
    <el-button type="primary" size="small" icon="el-icon-delete" >删除</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-promotion" >提交</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-release" >撤销</el-button>
    <StuButton></StuButton>
    <el-table
      :row-style="{ height: '40px' }"
      :data="columns"
      border
      height="400"
      @selection-change="AddCount"
      style="width: 100% ">


      <el-table-column
        width="60"
        type="selection">
      </el-table-column>

      <el-table-column
        v-for="item in RelievePunishmentList"
        :key="item.id"
        :prop="item.prop"
        :label="item.label"
        width="180">
      </el-table-column>

    </el-table>
    <div class="footer">
      <div class="left_Footer">
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
        <span class="red"> 7 </span>
        <span> 条 记 录 </span>
      </div>
      <div class="right_Footer">
        <el-button-group>
          <el-button type="success" plain  icon="el-icon-arrow-left" size="mini">上一页</el-button>
          <el-button type="success" plain  size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>

      </div>

    </div>

    <el-dialog :visible.sync="dialogVisible">
      <template #title>
        <h3>请输入你的解除原因？</h3>
      </template>
      <template #default>
        <el-input placeholder="请输入你的内容" v-model="removeReason"></el-input>
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
import { getRelievePunishment } from '@/api'

export default {
  name: 'TerminationDisciplinaryAction',
  components:{StuButton },
  data() {
    return {
      countNumber:0,
      removeReason:'',
      dialogVisible:false,
      RelievePunishmentList:[
        { prop: 'stuId', label:'学号'},
        { prop: 'violationId', label:'违规账号'},
        { prop: 'status', label:'审核状态'},
        { prop: 'counsellorId', label:'顾问Id'},
        { prop: 'adminId', label:'管理员Id'},
      ]

    }
  },
  mounted() {
    this.$store.dispatch('Disciplinary/TerminationDisciplinaryAction')
    // this.$store.dispatch('Disciplinary/PostTerminationDisciplinaryAction', 1)
  },
  methods: {
    async handleRemove(){
        const res = await getRelievePunishment(this.removeReason)
        if(res.role === 2){
          const newData = {
            stuId:'232323232',
            violationId:'202020',
            status:'审核中',
            counsellorId:'1234',
            adminId: '23131'
          }
          this.RelievePunishmentList.push(newData)
          this.dialogVisible = false
          this.$message({
            message: '申请成功',
            type: 'success'
          })
          this.dialogVisible = false
          await this.$store.dispatch('Disciplinary/PostTerminationDisciplinaryAction')

        }else{
          alert('暂时不能申请')
        }
    },
    AddCount(){
      this.countNumber++
      console.log(this.countNumber)
    },

    cancel() {
      this.classJob = ''
      this.dialogVisible = false
    },
    AddOpen(){
      if(this.countNumber !== 0){
        this.dialogVisible = true
        console.log(this.countNumber)
      }else{
        alert('请选择你要申请的项目')
      }
    }
  },
  computed:{
    ...mapState({
      columns: state => state.Disciplinary.RelievePunishmentList
    })
  }
}
</script>

<style scoped lang="scss">
.TerminationDisciplinaryAction {
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

.footer{
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f7;
  height: 50px;
  line-height: 50px;
  .left_Footer{
    margin-left: 20px;
  }
  .red {
    color: red;
  }
  .right_Footer{
    margin-top: 10px;
    display: flex;

  }

}

</style>
