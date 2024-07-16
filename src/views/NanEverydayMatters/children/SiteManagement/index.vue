<template>
  <div>
    <el-button type="primary" size="small" icon="el-icon-plus" @click="dialogTableVisibleAdd = true">申请</el-button>
    <el-button type="primary" size="small" icon="el-icon-edit"  @click="handleEdit">修改</el-button>
    <el-button type="primary" size="small" icon="el-icon-delete" @click="handleDelete">删除</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-release" >撤销</el-button>
    <el-button type="primary" size="small" icon="el-icon-magic-stick" @click="showDialogCase">流程跟踪</el-button>
    <el-dialog :visible.sync="DialogCase">
      <project-progress-tracker></project-progress-tracker>
    </el-dialog>
    <stuButton></stuButton>
    <el-table
      :row-style="{ height: '40px' }"
      :data="tableData"
      border
      height="420"
      style="width: 100%"
      ref="table"
    >
      <template>
        <el-table-column
          width="60"
          type="selection">
        </el-table-column>
        <el-table-column
          prop="stuId"
          label="学号"
          width="140">
        </el-table-column>

        <el-table-column
          prop="name"
          label="姓名"
          width="100">
        </el-table-column>

        <el-table-column
          prop="collage"
          label="学院"
          width="140">
        </el-table-column>

        <el-table-column
          prop="ApplyVenue"
          label="申请场地"
          width="120">
        </el-table-column>

        <el-table-column
          prop="classUsingTime"
          label="申请使用时间段"
          width="140">
        </el-table-column>

        <el-table-column
          prop="ApplicationTimePeriod"
          label="申请时间"
          width="100">
        </el-table-column>

        <el-table-column
          prop="ReviewStatus"
          label="审核状态"
          width="100">
        </el-table-column>
      </template>
    </el-table>

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
        <span class="red"> {{this.tableData.length}} </span>
        <span> 条 记 录 </span>
      </div>
      <div class="right">
        <el-button-group>
          <el-button type="success" plain  icon="el-icon-arrow-left" size="mini">上一页</el-button>
          <el-button type="success" plain  size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
      </div>
    </div>


    <el-dialog title="请输入使用场地相关信息" :visible.sync="dialogTableVisibleAdd">
      <el-form :model="formAdd">
        <el-form-item label="学号" :label-width="formLabelWidth">
          <el-input v-model="formAdd.stuId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="formAdd.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学院" :label-width="formLabelWidth">
          <el-input v-model="formAdd.collage" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="申请场地" :label-width="formLabelWidth">
          <el-input v-model="formAdd.classUsingTime" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="申请时间段" :label-width="formLabelWidth">
          <el-input v-model="formAdd.ApplyVenue" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="申请时间" :label-width="formLabelWidth">
          <el-input v-model="formAdd.ApplicationTimePeriod" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="审核状态" :label-width="formLabelWidth">
          <el-input v-model="formAdd.ReviewStatus" autocomplete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisibleAdd = false">取 消</el-button>
        <el-button type="primary" @click="AddInfo">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="请输入使用场地相关信息" :visible.sync="dialogTableVisibleEdit">
      <el-form :model="formEdit">
        <el-form-item label="学号" :label-width="formLabelWidth">
          <el-input v-model="formEdit.stuId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="formEdit.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学院" :label-width="formLabelWidth">
          <el-input v-model="formEdit.collage" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="申请场地" :label-width="formLabelWidth">
          <el-input v-model="formEdit.classUsingTime" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="申请时间段" :label-width="formLabelWidth">
          <el-input v-model="formEdit.ApplyVenue" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="申请时间" :label-width="formLabelWidth">
          <el-input v-model="formEdit.ApplicationTimePeriod" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="审核状态" :label-width="formLabelWidth">
          <el-input v-model="formEdit.ReviewStatus" autocomplete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisibleEdit = false">取 消</el-button>
        <el-button type="primary" @click="EditInfo">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Footer from '@/components/Footer/index.vue'
import StuButton from '@/components/Stu-Button/index.vue'
export default {
  name:'SiteManagement',
  components: { StuButton },
  data(){
    return {
      tableData:[{
        stuId:'20200202',
        name:'挖到哇发',
        collage:'风格啊额发我',
        classUsingTime:'3234132',
        ApplyVenue:'哇大公司',
        ApplicationTimePeriod:'202002',
        ReviewStatus:'打完'
      }],
      formAdd: {
        stuId:'',
        name:'',
        collage:'',
        classUsingTime:'',
        ApplyVenue:'',
        ApplicationTimePeriod:'',
        ReviewStatus:''
      },
      formEdit:{
        stuId:'',
        name:'',
        collage:'',
        classUsingTime:'',
        ApplyVenue:'',
        ApplicationTimePeriod:'',
        ReviewStatus:''
      },
      dialogTableVisibleAdd: false,
      dialogTableVisibleEdit: false,
      dialogTableVisibleDelete: false,
      currentRow: null, // 当前选中的行数据
      formLabelWidth:'120px',
      DialogCase:false,
    }
  },
  methods:{
    // 这里是增添信息的按钮
    AddInfo(){
      this.dialogTableVisibleAdd = false
      this.$message({
        message: '添加成功',
        type: 'success'
      })
      // 将新增的内容添加到tableData中
      this.tableData.push(this.formAdd)
      this.formAdd = {
        StudentID:'',
        name:'',
        sexy:'',
        class:'',
        BehavioralCategories:'',
        BehaviorType:'',
        OccurrenceTime:'',
        ApplicationEvaluation:'',
        ReviewStatus:'',
      }
    },
    // 这里是修改信息的按钮
    handleEdit() {
      this.selectedRow = this.$refs.table.selection;
      console.log(this.selectedRow)
      if (this.selectedRow.length === 0) {
        this.$message('请选择要修改的行');
        return;
      }
      if (this.selectedRow.length > 1) {
        this.$message('请选择单行进行修改');
        return;
      }
      this.dialogTableVisibleEdit = true
      this.formEdit = {
        stuId:this.selectedRow[0].stuId,
        name: this.selectedRow[0].name,
        collage: this.selectedRow[0].collage,
        classUsingTime: this.selectedRow[0].classUsingTime,
        ApplyVenue: this.selectedRow[0].ApplyVenue,
        ApplicationTimePeriod: this.selectedRow[0].ApplicationTimePeriod,
        ReviewStatus: this.selectedRow[0].ReviewStatus,

      }
    },
    // 这里是修改信息的按钮
    EditInfo(){
      let newData = {
        StudentID: this.formEdit.StudentID,
        name: this.formEdit.name,
        sexy: this.formEdit.sexy,
        class: this.formEdit.class,
        BehavioralCategories: this.formEdit.BehavioralCategories,
        BehaviorType: this.formEdit.BehaviorType,
        OccurrenceTime: this.formEdit.OccurrenceTime,
        ApplicationEvaluation: this.formEdit.ApplicationEvaluation,
        ReviewStatus: this.formEdit.ReviewStatus,
      }
      // 将选中编辑的数据替换
      let index = this.tableData.findIndex(item => item.StudentID === this.selectedRow[0].StudentID);
      if (index !== -1) {
        this.tableData.splice(index, 1, newData);
      }

      this.dialogTableVisibleEdit = false
      this.$message({
        message: '修改成功',
        type: 'success'
      })
      this.formEdit = {
        StudentID:'',
        name:'',
        sexy:'',
        class:'',
        BehavioralCategories:'',
        BehaviorType:'',
        OccurrenceTime:'',
        ApplicationEvaluation:'',
        ReviewStatus:'',
      }


    },
    // 这里是删除信息的按钮
    handleDelete() {
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
    // 流程跟踪
    showDialogCase(){
      this.DialogCase = !this.DialogCase
    },
  }

}
</script>

<style lang="scss" scoped>
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
