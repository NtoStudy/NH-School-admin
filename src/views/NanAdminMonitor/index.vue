<template>
  <div>
    <div class="NanAdminMonitor">
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
            <el-button type="primary" size="small" icon="el-icon-edit" @click="dialogVisible = true">班委信息处理</el-button>
            <el-button type="primary" size="small" icon="el-icon-info">删除</el-button>
            <el-button type="primary" size="small" icon="el-icon-s-promotion">撤销</el-button>
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
                  label="系列号"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="classJob"
                  label="班委职位"
                  width="160">
                </el-table-column>
                <el-table-column
                  prop="applicationTime"
                  label="申请时间"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="status"
                  label="审核状态"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="classId"
                  label="班级号"
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

    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>确定同意当前勤工助学申请吗？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="Examine">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import AdminButton from '@/components/AdminButton/index.vue'
import { mapState } from 'vuex'
import { getAdminReviewMonitor } from '@/api'

export default {
  name:'NanAdminMonitor',
  data(){
    return{
      dialogVisible:false,
      id:'',
      result:''
    }
  },
  components: { AdminButton },
  mounted() {
    this.$store.dispatch('AdminQueryMonitor')
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
    async Examine(){
      this.selectedRow = this.$refs.table.selection;
      this.id = this.selectedRow[0].id
      this.result = this.selectedRow[0].status
      const res = await getAdminReviewMonitor(this.id,this.result)
      if(res.role === 1){
        this.$message({
          message: '已同意申请',
          type: 'success',
        })
        // 关闭弹窗
        this.dialogVisible = false
      }

    }
  },
  computed:{
    ...mapState({
      columns: state => state.adminMonitor.AdminQueryMonitorInfo
    })
  },
}
</script>
<style scoped lang="scss">
.NanAdminMonitor {
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
