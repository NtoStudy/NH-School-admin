<template>
  <div>
    <div class="NanAdminWorkStudy">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="left">
            <el-menu
              unique-opened
              default-active="1">
              <el-submenu index="1">
                <template #title>
                  <span>勤工助学管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">审核勤工助学信息</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

            </el-menu>
          </div>
        </el-col>

        <el-col :span="15">
          <div class="right">
            <el-button type="primary" size="small" icon="el-icon-edit" @click="dialogVisiblePut = true">发布勤工助学</el-button>
            <el-button type="primary" size="small" icon="el-icon-info" @click="dialogVisibleExamine = true">审核勤工助学</el-button>
            <el-button type="primary" size="small" icon="el-icon-s-promotion" @click="ChangeCase">修改勤工助学</el-button>
            <el-button type="primary" size="small" icon="el-icon-delete" @click="DeleteCase">删除勤工助学</el-button>
            <AdminButton></AdminButton>
            <el-table
              :row-style="{ height: '40px' }"
              :data="columns"
              border
              height="420"
              ref="table"
              style="width: 100%">
              <template>
                <el-table-column
                  width="60"
                  type="selection"
                >
                </el-table-column>

                <el-table-column
                  prop="id"
                  label="工作编号"
                  width="160">
                </el-table-column>
                <el-table-column
                  prop="workingNumber"
                  label="所需人数"
                  width="160">
                </el-table-column>
                <el-table-column
                  prop="applicationStatus"
                  label="开设状态"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="poorStu"
                  label="薪资状况"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="applicationNumber"
                  label="可申请人数"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="employUnit"
                  label="就业单位"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="jobNature"
                  label="工作性质"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="needNumber"
                  label="预期招人"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="jobTime"
                  label="工作时间"
                  width="160">
                </el-table-column>
                <el-table-column
                  prop="jobType"
                  label="工作类型"
                  width="160">
                </el-table-column>
                <el-table-column
                  prop="jobName"
                  label="项目名称"
                  width="160">
                </el-table-column>

              </template>
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
        </el-col>
      </el-row>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisibleExamine"
        width="30%"
        :before-close="handleClose">
        <span>确定同意当前勤工助学申请吗？</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibleExamine = false">取 消</el-button>
    <el-button type="primary" @click="Examine">确 定</el-button>
  </span>
      </el-dialog>

      <el-dialog
        title="提示"
        :visible.sync="dialogVisibleDelete"
        width="30%"
        :before-close="handleClose">
        <span>确定删除当前勤工助学申请吗？</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibleDelete = false">取 消</el-button>
    <el-button type="primary" @click="DeleteInfo">确 定</el-button>
  </span>
      </el-dialog>

      <el-dialog title="请填写勤工助学项目信息" :visible.sync="dialogVisiblePut">
        <el-form :model="form">
          <el-form-item label="工作编号" :label-width="formLabelWidth">
            <el-input v-model="form.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所需人数" :label-width="formLabelWidth">
            <el-input v-model="form.workingNumber" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="开设状态" :label-width="formLabelWidth">
            <el-input v-model="form.applicationStatus" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="薪资状况" :label-width="formLabelWidth">
            <el-input v-model="form.poorStu" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="可申请人数" :label-width="formLabelWidth">
            <el-input v-model="form.applicationNumber" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="就业单位" :label-width="formLabelWidth">
            <el-input v-model="form.employUnit" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作性质" :label-width="formLabelWidth">
            <el-input v-model="form.jobNature" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="预期招人" :label-width="formLabelWidth">
            <el-input v-model="form.needNumber" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作时间" :label-width="formLabelWidth">
            <el-input v-model="form.jobTime" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作类型" :label-width="formLabelWidth">
            <el-input v-model="form.jobType" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="项目名称" :label-width="formLabelWidth">
            <el-input v-model="form.jobName" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisiblePut = false">取 消</el-button>
          <el-button type="primary" @click="AddInfo">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="请填写勤工助学项目信息" :visible.sync="dialogVisibleChange">
        <el-form :model="formChange">
          <el-form-item label="工作编号" :label-width="formLabelWidth">
            <el-input v-model="formChange.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所需人数" :label-width="formLabelWidth">
            <el-input v-model="formChange.workingNumber" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="开设状态" :label-width="formLabelWidth">
            <el-input v-model="formChange.applicationStatus" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="薪资状况" :label-width="formLabelWidth">
            <el-input v-model="formChange.poorStu" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="可申请人数" :label-width="formLabelWidth">
            <el-input v-model="formChange.applicationNumber" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="就业单位" :label-width="formLabelWidth">
            <el-input v-model="formChange.employUnit" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作性质" :label-width="formLabelWidth">
            <el-input v-model="formChange.jobNature" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="预期招人" :label-width="formLabelWidth">
            <el-input v-model="formChange.needNumber" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作时间" :label-width="formLabelWidth">
            <el-input v-model="formChange.jobTime" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作类型" :label-width="formLabelWidth">
            <el-input v-model="formChange.jobType" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="项目名称" :label-width="formLabelWidth">
            <el-input v-model="formChange.jobName" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisibleChange = false">取 消</el-button>
          <el-button type="primary" @click="ChangeInfo">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>

</template>

<script>
import { getAdminDeleteWork, getAdminModifyWork, getAdminPublishWork, getAdminReviewWork } from '@/api'
import { mapState } from 'vuex'
import AdminButton from '@/components/AdminButton/index.vue'
export default {
  name: 'NanAdminWorkStudy',
  components:{
    AdminButton,
  },
  data() {
    return {
      dialogVisibleExamine: false,
      dialogVisiblePut:false,
      dialogVisibleChange:false,
      dialogVisibleDelete:false,
      deleteId:'',
      jobName:"复酸统团",
      stuId:'',
      formLabelWidth: '120px',
      form: {
        id:'',
        workingNumber:'',
        applicationStatus :'',
        poorStu: "",
        applicationNumber: '',
        employUnit: "",
        jobNature: "",
        needNumber: '',
        jobTime: "",
        jobType:'',
        jobName: ""
      },
      formChange: {
        id:'',
        workingNumber:'',
        applicationStatus :'',
        poorStu: "",
        applicationNumber: '',
        employUnit: "",
        jobNature: "",
        needNumber: '',
        jobTime: "",
        jobType:'',
        jobName: ""
      }
    }
  },
  methods:{
    // 关闭弹窗
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {
        });
      },
    // 查询信息封装成一个函数
    GetData(){
      this.$store.dispatch('AdminQueryWork')
  },
    // 审核勤工助学的接口
    async Examine() {
      this.stuId = 37
      const res = await getAdminReviewWork(this.stuId,this.jobName)
      if(res.role === 1){
        this.$message({
          message: '已同意申请',
          type: 'success',
        })
        // 关闭dialog弹窗
        this.dialogVisibleExamine = false
      }
    },
    //拿到当前点击行的数据
    // 新增勤工助学
    async AddInfo(){
      // 将表单中form的数据传给后台
      console.log(this.form)
      const res = await getAdminPublishWork(this.form)
      if(res.role === 1){
        this.$message({
          message: '添加成功',
          type: 'success',
        })
        // 关闭dialog弹窗
        this.dialogVisiblePut = false
        // 重新渲染页面数据
        await this.GetData()
        this.form = {
          id:'',
          workingNumber:'',
          applicationStatus :'',
          poorStu: "",
          applicationNumber: '',
          employUnit: "",
          jobNature: "",
          needNumber: '',
          jobTime: "",
          jobType:'',
          jobName: ""
        }
      }
    },

    // 修改勤工助学
    ChangeCase(){
      this.dialogVisibleChange = true
      this.selectedRow = this.$refs.table.selection;
      this.formChange = this.selectedRow[0]
    },

    // 修改勤工助学
    async ChangeInfo(){
      console.log(this.formChange)
      const res = await getAdminModifyWork(this.formChange)
      console.log(res)
      if(res.role === 1){
        this.$message({
          message: '修改成功',
          type: 'success',
        })
        // 关闭dialog弹窗
        this.dialogVisibleChange = false
        // 重新渲染页面数据
        await this.GetData()
      }
    },

    // 删除勤工助学
    DeleteCase(){
      this.dialogVisibleDelete = true
      this.selectedRow = this.$refs.table.selection;
      this.deleteId = this.selectedRow[0].id
    },

    // 删除勤工助学
    async DeleteInfo(){
      const res = await getAdminDeleteWork(this.deleteId)
      if (res.role === 1){
        this.$message({
          message: '删除成功',
          type: 'success',
        })
        this.dialogVisibleDelete = false
        await this.GetData()
      }
    },

  },
  mounted() {
    this.GetData()
  },
  computed:{
    ...mapState({
      columns: state => state.adminWorkStudy.adminQueryWorkInfo
    })
  }
}
</script>

<style lang="scss" scoped>
.NanAdminWorkStudy {
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
