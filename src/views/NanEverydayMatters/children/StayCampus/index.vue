<template>
  <div>
    <!--    这是留校申请   -->
    <el-button type="primary" size="small" icon="el-icon-plus" @click="HandleOpen">申请</el-button>
    <el-button type="primary" size="small" icon="el-icon-edit" >修改</el-button>
    <el-button type="primary" size="small" icon="el-icon-delete" >删除</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-promotion" >提交</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-release" >撤销</el-button>
    <el-button type="primary" size="small" icon="el-icon-magic-stick" @click="ShowDialogCase">流程跟踪</el-button>
    <el-dialog :visible.sync="DialogCase">
      <project-progress-tracker></project-progress-tracker>
    </el-dialog>
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
        v-for="item in StayCampusList"
        :key="item.id"
        :prop="item.prop"
        :label="item.label"
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
        <h3>输入你要留校的时间段</h3>
      </template>
      <template>
        <el-input placeholder="留校的开始时间 例如2020-01-12" v-model="stayBegin"></el-input>
        <el-input placeholder="留校的截至时间 例如2020-12-12" v-model="stayEnd"></el-input>
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
import { getApplicationCampus } from '@/api'

export default {
  name:'StayCampus',
  components: { StuButton },
  data(){
    return {
      dialogVisible:false,
      DialogCase:false,
      stayBegin:'',
      stayEnd:'',
      StayCampusList:[
        { prop: "stayBegin", label: "开始时间" },
        { prop: "classInfo" , label:"班级" },
        { prop: "applicationTime", label: "申请时间" },
        { prop: "stayEnd" ,label:"截止时间"},
        { prop: "stuBasicId" ,label:"学号"},
        { prop: "nation" ,label:"申请地点"},
        { prop: "gender" , label:"性别" },
        { prop: "status" ,label:"审核状态"},
      ],
    }
  },
  mounted() {
    this.$store.dispatch('StayCampus')
  },
  computed:{
    ...mapState({
      columns: state => state.dailyMatter.StayCampusList
    })
  },
  methods:{
    ShowDialogCase(){
      this.DialogCase = !this.DialogCase
    },
    HandleOpen(){
      this.dialogVisible = true
    },
    cancel(){
      this.dialogVisible = false
    },
    async AddChange(){
      if(this.stayBegin.length !== 10 && this.stayEnd.length !== 10 ){
        this.$message({
          message: '请输入正确的时间格式',
          type: 'error'
        })
        this.dialogVisible = false
        this.stayBegin = ''
        this.stayEnd = ''
        return
      }

      const res = await getApplicationCampus(this.stayBegin,this.stayEnd)
      // console.log(res)
      if(res.role === 2){
        const newData = {
          stuId:'20202020',
          stuBasicId:this.StayCampusList.length+1,
          nation:'officia',
          gender:'男',
          classInfo:'202020',
          applicationTime:'22029',
          stayBegin:this.stayBegin,
          stayEnd:this.stayEnd,
          status:'等待处理',
        }
        this.StayCampusList.push(newData)
        this.dialogVisible= false
        this.$message({
          message: '申请成功',
          type: 'success'
        })
       await this.$store.dispatch('StayCampus')
      }
      else{
        this.$message({
          message: '申请失败',
          type: 'error'
        })
      }
    }

  }
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
