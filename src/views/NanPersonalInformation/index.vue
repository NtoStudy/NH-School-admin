<template>
  <div class="NanPersonalInformation">
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
            <el-table-column></el-table-column>
            <el-table-column prop="tag_r"></el-table-column>
            <el-table-column></el-table-column>
          </el-table>
          <informationTitle information-title="家庭成员信息">
            <template #addRow>
              <div class="addRow" @click="addRow">新增成员信息</div>
            </template>
          </informationTitle>
          <el-table
            :data="tableData_c"
            style="width: 100%"
            border
          >
            <el-table-column label="姓名"></el-table-column>
            <el-table-column label="年龄"></el-table-column>
            <el-table-column label="关系"></el-table-column>
            <el-table-column label="工作单位"></el-table-column>
            <el-table-column label="工作地址"></el-table-column>
            <el-table-column label="单位邮编"></el-table-column>
            <el-table-column label="身份号码"></el-table-column>
            <el-table-column label="联系电话"></el-table-column>
            <el-table-column label="职业"></el-table-column>
            <el-table-column label="年收入"></el-table-column>
            <el-table-column label="健康状况"></el-table-column>
            <el-table-column label="操作"></el-table-column>
          </el-table>
          <informationTitle information-title="其它信息"></informationTitle>
          <el-table></el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import informationTitle from '@/views/NanPersonalInformation/components/information-title.vue'
import uploadPhoto from '@/views/NanPersonalInformation/components/upload-photo.vue'
export default {
  name: 'NanPersonalInformation',
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
          tag_l: '学号',
          tag_r: '姓名',
          formControls: {
            row1: { type: 'input', value: '' },
            row2: { type: 'datepicker', value: '' },
            isUpload: true
          }
        }, {
        tag_l: '性别',
        tag_r: '出生日期',
        formControls: {
          row1: { type: 'input', value: '' },
          row2: { type: 'datepicker', value: '' },
        }
      }, {
        tag_l: '年级',
        tag_r: '学年',
        formControls: {
          row1: { type: 'select', value: '' },
          row2: { type: 'button', value: '' },
        }
      }, {
        tag_l: '学部',
        tag_r: '政治面貌',
        formControls: {
          row1: { type: 'select', value: '' },
          row2: { type: 'button', value: '' },
        }
      }, {
        tag_l: '专业',
        tag_r: '民族',
        formControls: {
          row1: { type: 'select', value: '' },
          row2: { type: 'button', value: '' },
        }
      }, {
        tag_l: '班级',
        tag_r: '学籍异动',
        formControls: {
          row1: { type: 'select', value: '' },
          row2: { type: 'button', value: '' },
        }
      }, {
        tag_l: '入学时间',
        tag_r: '身份证号',
        formControls: {
          row1: { type: 'select', value: '' },
          row2: { type: 'button', value: '' },
        }
      }, {
        tag_l: '籍贯',
        formControls: {
          row1: { type: 'select', value: '' },
          row2: { type: 'button', value: '' },
        }
      }, {
        tag_l: '户口',
        formControls: {
          row1: { type: 'select', value: '' },
          row2: { type: 'button', value: '' },
        }
      }, {
        tag_l: '生源地',
        formControls: {
          row1: { type: 'select', value: '' },
          row2: { type: 'button', value: '' },
        }
      }],
      tableData_b: [
        {
          tag_l: '联系电话',
          tag_r: '电子邮箱'
        },
        {
          tag_l: 'QQ账号',
          tag_r: '监护人电话'
        },
        {
          tag_l: '邮政编码'
        },
        {
          tag_l: '身份证地址'
        },
        {
          tag_l: '微信号'
        }
      ],
      tableData_c: [{
        name: '',
        age: '',
        relationship: '',
        workplace: '',
        city: '',
        zip: '',
        identity: '',
        occupation: '',
        income: '',
        health: '',
        operation: ''
      }, {
        name: '',
        age: '',
        relationship: '',
        workplace: '',
        city: '',
        zip: '',
        identity: '',
        occupation: '',
        income: '',
        health: '',
        operation: ''
      }, {
        name: '',
        age: '',
        relationship: '',
        workplace: '',
        city: '',
        zip: '',
        identity: '',
        occupation: '',
        income: '',
        health: '',
        operation: ''
      }, {
        name: '',
        age: '',
        relationship: '',
        workplace: '',
        city: '',
        zip: '',
        identity: '',
        occupation: '',
        income: '',
        health: '',
        operation: ''
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    addRow () {
      console.log(1)
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
</style>
