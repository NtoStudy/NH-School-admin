<template>
  <div>
    <div class="NanIdeologicalAndPoliticalTeam">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="left">
            <el-menu
              unique-opened
              default-active="1">
              <el-submenu index="1">
                <template #title>
                  <span>学生干部管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">学生干部职务申请</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

            </el-menu>
          </div>
        </el-col>
        <el-col :span="15">
          <div class="right">
            <el-button type="primary" size="small" icon="el-icon-plus" @click="open">申请</el-button>
            <el-button type="primary" size="small" icon="el-icon-edit" >修改</el-button>
            <el-button type="primary" size="small" icon="el-icon-delete" >删除</el-button>
            <el-button type="primary" size="small" icon="el-icon-s-promotion" >提交</el-button>
            <el-button type="primary" size="small" icon="el-icon-s-release" >撤销</el-button>
            <StuButton></StuButton>
            <el-table
              :row-style="{ height: '40px' }"
              :data="columns"
              border
              height="420"
              style="width: 100%">

<!--              这里是选择按钮-->
              <el-table-column
                type="selection"
                width="60">
              </el-table-column>


              <el-table-column
                v-for="item in monitorList"
                :key="item.id"
                :prop="item.prop"
                :label="item.label"
                width="200">
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
                <span class="red"> {{this.columns.length}} </span>
                <span> 条 记 录 </span>
              </div>
              <div class="right_Footer">
                <el-button-group>
                  <el-button type="success" plain  icon="el-icon-arrow-left" size="mini">上一页</el-button>
                  <el-button type="success" plain  size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </div>
            </div>
          </div>



          <el-dialog :visible.sync="dialogVisible">
            <template #title>
              <h3>确定申请该岗位？</h3>
            </template>
            <template #default>
              <el-input placeholder="请输入你要申请的岗位" v-model="classJob"></el-input>
            </template>
            <template #footer>
              <el-button round size="small" @click="cancel">取消</el-button>
              <el-button round size="small" @click="AddChange">确定</el-button>
            </template>
          </el-dialog>


        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import StuButton from '@/components/Stu-Button/index.vue'
import Footer from '@/components/Footer/index.vue'
import { getCommitteeApplication } from '@/api/index.js'
import { mapState } from 'vuex'
export default {
  name: 'NanIdeologicalAndPoliticalTeam',
  components:{
    StuButton,
  },
  data() {
    return {
      dialogVisible: false,
      classJob: '',
      monitorList:[
        { prop:'classJob', label:'职位'},
        { prop:'applicationTime', label:'申请时间'},
        { prop:'status', label:'审核状态'},
      ]
    }
  },
  methods:{
    open() {
      this.dialogVisible = true
    },
    async AddChange() {
      const res = await getCommitteeApplication(this.classJob)
      // console.log(res)
      if(res.role === 2){
        const newData = {
          classJob:this.classJob,
          applicationTime:'202011',
          status:'等待审核'
        }
        this.monitorList.push(newData)
        this.dialogVisible = false
        this.$message({
          message: '申请成功',
          type: 'success'
        })
        await this.$store.dispatch('NanIdeologicalAndPoliticalTeam')
        this.classJob = ''

      }else{
        this.$message({
          message: '申请失败',
          type: 'error'
        })
      }
    },
    cancel() {
      this.classJob = ''
      this.dialogVisible = false
    }
  },
  mounted() {
    this.$store.dispatch('NanIdeologicalAndPoliticalTeam')
  },
  computed:{
    ...mapState({
      columns: state => state.monitor.monitorList
    })
  }
}
</script>

<style lang="scss" scoped>
.NanIdeologicalAndPoliticalTeam {
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
