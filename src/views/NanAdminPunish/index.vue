<template>
  <div>
    <div class="NanAdminPunish">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="left">
            <el-menu
              unique-opened
              default-active="1">
              <el-submenu index="1">
                <template #title>
                  <span>审核处分信息</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">审核处分信息</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

            </el-menu>
          </div>
        </el-col>

        <el-col :span="15">
          <div class="right">
            <el-button type="primary" size="small" icon="el-icon-edit" @click="dialogVisible = true">处分信息处理</el-button>
            <el-button type="primary" size="small" icon="el-icon-delete" >删除</el-button>
            <el-button type="primary" size="small" icon="el-icon-s-promotion" >提交</el-button>
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
                  prop="id"
                  label="学号"
                  width="120">
                </el-table-column>

                <el-table-column
                  prop="violationId"
                  label="违规项目"
                  width="120">
                </el-table-column>

                <el-table-column
                  prop="status"
                  label="事件状态"
                  width="140">
                </el-table-column>

                <el-table-column
                  prop="applicationTime"
                  label="发生时间"
                  width="180">
                </el-table-column>


                <el-table-column
                  prop="adminId"
                  label="职工号"
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
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>确定要解除处分吗？</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="Examine">确 定</el-button>
  </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import StuButton from '@/components/Stu-Button/index.vue'
import Footer from '@/components/Footer/index.vue'
import { getAdminReviewScholarships, getAdminReviewViolation, getCommitteeApplication } from '@/api/index.js'
import { mapState } from 'vuex'
import AdminButton from '@/components/AdminButton/index.vue'
export default {
  name: 'NanAdminPunish',
  components:{
    AdminButton,
  },
  data() {
    return {
      dialogVisible: false,
      Id:'5',
      result:''

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
    async Examine() {
      this.result = 1
      const res = await getAdminReviewViolation(this.result,this.Id)
      if(res.role === 1){
        this.$message({
          message: '已同意申请',
          type: 'success',
        })
        // 关闭dialog弹窗
        this.dialogVisible = false
      }
    },
    handleCurrentChange(currentRow,) {
      // currentRow 是用户当前点击的行数据
      // oldCurrentRow 是上一次点击的行数据，如果没有变化则是undefined
      this.Id = currentRow.id
    }
  },
  mounted() {
    this.$store.dispatch('AdminQueryViolation')
  },
  computed:{
    ...mapState({
      columns: state => state.adminPunish.adminQueryViolationInfo
    })
  }
}
</script>

<style lang="scss" scoped>
.NanAdminPunish {
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
