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
            <el-button type="primary" size="small" icon="el-icon-s-promotion">修改勤工助学</el-button>
            <el-button type="primary" size="small" icon="el-icon-delete" >删除勤工助学</el-button>
            <AdminButton></AdminButton>
            <el-table
              :row-style="{ height: '40px' }"
              :data="columns"
              border
              height="420"
              @current-change="handleCurrentChange"
              style="width: 100%">
              <template>
                <el-table-column
                  width="60"
                  type="selection"
                >
                </el-table-column>

                <el-table-column
                  prop="jobTime"
                  label="工作时间"
                  width="160">
                </el-table-column>

                <el-table-column
                  prop="employUnit"
                  label="就业单位"
                  width="180">
                </el-table-column>

                <el-table-column
                  prop="jobName"
                  label="工作名称"
                  width="140">
                </el-table-column>

                <el-table-column
                  prop="jobNature"
                  label="工作性质"
                  width="180">
                </el-table-column>


                <el-table-column
                  prop="applicationNumber"
                  label="工作编号"
                  width="120">
                </el-table-column>

                <el-table-column
                  prop="applicationTime"
                  label="预期开设时间"
                  width="180">
                </el-table-column>

                <el-table-column
                  prop="applicationStatus"
                  label="开设状态"
                  width="120">
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

      <el-dialog title="请填写勤工助学项目信息" :visible.sync="dialogVisiblePut">
        <el-form :model="form">
          <el-form-item label="工作名称" :label-width="formLabelWidth">
            <el-input v-model="form.jobName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作时间" :label-width="formLabelWidth">
            <el-input v-model="form.jobTime" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="申请状态" :label-width="formLabelWidth">
            <el-input v-model="form.applicationStatus" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="需要人口" :label-width="formLabelWidth">
            <el-input v-model="form.workingNumber" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作总人数" :label-width="formLabelWidth">
            <el-input v-model="form.poorStu" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="就业单位" :label-width="formLabelWidth">
            <el-input v-model="form.employUnit" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作类型" :label-width="formLabelWidth">
            <el-input v-model="form.jobType" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="可申请人数" :label-width="formLabelWidth">
            <el-input v-model="form.applicationNumber" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作性质" :label-width="formLabelWidth">
            <el-input v-model="form.jobNature" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisiblePut = false">取 消</el-button>
          <el-button type="primary" @click="AddInfo">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>

</template>

<script>
import {  getAdminPublishWork, getAdminReviewWork } from '@/api'
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
      jobName:"复酸统团",
      stuId:'',
      formLabelWidth: '120px',
      form: {
        jobName: '',
        jobTime:'',
        applicationStatus:'',
        needNumber:'',
        workingNumber:'',
        poorStu:'',
        employUnit:'',
        jobType:'',
        applicationNumber:'',
        jobNature:''
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
    handleCurrentChange(currentRow,) {
      this.jobName = currentRow.jobName
    },
    // 新增勤工助学
    async AddInfo(){
      // 将表单中form的数据传给后台
      console.log(123)
      const res = await getAdminPublishWork(this.form)
      if(res.role === 1){
        this.$message({
          message: '添加成功',
          type: 'success',
        })
        // 关闭dialog弹窗
        this.dialogVisiblePut = false
        // 重新渲染页面数据
        await this.$store.dispatch('AdminQueryWork')
      }
    }


  },
  mounted() {
    this.$store.dispatch('AdminQueryWork')
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
