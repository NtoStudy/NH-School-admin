<template>
  <div>
    <el-button type="primary" size="small" icon="el-icon-plus" @click="dialogTableVisibleAdd = true">增加</el-button>
    <el-button type="primary" size="small" icon="el-icon-edit" @click="handleEdit">修改</el-button>
    <el-button type="primary" size="small" icon="el-icon-delete" @click="handleDelete">删除</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-release" >撤销</el-button>
    <stuButton></stuButton>
    <el-table
      :row-style="{ height: '40px' }"
      :data="tableData"
      border
      height="420"
      style="width: 100%"
      ref="table">
      <template>
        <el-table-column
          width="60"
          type="selection">
        </el-table-column>

        <el-table-column
          prop="StudentID"
          label="学号"
          width="140">
        </el-table-column>

        <el-table-column
          prop="name"
          label="姓名"
          width="100">
        </el-table-column>

        <el-table-column
          prop="sexy"
          label="性别"
          width="60">
        </el-table-column>

        <el-table-column
          prop="class"
          label="班级"
          width="120">
        </el-table-column>

        <el-table-column
          prop="BehavioralCategories"
          label="行为大类"
          width="140">
        </el-table-column>

        <el-table-column
          prop="BehaviorType"
          label="行为类别"
          width="100">
        </el-table-column>

        <el-table-column
          prop="OccurrenceTime"
          label="发生时间"
          width="180">
        </el-table-column>

        <el-table-column
          prop="ApplicationEvaluation"
          label="申请评估分值"
          width="180">
        </el-table-column>

        <el-table-column
          prop="ReviewStatus"
          label="审核状态">
        </el-table-column>
      </template>

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
          <span class="red"> {{tableData.length}} </span>
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

    <el-dialog title="请输入日常事件内容" :visible.sync="dialogTableVisibleAdd">
      <el-form :model="formAdd">
        <el-form-item label="学号" :label-width="formLabelWidth">
          <el-input v-model="formAdd.StudentID" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="formAdd.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="formAdd.sexy" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="班级" :label-width="formLabelWidth">
          <el-input v-model="formAdd.class" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="行为大类" :label-width="formLabelWidth">
          <el-input v-model="formAdd.BehavioralCategories" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="行为类别" :label-width="formLabelWidth">
        <el-input v-model="formAdd.BehaviorType" autocomplete="off"></el-input>
      </el-form-item>
        <el-form-item label="发生时间" :label-width="formLabelWidth">
        <el-input v-model="formAdd.OccurrenceTime" autocomplete="off"></el-input>
      </el-form-item>
        <el-form-item label="申请评估分值" :label-width="formLabelWidth">
        <el-input v-model="formAdd.ApplicationEvaluation" autocomplete="off"></el-input>
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

    <el-dialog title="请输入日常事件内容" :visible.sync="dialogTableVisibleEdit">
      <el-form :model="formEdit">
        <el-form-item label="学号" :label-width="formLabelWidth">
          <el-input v-model="formEdit.StudentID" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="formEdit.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="formEdit.sexy" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="班级" :label-width="formLabelWidth">
          <el-input v-model="formEdit.class" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="行为大类" :label-width="formLabelWidth">
          <el-input v-model="formEdit.BehavioralCategories" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="行为类别" :label-width="formLabelWidth">
          <el-input v-model="formEdit.BehaviorType" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="发生时间" :label-width="formLabelWidth">
          <el-input v-model="formEdit.OccurrenceTime" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="申请评估分值" :label-width="formLabelWidth">
          <el-input v-model="formEdit.ApplicationEvaluation" autocomplete="off"></el-input>
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
import StuButton from '@/components/Stu-Button/index.vue'
import Footer from '@/components/Footer/index.vue'

export default {
  components: { StuButton },
  name:'DailyBehaviorIndex',
  data() {
    return {
      tableData:[
        {
          StudentID:'230202020',
          name:'一小池勺',
          sexy:'男',
          class:'20202020',
          BehavioralCategories:'福海你发我的',
          BehaviorType:'万家名城',
          OccurrenceTime:'2020202',
          ApplicationEvaluation:'202020',
          ReviewStatus:'无',
        },
        {
          StudentID:'230202020',
          name:'一小池勺',
          sexy:'男',
          class:'20202020',
          BehavioralCategories:'福海你发我的',
          BehaviorType:'万家名城',
          OccurrenceTime:'2020202',
          ApplicationEvaluation:'202020',
          ReviewStatus:'无',
        },
        {
          StudentID:'230202020',
          name:'一小池勺',
          sexy:'男',
          class:'20202020',
          BehavioralCategories:'福海你发我的',
          BehaviorType:'万家名城',
          OccurrenceTime:'2020202',
          ApplicationEvaluation:'202020',
          ReviewStatus:'无',
        }
      ],
      formAdd: {
        StudentID:'',
        name:'',
        sexy:'',
        class:'',
        BehavioralCategories:'',
        BehaviorType:'',
        OccurrenceTime:'',
        ApplicationEvaluation:'',
        ReviewStatus:'',
      },
      formEdit:{
        StudentID:'',
        name:'',
        sexy:'',
        class:'',
        BehavioralCategories:'',
        BehaviorType:'',
        OccurrenceTime:'',
        ApplicationEvaluation:'',
        ReviewStatus:'',
      },
      dialogTableVisibleAdd: false,
      dialogTableVisibleEdit: false,
      dialogTableVisibleDelete: false,
      currentRow: null, // 当前选中的行数据
      formLabelWidth:'120px',

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
        StudentID: this.selectedRow[0].StudentID,
        name: this.selectedRow[0].name,
        sexy: this.selectedRow[0].sexy,
        class: this.selectedRow[0].class,
        BehavioralCategories: this.selectedRow[0].BehavioralCategories,
        BehaviorType: this.selectedRow[0].BehaviorType,
        OccurrenceTime: this.selectedRow[0].OccurrenceTime,
        ApplicationEvaluation: this.selectedRow[0].ApplicationEvaluation,
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

    }
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
