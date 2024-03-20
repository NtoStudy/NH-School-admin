<template>
  <div class="AndAwardsRequested">
    <el-button>跟踪申请项目进度</el-button>
    <el-button>导出申请记录</el-button>
    <el-table
      :data="tableData"
      style="width: 100%"
      height="650">
      <el-table-column width="60" type="selection"></el-table-column>
      <!-- 这里使用prop属性绑定数据行的字段 -->
      <el-table-column label="评奖学年" width="200" prop="year"></el-table-column>
      <el-table-column label="申请奖项" width="200" prop="applicationAward"></el-table-column>
      <el-table-column label="奖项类别" width="200" prop="awardType"></el-table-column>
      <el-table-column label="奖项金额" width="180" prop="awardAmount"></el-table-column>
      <el-table-column label="申请时间" prop="applicationTime"></el-table-column>
      <el-table-column label="评审结果" width="200" prop="reviewResult"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'AndAwardsRequested',
  data () {
    return {
      tableData: [
        {
          year: '2022-2023', // "评奖学年"
          applicationAward: 'Outstanding Student', // "申请奖项"
          awardType: 'Scholarship', // "奖项类别"
          awardAmount: '5000 RMB', // "奖项金额"
          applicationTime: '2022-09-01', // "申请时间"
          reviewResult: '通过' // "评审结果"
        },
        {
          year: '2021-2022',
          applicationAward: 'Academic Excellence',
          awardType: 'Research Grant',
          awardAmount: '8000 RMB',
          applicationTime: '2021-09-01',
          reviewResult: '审核中'
        },
        {
          year: '2020-2021',
          applicationAward: 'Outstanding Athlete',
          awardType: 'Athletic Grant',
          awardAmount: '7000 RMB',
          applicationTime: '2020-09-01',
          reviewResult: '未通过'
        }
      ]
    }
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
