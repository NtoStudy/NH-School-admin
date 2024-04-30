<template>
  <div class="AndAwardsRequested">

    <el-button @click="changeShow">跟踪申请项目进度</el-button>
    <el-button @click="exportExcel">导出申请记录</el-button>
    <el-table
      :data="columns"
      style="width: 100%"
      height="650"
      border>

      <el-table-column width="60" label="选择">
        <template>
          <el-checkbox></el-checkbox>
        </template>
      </el-table-column>
      <!-- 这里使用prop属性绑定数据行的字段 -->
      <el-table-column
       v-for="(item,index) in ScholarshipProgressList"
       :key="index"
       :prop="item.prop"
       :label="item.label"
       width="180"
      ></el-table-column>

    </el-table>
    <el-dialog :visible.sync="showCase">
      <project-progress-tracker></project-progress-tracker>
    </el-dialog>
  </div>
</template>

<script>
import ExportJsonExcel from 'js-export-excel'
import { mapState } from 'vuex'

export default {
  name: 'AndAwardsRequested',
  data() {
    return {
      showCase:false,
      ScholarshipProgressList:[
        { prop: 'awardCycle', label:'评奖学年'},
        { prop: 'applicationAward', label:'申请奖项'},
        { prop: 'scholarshipType', label:'奖项类别'},
        { prop: 'money', label:'奖项金额'},
        { prop: 'applicationTime', label:'申请时间'},
        { prop: 'examineStatus', label:'评审结果'},


      ],
      propLabel: {
        year: '评奖学年',
        applicationAward: '申请奖项',
        awardType: '奖项类别',
        awardAmount: '奖项金额',
        applicationTime: '申请时间',
        reviewResult: '评审结果'
      },
      excelTable: []
    }
  },
  methods: {
    exportExcel() {
      const option = {}
      this.columns.forEach((item) => {
        const obj = {}
        for (const k in item) {
          obj[this.propLabel[k]] = item[k]
        }
        this.excelTable.push(obj)
      })
      option.fileName = '学校学生统计数据'
      const labelList = []
      for (const k in this.propLabel) {
        labelList.push(this.propLabel[k])
      }
      option.datas = [
        {
          sheetData: this.excelTable,
          sheetName: 'sheet1',
          sheetFilter: labelList,
          sheetHeader: labelList,
          columnWidths: ['4', '8', '8']
        },
        {
          sheetData: this.columns,
          sheetName: 'sheet2',
          sheetFilter: Object.keys(this.propLabel),
          sheetHeader: labelList,
          columnWidths: ['8', '8', '8']
        }
      ]
      const toExcel = new ExportJsonExcel(option)
      toExcel.saveExcel()
    },
    // 跟踪申请项目进度
    changeShow(){
      this.showCase = !this.showCase
    }
  },
  mounted() {
    this.$store.dispatch('AndAwardsRequested')
  },
  computed:{
    ...mapState({
      columns: state => state.Awards.ScholarshipProgressList
    })
  }
}
</script>

<style lang="scss" scoped>
.AndAwardsRequested {
  .el-button {
    margin-bottom: 25px;
  }
  .el-table {
    border-radius: 25px;
  }
}
</style>
