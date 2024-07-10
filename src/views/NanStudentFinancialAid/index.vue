<template>
  <div>
    <div class="NanStudentFinancialAid">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="left">
            <el-menu
              unique-opened
              default-active="1">

              <el-submenu index="1">
                <template #title>
                  <span>困难生申请</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-2">困难生申请</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template #title>
                  <span>资助管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">学生资助申请</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template #title>
                  <span>学费减免政策</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">学费减免申请</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="15">
          <div class="right">
<!--            <div class="NanStudentFinancialAid">-->
              <!--  上方按钮  -->
              <el-button type="primary" size="small" icon="el-icon-plus" @click="showDialogCase">申请</el-button>
              <el-button type="primary" size="small" icon="el-icon-edit" @click="editSelected">修改</el-button>
              <el-button type="primary" size="small" icon="el-icon-delete" @click="deleteSelected">删除</el-button>
              <el-button type="primary" size="small" icon="el-icon-s-release">撤销</el-button>

              <stuButton></stuButton>

<!--  这里是页面动态渲染的内容  -->
            <template>
              <el-table
                :data="tableData"
                border
                height="420"
                style="width: 100%"
                ref="table">
<!--              这里是标题内容-->
                <template>
                  <el-table-column
                    type="selection"
                    width="55">
                  </el-table-column>

                  <el-table-column
                    prop="stuId"
                    label="学号"
                    width="140">
                  </el-table-column>

                  <el-table-column
                    prop="stuName"
                    label="姓名"
                    width="100">
                  </el-table-column>

                  <el-table-column
                    prop="sexy"
                    label="性别"
                    width="60">
                  </el-table-column>

                  <el-table-column
                    prop="college"
                    label="学院"
                    width="130">
                  </el-table-column>

                  <el-table-column
                    prop="stuClass"
                    label="班级"
                    width="140">

                  </el-table-column>

                  <el-table-column
                    prop="schoolYear"
                    label="学年"
                    width="140">
                  </el-table-column>

                  <el-table-column
                    prop="ApplyTime"
                    label="申请时间"
                    width="140">
                  </el-table-column>

                  <el-table-column
                    prop="ApplyLevel"
                    label="申请档次"
                    width="100">
                  </el-table-column>

                  <el-table-column
                    prop="cognizanceLevel"
                    label="认定档次"
                    width="100">
                  </el-table-column>

                  <el-table-column
                    prop="ReviewStatus"
                    label="审核状态"
                    width="140">
                  </el-table-column>
                </template>

              </el-table>
            </template>

            <template>
              <div class="footer">
                <div class="_left">
                  <span> 第 1 /</span>
                  <span class="_red"> 1 </span>
                  <span> 页,</span>
                  <span> 每 页 显 示</span>
                  <select>
                    <option value="语文">10</option>
                    <option value="数学">20</option>
                    <option value="英语">50</option>
                    <option value="物理">100</option>
                  </select>
                  <span> 条 / 共</span>
                  <span class="_red"> {{this.tableData.length}} </span>
                  <span> 条 记 录 </span>
                </div>
                <div class="_right">
                  <el-button-group>
                    <el-button type="success" plain  icon="el-icon-arrow-left" size="mini">上一页</el-button>
                    <el-button type="success" plain  size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                  </el-button-group>
                </div>
              </div>
            </template>

<!--            </div>-->

          </div>
        </el-col>
      </el-row>
    </div>

    <el-dialog :visible.sync="dialogVisible">
      <template #title>
        <h3>请阐述真实的情况</h3>
      </template>
      <template #default>
        <el-input placeholder="请输入你的学号" v-model="StuId"></el-input>
        <el-input placeholder="请输入你的姓名" v-model="StuName"></el-input>
        <el-input placeholder="请输入你的性别" v-model="StuSexy"></el-input>
        <el-input placeholder="请输入你的院系" v-model="StuDepartment"></el-input>
        <el-input placeholder="请输入你的班级" v-model="StuClass"></el-input>
        <el-input placeholder="请输入申请学年" v-model="StuYear"></el-input>
        <el-input placeholder="请输入申请时间" v-model="StuTime"></el-input>
        <el-input placeholder="请输入申请档次" v-model="StuGrade"></el-input>

      </template>
      <template #footer>
        <el-button round size="small" @click="cancel">取消</el-button>
        <el-button round size="small" @click="HandleEnter">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>


import StuButton from '@/components/Stu-Button/index.vue'
export default {
  name: 'NanStudentFinancialAid',
  components: { StuButton},
  data() {
    return {
      tableData: [{
        stuId: '230202020',
        stuName: '反复无动',
        sexy: '男',
        college: '20202020',
        stuClass: '20202020',
        schoolYear: '2020202',
        ApplyTime: '2020202',
        ApplyLevel: '二等',
        cognizanceLevel: '三等',
        ReviewStatus: '审核完毕'
      },
        {
          stuId: '230202020',
          stuName: '发你是我',
          sexy: '男',
          college: '20202020',
          stuClass: '20202020',
          schoolYear: '2020202',
          ApplyTime: '2020202',
          ApplyLevel: '二等',
          cognizanceLevel: '无',
          ReviewStatus: '审核中'
        },
      ],
      // 以下是弹出框中的内容
      dialogVisible: false,
      StuId: '',
      StuName: '',
      StuSexy: '',
      StuDepartment: '',
      StuClass: '',
      StuYear: '',
      StuTime: '',
      StuGrade: '',
      selectedRow: null, // 用于存储选中行的数据
      // 判断点击的是申请还是修改
      ChangeIndex:''
    }
  },
  methods: {
    // 弹出框
    showDialogCase() {
      this.dialogVisible = !this.dialogVisible
      this.ChangeIndex = 1
    },
    // 取消
    cancel(){
      this.dialogVisible = false
    },
    // 确定
    HandleEnter(){
      if(this.ChangeIndex === 1){
        let newData = {
          stuId: this.StuId,
          stuName: this.StuName,
          sexy: this.StuSexy,
          college: this.StuDepartment,
          stuClass: this.StuClass,
          schoolYear: this.StuYear,
          ApplyTime: this.StuTime,
          ApplyLevel: this.StuGrade,
          cognizanceLevel: '无',
          ReviewStatus: '审核中'
        }
        this.tableData.push(newData)
        this.dialogVisible = false
        this.$message({
          message: '申请成功',
          type: 'success'
        })
        this.StuId = ''
        this.StuName = ''
        this.StuSexy = ''
        this.StuDepartment = ''
        this.StuClass = ''
        this.StuYear = ''
        this.StuTime = ''
        this.StuGrade = ''

      }else{
        // 这里应该是用户在对话框中输入的新数据
        let updatedData = {
          stuId: this.StuId,
          stuName: this.StuName,
          sexy: this.StuSexy,
          college: this.StuDepartment,
          stuClass: this.StuClass,
          schoolYear: this.StuYear,
          ApplyTime: this.StuTime,
          ApplyLevel: this.StuGrade,
          cognizanceLevel: '无',
          ReviewStatus: '审核中'
        };

        // 更新表格数据
        let index = this.tableData.findIndex(item => item.stuId === this.selectedRow[0].stuId);
        if (index !== -1) {
          this.tableData.splice(index, 1, updatedData);
        }
        // 关闭对话框
        this.dialogVisible = false;
        this.$message({
          message: '修改成功',
          type: 'success'
        })
      }

    },
    // 修改
    editSelected() {
      this.ChangeIndex = 2
      // 获取选中的行数据
      this.selectedRow = this.$refs.table.selection; // 假设你已经给 el-table 添加了 ref="table"
      if (this.selectedRow.length === 0) {
        this.$message('请选择要修改的行');
        return;
      }
      if (this.selectedRow.length > 1) {
        this.$message('请选择单行进行修改');
        return;
      }

      // 显示对话框
      this.dialogVisible = true;
      let { stuId, stuName, sexy, stuClass,college,schoolYear,ApplyTime,ApplyLevel } = this.selectedRow[0];
      this.StuId = stuId;
      this.StuName = stuName;
      this.StuSexy = sexy;
      this.StuDepartment = college;
      this.StuClass = stuClass;
      this.StuYear = schoolYear;
      this.StuTime = ApplyTime;
      this.StuGrade = ApplyLevel;
    },
    // 删除
    deleteSelected() {
      // 获取选中的行数据
      let selectedRows = this.$refs.table.selection;
      if (selectedRows.length === 0) {
        this.$message('请选择要删除的行');
        return;
      }

      // 遍历所有选中的行，并从 tableData 中删除
      selectedRows.forEach(row => {
        let index = this.tableData.findIndex(item => item.stuId === row.stuId);
        if (index !== -1) {
          this.tableData.splice(index, 1);
        }
      });

      // 提示用户删除成功
      this.$message({
        message: '删除成功',
        type: 'success'
      });
    },
  }
}
</script>

<style scoped lang="scss">
.NanStudentFinancialAid {
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
  ._left{
    margin-left: 20px;
  }
  ._red {
    color: red;
  }
  ._right{
    margin-top: 10px;
    display: flex;

  }
}
</style>
