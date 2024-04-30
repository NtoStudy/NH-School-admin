<template>
  <div>
    <el-button type="primary" size="small" icon="el-icon-plus" @click="showCase">申请</el-button>
    <el-button type="primary" size="small" icon="el-icon-edit" >修改</el-button>
    <el-button type="primary" size="small" icon="el-icon-delete" >删除</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-promotion" >提交</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-release" >撤销</el-button>
    <el-button type="primary" size="small" icon="el-icon-magic-stick" @click="DialogCase">流程跟踪</el-button>
    <el-dialog :visible.sync="showDialogCase">
      <project-progress-tracker></project-progress-tracker>
    </el-dialog>
    <StuButton></StuButton>

    <el-table
      :row-style="{ height: '40px' }"
      :data="columns"
      border
      height="420"
      style="width: 100%"
    >
      <el-table-column
        width="60"
        type="selection">
      </el-table-column>
      <el-table-column
        v-for="item in DormitoryStatusList"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        width="180">
      </el-table-column>

      <Footer></Footer>
    </el-table>
    <!--            下方的导航栏-->
    <Footer></Footer>


    <el-dialog :visible.sync="dialogVisible">
      <template #title>
        <h3>确定申请该岗位？</h3>
      </template>
      <template #default>
        <el-input placeholder="请输入申报的内容" v-model="requestContext"></el-input>
        <el-input placeholder="请输入申报地址" v-model="dormitoryAddress"></el-input>
      </template>
      <template #footer>
        <el-button round size="small" @click="cancel">取消</el-button>
        <el-button round size="small" @click="AddChange">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import Footer from '@/components/Footer/index.vue'
import StuButton from '@/components/Stu-Button/index.vue'
import { mapState } from 'vuex'
import { getAddRepair } from '@/api'
export default {
name:'ChangeApplication',
  components: { Footer,StuButton },
  data(){
    return {
      showDialogCase:false,
      dialogVisible:false,
      requestContext:'',
      dormitoryAddress:'',
      DormitoryStatusList:[
        {prop:'dormitoryAddress',label:'宿舍地址'},
        {prop:'requestContext',label:'请求内容'},
        {prop:'requestTime',label:'请求时间'},
        {prop:'reply',label:'回复'},
        {prop:'handleResult',label:'处理结果'},
        {prop:'handleTime',label:'处理时间'},
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
      const res = await getAddRepair(this.requestContext,this.dormitoryAddress)
      // console.log(res)
      if(res.role === 2){
        const newData = {
          dormitoryAddress:this.dormitoryAddress,
          requestContext:this.requestContext,
          requestTime:'2020-01-01',
          reply:'adipisicing officia non deserunt dolore',
          handleResult:'et in cupidatat nisi',
          handleTime:'2024-04-23T22:59:57',
        }
        this.DormitoryStatusList.push(newData)
        this.dialogVisible = false
        this.$message({
          message: '申请成功',
          type: 'success'
        })
        this.requestContext = ''
        this.dormitoryAddress = ''
        this.$store.dispatch('ChangeApplication')

      }else{
       this.$message({
         message: '申请失败',
         type: 'error'
       })
      }
    },
    DialogCase(){
      this.showDialogCase = !this.showDialogCase
    }

  },
  mounted() {
    this.$store.dispatch('ChangeApplication')
  },
  computed:{
    ...mapState({
      columns: state => state.Dormitory.DormitoryStatusList
    })
  }
}
</script>

<style scoped lang="scss">

</style>
