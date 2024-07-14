<template>
  <div class="NanPersonalInformation">
    <el-button @click.native="isOk">保存</el-button>
    <el-row :gutter="20">
      <el-col class="left" style="padding-left: 0" :span="4">
        <!--   基本信息， 联系方式， 家庭成员信息， 其它信息     -->
        <div class="left_menu">
          <el-menu
            default-active="1"
            >
            <el-menu-item index="1">
              <i class="el-icon-user"></i>
              <span slot="title">基本信息</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-phone-outline"></i>
              <span slot="title">联系方式</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-house"></i>
              <span slot="title">家庭成员信息</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-news"></i>
              <span slot="title">其它信息</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>

      <el-col class="right" style="padding-right: 0" :span="20">
        <div class="right_scrollView">
          <informationTitle information-title="基本信息"></informationTitle>
          <el-table :span-method="objectSpanMethod" border :show-header="false" :data="tableData" style="width: 100%">
            <!-- 提示信息列 -->
            <el-table-column width="180px" prop="tag_l" align="right"></el-table-column>
            <!-- 填写列1 -->
            <el-table-column>
              <template v-slot="scope">
                  <component :is="getFormControlType(scope.row.formControls, 'row1')" v-model="scope.row.formControls.row1.value"></component>
              </template>
            </el-table-column>
            <!-- 提示信息列 -->
            <el-table-column  width="180px" align="right" prop="tag_r"></el-table-column>
            <!-- 填写列2 -->
            <el-table-column>
              <template v-slot="scope">
                <component :is="getFormControlType(scope.row.formControls, 'row2')" v-model="scope.row.formControls.row2.value"></component>
              </template>
            </el-table-column>
            <el-table-column>
              <template v-slot="scope">
                  <component :is="scope.row.formControls.isUpload ? uploadPhoto : ''"></component>
              </template>
            </el-table-column>
          </el-table>



          <informationTitle information-title="联系方式"></informationTitle>
          <el-table border :data="tableData_b" :show-header="false">
            <el-table-column prop="tag_l"></el-table-column>
            <el-table-column label="Data_l"></el-table-column>
            <el-table-column prop="tag_r"></el-table-column>
            <el-table-column label="Data_r"></el-table-column>
          </el-table>



          <informationTitle information-title="家庭成员信息">
            <template #addRow>
              <div class="addRow" @click="addRow">新增成员信息</div>
            </template>
          </informationTitle>
          <el-table
            :row-style="{ height: '40px' }"
            :data="tableData_c"
            style="width: 100%"
            border>
            <el-table-column prop="name" label="姓名" width="80"></el-table-column>
            <el-table-column prop="age" label="年龄" width="60"></el-table-column>
            <el-table-column prop="relationship" label="关系" width="80"></el-table-column>
            <el-table-column prop="workplace" label="工作单位" width="140"></el-table-column>
            <el-table-column prop="city" label="工作地址" width="140"></el-table-column>
            <el-table-column prop="zip" label="单位邮编" width="80"></el-table-column>
            <el-table-column prop="identity" label="身份号码" width="200"></el-table-column>
            <el-table-column prop="ContactPhone" label="联系电话" width="140"></el-table-column>
            <el-table-column prop="occupation" label="职业" width="100"></el-table-column>
            <el-table-column prop="income" label="年收入" width="80"></el-table-column>
            <el-table-column prop="health" label="健康状况" width="120"></el-table-column>
            <el-table-column prop="operation" label="操作" width="80"></el-table-column>
          </el-table>
          <informationTitle information-title="其它信息"></informationTitle>
          <el-table></el-table>
        </div>
      </el-col>
    </el-row>



    <el-dialog :visible.sync="ShowCase" class="flex">
      <template #title>
        <h3>请根据你的真实情况输入你的个人信息</h3>
      </template>

      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" >

        <el-form-item label="姓名" >
          <el-input v-model="formLabelAlign.name" size="mini"></el-input>
        </el-form-item>

        <el-form-item label="年龄">
          <el-input v-model="formLabelAlign.age" size="mini"></el-input>
        </el-form-item>

        <el-form-item label="关系">
          <el-input v-model="formLabelAlign.relationship" size="mini"></el-input>
        </el-form-item>

        <el-form-item label="工作单位">
          <el-input v-model="formLabelAlign.workplace" size="mini"></el-input>
        </el-form-item>

        <el-form-item label="工作地址">
          <el-input v-model="formLabelAlign.city" size="mini"></el-input>
        </el-form-item>

        <el-form-item label="邮政编码">
          <el-input v-model="formLabelAlign.zip" size="mini"></el-input>
        </el-form-item>

        <el-form-item label="身份证号">
          <el-input v-model="formLabelAlign.identity" size="mini"></el-input>
        </el-form-item>

        <el-form-item label="联系电话">
          <el-input v-model="formLabelAlign.ContactPhone" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="职业">
          <el-input v-model="formLabelAlign.occupation" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="年收入">
          <el-input v-model="formLabelAlign.income" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="健康状态">
          <el-input v-model="formLabelAlign.health" size="mini"></el-input>
        </el-form-item>

      </el-form>

<!--      <template #default>-->
<!--        <el-input placeholder="请输入你的内容" v-model="jobId"></el-input>-->
<!--        <el-input placeholder="请输入你的内容" v-model="jobName"></el-input>-->
<!--      </template>-->
      <template #footer>
        <el-button round size="small" @click="cancel">取消</el-button>
        <el-button round size="small" @click="handleApply">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import informationTitle from '@/views/NanPersonalInformation/components/information-title.vue'
import uploadPhoto from '@/views/NanPersonalInformation/components/upload-photo.vue'
export default {
  name: 'NanAdminInfo',
  computed: {
    uploadPhoto () {
      return uploadPhoto
    }
  },
  components: {
    informationTitle,
    uploadPhoto
  },
  data() {
    return {

      tableData: [{
          tag_l: '职工号',
          tag_r: '姓名',
          formControls: {
            row1: { type: 'input', value: '002202066' },
            row2: { type: 'input', value: '薛' },
            isUpload: true
          }
        }, {
        tag_l: '性别',
        tag_r: '出生日期',
        formControls: {
          row1: { type: 'input',
            value: '男',
            options: [
              { label: '男', value: '男'},
              { label: '女', value: '女' }
            ]},

          row2: { type: 'datepicker', value: '' },
        }
      }, {
        tag_l: '学部',
        tag_r: '政治面貌',
        formControls: {
          row1: { type: 'input', value: '信息电子学部' },
          row2: { type: 'input', value: '党员' },
        }
      }, {
        tag_l: '专业',
        tag_r: '民族',
        formControls: {
          row1: { type: 'input', value: '软件工程' },
          row2: { type: 'input', value: '汉' },
        }
      }, {
        tag_l: '带班班级',
        tag_r: '身份证号',
        formControls: {
          row1: { type: 'input', value: '2202074' },
          row2: { type: 'input', value: '2141456314133213x' },
        }
      },
      {
        tag_l: '籍贯',
        tag_r: '户口',
        formControls: {
          row1: { type: 'input', value: '中国大陆' },
          row2: { type: 'input', value: '中国大陆' },
        }
      }],
      tableData_b: [
        {
          tag_l: '联系电话',
          tag_r: '电子邮箱',
        },
        {
          tag_l: 'QQ账号',
          tag_r: '微信号'
        },
        {
          tag_l: '邮政编码',
          tag_r: '身份证地址'
        },
      ],
      tableData_c: [{
        name: '管理员',
        age: '11',
        relationship: '1122',
        workplace: '41231',
        city: '23123',
        zip: '2313',
        identity: '1234214131231',
        ContactPhone:'23123',
        occupation: '12313',
        income: '23213',
        health: '13213',
        operation: '1313414'
      }],
      ShowCase: false,
      labelPosition: 'left',
      formLabelAlign: {
        name:'',
        city: '',
        zip: '',
        identity: '',
        ContactPhone:'',
        occupation: '',
        income: '',
        health: '',
      }
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    isOk() {
      this.$message.success('修改成功')
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    addRow () {
      this.ShowCase = !this.ShowCase
    },
    cancel(){
      this.ShowCase = !this.ShowCase
    },
    handleApply(){
      this.tableData_c.push(this.formLabelAlign)
      this.ShowCase = !this.ShowCase
        this.$message.success('添加成功')
    },
    columnStyle ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 2) {
        return 'background:	#F3F5F8;'
      }
    },
    getFormControlType(formControls, rowKey) {
      const control = formControls[rowKey]
      if (control.type === 'input') {
        return 'el-input'
      }
      if (control.type === 'datepicker') {
        return 'el-date-picker'
      }
      if (control.type === 'button') {
        return 'el-button'
      }
      if (control.type === 'select') {
        return 'el-select'
      }
      if(control.type === 'uploadPhoto') {
        return 'uploadPhoto'
      }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 4) { // 最后一列的索引
        if (rowIndex === 0) { // 第一行开始合并
          return {
            rowspan: 5, // 合并5行
            colspan: 1
          }
        } else if (rowIndex <= 4) { // 后续行不显示内容
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
      // 合并第6和第7行的第4、5列
      if (columnIndex === 3 && (rowIndex === 5 || rowIndex === 6)) {
        return {
          rowspan: 1,
          colspan: 2 // 合并2列（第4和第5列）
        }
      }
      // 合并8、9、10行的第2、3、4、5列
      if (columnIndex === 1 && (rowIndex === 7 || rowIndex === 8 || rowIndex === 9)) {
        return {
          rowspan: 1,
          colspan: 4 // 合并4列
        }
      }
      // 对于其他列和行，不进行合并
      return {
        rowspan: 1,
        colspan: 1
      }
    }
   }
}
</script>

<style lang="scss" scoped>
.NanPersonalInformation {
  padding: 30px;
}
.el-row {
  margin-bottom: 20px;
  height: 80vh;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: #dce0eb 0 0 10px 0;
  .el-col {
    height: 100%;
  }
  .left {
    background-color: #dce0eb;
    .left_menu {
      height: 100%;
      background-color: #fff;
    }
  }
  .right {
    background-color: #dce0eb;
    .right_scrollView {
      height: 100%;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #fff;
      /* 消除 el-table 表格移入后每行背景变色问题 */
      ::v-deep .el-table .el-table__body tr.hover-row > td {
        background-color:#ffffff!important;
      }
      ::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
        background-color:#ffffff!important;
      }
      ::v-deep .avatar-uploader {
        text-align: center;
      }
      .addRow {
        margin-left: 20px;
        font-size: 12px;
        color: #409eff;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
}

/* 在您的样式文件中添加 */
.el-form--custom {
  display: flex;
  flex-direction: column;
}

.el-form--custom .el-form-item {
  margin-bottom: 10px; /* 根据需要调整间距 */
}
</style>
