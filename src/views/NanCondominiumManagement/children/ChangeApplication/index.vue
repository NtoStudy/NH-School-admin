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


    </el-table>
    <!--            下方的导航栏-->
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
        <span class="red"> {{this.columns.length }} </span>
        <span> 条 记 录 </span>
      </div>
      <div class="right">
        <el-button-group>
          <el-button type="success" plain  icon="el-icon-arrow-left" size="mini">上一页</el-button>
          <el-button type="success" plain  size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>

      </div>

    </div>


    <el-dialog :visible.sync="dialogVisible">
      <template #title>
        <h3>如实输入宿舍地址和请求内容</h3>
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
import axios from 'axios'
export default {
name:'ChangeApplication',
  components: { StuButton },
  data(){
    return {
      showDialogCase:false,
      dialogVisible:false,
      totalRecords: 0, // 初始化总记录数为0
      requestContext:'',
      dormitoryAddress:'',
      DormitoryStatusList:[
        {prop:'dormitoryAddress',label:'宿舍地址'},
        {prop:'requestContext',label:'请求内容'},
        {prop:'requestTime',label:'请求时间'},
        {prop:'reply',label:'回复'},
      ]
    }
  },
  methods:{
  // 动态渲染页面footer中的总条数
    async fetchTotalRecords() {
      try {
        const response = await axios.get('http://localhost:8080/student/dormitoryRepair'); // 假设后端API的URL
        console.log(response.data.data.length)
        if (response.data && response.data.data.length) {
          this.totalRecords = response.data.data.length; // 将后端返回的总记录数赋值给组件数据
        }
      } catch (error) {
        console.error('Error fetching total records:', error);
        // 处理错误，例如显示错误消息
      }
    },
    showCase(){
      this.dialogVisible = true
    },
    cancel(){
      this.dialogVisible = false
    },
    async AddChange(){
      const res = await getAddRepair(this.requestContext,this.dormitoryAddress)
      // console.log(res)
      if(res.role === 1){
        const newData = {
          dormitoryAddress:this.dormitoryAddress,
          requestContext:this.requestContext,
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
        const newData = {
          dormitoryAddress:this.dormitoryAddress,
          requestContext:this.requestContext,
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
      }
    },
    DialogCase(){
      this.showDialogCase = !this.showDialogCase
    }

  },
  mounted() {
    this.$store.dispatch('ChangeApplication')
    this.fetchTotalRecords(); // 获取总记录数

  },
  computed:{
    ...mapState({
      columns: state => state.Dormitory.DormitoryStatusList
    })
  },
}
</script>

<style scoped lang="scss">
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
